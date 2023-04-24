import React from 'react'
import '../RegisterForm/RegisterForm.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="register-form-container">
    <h2>Login</h2>
    <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
        <br />
        <p>Donot have Acoount <Link to='../register'>register here!!</Link></p>

        <div className="social-login-container">
            <button className="social-login-button google">Login with Google</button>
            <button className="social-login-button github">Login with Github</button>
        </div>
    </form>
</div>
  )
}

export default Login
