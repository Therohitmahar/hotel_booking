
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

let profile = document.getElementById("profile")
let cross = document.getElementById("cross")
let LoginForm = document.querySelector(".login-form")
profile.addEventListener("click", () => {
    LoginForm.style.display = "block"
})
cross.addEventListener("click", () => {
    LoginForm.style.display = "none"
})

const firebaseConfig = {
    apiKey: "AIzaSyDQM3EvMjU0iIfQCiHbO15DmGruWmuDhoU",
    authDomain: "login-in-romo.firebaseapp.com",
    databaseURL: "https://login-in-romo-default-rtdb.firebaseio.com",
    projectId: "login-in-romo",
    storageBucket: "login-in-romo.appspot.com",
    messagingSenderId: "463683376333",
    appId: "1:463683376333:web:9e51a1648672c3c9118584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = app.database


let email = document.getElementById("email");
let password = document.getElementById("password");
window.register = function () {

    let user_data = {
        email: email.value,
        password: password.value,
    }
    createUserWithEmailAndPassword(auth, user_data.email, user_data.password)
        .then(function (success) {
            LoginForm.style.display = "none"

            alert("User Created")
        }).catch(function (error) {
            alert("error ", error)
        })
    console.log(user_data);
}
const signUpBtn = document.getElementById("signUp")
signUpBtn.addEventListener("click", () => {
    console.log("hello");
    register()
})

window.logIn = function () {
    var user_data = {
        email: email.value,
        password: password.value,
    }
    signInWithEmailAndPassword(auth, user_data.email, user_data.password)
        .then(function (userCredential) {
            var user = userCredential.user;
            console.log(user.uid);
            LoginForm.style.display = "none"

            alert("Login Successful");
        })
        .catch(function (error) {
            alert("Login Error: " + error.message);
        });
}

const logInBtn = document.getElementById("logIn")
logInBtn.addEventListener("click", () => {
    console.log("login btn clicked");
    logIn();
});