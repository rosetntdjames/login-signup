import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false)

  return (
    <div className={`container ${isSignup ? 'active' : ''}`}>
      
      <div className="curved-shape"></div>
      <div className="curved-shape1"></div>

      {/* LOGIN FORM */}
      <div className="form-box Login">
        <h2 className="animation" style={{ '--D': 0 }}>Login</h2>

        <form action="#">
          <div className="input-box animation" style={{ '--D': 1 }}>
            <input type="text" className="input" required />
            <label>Email</label>
            <i className="fa-solid fa-envelope"></i>
          </div>

          <div className="input-box animation" style={{ '--D': 2 }}>
            <input type="password" className="input" required />
            <label>Password</label>
            <i className="fa-solid fa-key"></i>
          </div>

          <div className="input-box animation" style={{ '--D': 3 }}>
            <button className="btn" type="submit">Login</button>
          </div>

          <div className="regi-link animation" style={{ '--D': 4 }}>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={() => setIsSignup(true)}>
                Create One!
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Login">
        <h2 className="animation" style={{ '--D': 0 }}>Welcome Back!</h2>
        <p className="animation" style={{ '--D': 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* SIGNUP FORM */}
      <div className="form-box Signup">
        <h2 className="animation" style={{ '--D': 0 }}>Sign Up</h2>

        <form action="#">
          <div className="input-box animation" style={{ '--D': 1 }}>
            <input type="text" className="input" required />
            <label>Email</label>
            <i className="fa-solid fa-envelope"></i>
          </div>

          <div className="input-box animation" style={{ '--D': 2 }}>
            <input type="password" className="input" required />
            <label>Password</label>
            <i className="fa-solid fa-key"></i>
          </div>

          <div className="input-box animation" style={{ '--D': 3 }}>
            <button className="btn" type="submit">Sign Up</button>
          </div>

          <div className="regi-link animation" style={{ '--D': 4 }}>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={() => setIsSignup(false)}>
                Login!
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Signup">
        <h2 className="animation" style={{ '--D': 0 }}>Welcome!</h2>
        <p className="animation" style={{ '--D': 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

    </div>
  )
}

export default LoginSignup
