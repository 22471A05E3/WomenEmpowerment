import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; 

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            alert("Registration successful!");
            navigate("/login"); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="body">
                <div className="title">REGISTER</div>
                <div className="container">
                    <div className="left"></div>
                    <div className="right">
                        <div className="form-box">
                            <form>
                            <p>FullName</p>
                                <input
                                    type="text"
                                    name="FullName"
                                    required
                                />
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
                                <button type="submit" onClick={handleSubmit}>
                                    Register
                                </button>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                            </form>

                            <p>
                                Already have an account?{' '}
                                <a className='log' href="/Login" onClick={() => navigate("/login")}>
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
