import React, { useState } from "react";
import "./ContactFormStyles.css";
import { Button } from "@mui/material";
import instance from "../../service/serviceOrder.jsx";
import Swal from "sweetalert2";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        instance.post('/sendMessage', {
            name: formData.username,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.location.href = "/about";
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred. Please try again.',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    name="subject"
                    placeholder="Enter your Subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Type your message here"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button type="submit">Send Message</Button>
            </form>
        </div>
    );
}

export default ContactForm;
