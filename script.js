
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAvTfKzOL40YNwf5dMwn9F3eRtnG2B9jbg",
    authDomain: "gamezone-755dc.firebaseapp.com",
    projectId: "gamezone-755dc",
    storageBucket: "gamezone-755dc.firebasestorage.app",
    messagingSenderId: "987842985299",
    appId: "1:987842985299:web:71d3e4a367339d2ac975a6",
    measurementId: "G-KN2W0KCBLF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const result = await createUserWithEmailAndPassword(
                auth, email, password
            );

            await updateProfile(result.user, {
                displayName: username
            });

            alert("WELCOME TO GAMEZONE, " + username + "!");
            window.location.href = "login.html";

        } catch (error) {
            alert(error.message);
        }
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {
            await signInWithEmailAndPassword(auth, email, password);

            alert("LOGIN SUCCESSFUL! WELCOME TO GAMEZONE!");
            window.location.href = "dashboard.html";

        } catch (error) {
            alert(error.message);
        }
    });
}
