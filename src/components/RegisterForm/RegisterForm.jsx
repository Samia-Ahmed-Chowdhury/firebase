import React, { useState } from 'react';
import './RegisterForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


const RegisterForm = () => {
    const navigate = useNavigate()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();


    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to submit form data to backend
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(name, email, password)

        if (!/(?=.*[A-Z])/.test(password)) {
            console.log('At least one uppercase character ')
        }


    };

    const handleGoogleSignup = () => {
        console.log(`sign up with Google`)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user.displayName;
                console.log(loggedInUser);
                navigate("home", {
                    state: {
                        loggedInUser
                    },
                })
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    };

    const handleGithubSignup = () => {
        console.log(`sign up with GitHub`)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)

            });

    };

    return (
        <div className="register-form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <div style={{ position: 'relative', top: '0', right: '0' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <span style={{ position: 'absolute', top: '0', right: '0' }}>(*_*)</span>
                </div>
                <button type="submit">Register</button>
                <br />
                <p>Already have Acoount <Link to='../login'>Login here!!</Link></p>

            </form>
            <div className="social-login-container">
                <button onClick={handleGoogleSignup} className="social-login-button google">Sign up with Google</button>
                <button onClick={handleGithubSignup} className="social-login-button github">Sign up with Github</button>
            </div>
        </div>
    );
};

export default RegisterForm;
