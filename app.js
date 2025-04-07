import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "./firebase-config.js";

const googleProvider = new GoogleAuthProvider();

window.googleSignIn = function googleSignIn() {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;  
            if (user.email === "admin@gmail.com") {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = "home.html";
            }
        })
        .catch((error) => {
            console.error("Google Sign-In Error:", error);
            alert("Error: " + error.message);
        });
};

window.signup = function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "signin.html";
            alert("Thank you, " + userCredential.user.email);
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });

 
};

window.login = function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            if (user.email === "admin@gmail.com") {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = "home.html";
            }
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
};

window.showpassword = function showpassword() {
    let showPassword = document.getElementById("loginPassword");
    let show = document.getElementById("show");
    const type = showPassword.type === "text";
    showPassword.type = type ? "password" : "text";   
    if (showPassword.type === "text") {
        show.innerHTML = `<i id="togglePassword" class="fa fa-eye-slash" onclick="hidepassword()"></i>`;
    }
};

window.hidepassword = function hidepassword() {
    let showPassword = document.getElementById("loginPassword");
    let show = document.getElementById("show");
    const type = showPassword.type === "password";
    showPassword.type = type ? "text" : "password";   
    if (showPassword.type === "password") {
        show.innerHTML = `<i id="togglePassword" class="fa fa-eye" onclick="showpassword()"></i>`;
    }
};


window.forgotPassword = function forgotPassword() {
    const email = document.getElementById("resetEmail").value;

    if (!email) {
        alert("Please enter your email!");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset link has been sent to your email!");
        })
        .catch((error) => {
            
            alert("Error: " + error.message);
        });
};


 
