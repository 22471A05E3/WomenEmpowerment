import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(formData);
    };

    const sendMessage = async (data) => {
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_7hvbyic',
                    template_id: 'template_kjvhgpq',
                    user_id: '5LWhZq4dcuLCc6kEB',
                    template_params: {
                        fullName: data.fullName,
                        email: data.email,
                        message: data.message,
                    },
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Error sending email:', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="contact-form-container">
                <div className="contact-card">
                    <div className="contact-image">
                        <img src="https://img.freepik.com/free-vector/creative-march-womens-day-celebration-background_1017-30265.jpg" alt="Contact Us" />
                    </div>
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                        {isSubmitted && <p className="success-message">Message Sent Successfully!</p>}
                    </div>
                </div>
            </div>

            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.402586698294!2d80.05319487460258!3d16.1997299359321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a8729805efff9%3A0x3c49f6f7829f8426!2sNarasaraopeta%20Engineering%20College%20(Autonomous)!5e0!3m2!1sen!2sin!4v1738684239576!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </>
    );
}
