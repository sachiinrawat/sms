import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "../styles/Login.css"
import LoginLogo from "../assets/LoginLogo.jpg"

export default function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const [isSignup, setIsSignup] = useState(location.pathname === '/signup')

    useEffect(() => {
        setIsSignup(location.pathname === '/signup')
    }, [location.pathname])

    const toggleForm = () => {
        if (isSignup) {
            navigate('/login')
        } else {
            navigate('/signup')
        }
    }

    return (
        <div className="container">
            <div className="center-container">
                <div className="left">
                    <img src={LoginLogo} alt="" />
                </div>
                <div className="right">
                    <div className="form-container">
                        <h2>{isSignup ? "Sign Up Here" : "Login Here"}</h2>
                        <div className="main-form">
                            {isSignup && (
                                <>
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" placeholder="Enter your full name" />
                                </>
                            )}
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="Enter your email" />
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="Enter your password" />
                            {isSignup && (
                                <>
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" placeholder="Confirm your password" />
                                </>
                            )}
                            <button>{isSignup ? "Sign Up" : "Login"}</button>
                        </div>
                        <h3>
                            {isSignup ? (
                                <>Already have an Account? <span onClick={toggleForm} className="toggle-link">Login</span></>
                            ) : (
                                <>Don't have an Account? <span onClick={toggleForm} className="toggle-link">Signup</span></>
                            )}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
