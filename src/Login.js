import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; 

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            setIsLogin(true);
            navigate("/home");
        } catch (err) {
            setIsLogin(false);
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <>
            <div className="body">
                <div className="title">LOGIN</div>
                <div className="container">
                    <div className="left"></div>
                    <div className="right">
                        <div className="form-box">
                            <form onSubmit={handleSubmit}>
                                <p>Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <p>Password</p>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit">
                                    Submit
                                </button>
                            </form>

                            {error && <p style={{ color: 'red' }}>{error}</p>}

                            <p>
                                Don't have an account?{' '}
                                <a className="reg" href="#" onClick={() => navigate("/register")}>
                                    Register
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
