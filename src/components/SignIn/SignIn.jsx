import React from 'react'
import "./SignIn.css"
const SignIn = () => {
    return (
        <>
            <div class="container">
                <div class="SignIn_logo">
                    <img src="../img/Screenshot (70).png" alt=" Logo" />

                </div>
                <form class="signin-form">
                    <h2 class="signin_title">Sign in</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign in</button>
                </form>
                <div class="signup-link">
                    <p>Don't have an account? <a href="/register">Join now</a></p>
                </div>
            </div>
        </>
    )
}

export default SignIn