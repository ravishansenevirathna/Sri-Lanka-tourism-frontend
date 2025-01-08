import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./LoginStyles.css"
import NavBar from "../navBar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";


function LogIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Form Data: ", formData);
        // Add your signup logic here
    };

    return (
        <>
            <NavBar />
            <div className="background">
            <Container maxWidth="sm" className="login-container">
                <Box className="login-box">
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        className="login-title"
                    >
                        LogIn
                    </Typography>
                    <form onSubmit={handleSubmit} className="login-form">
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="login-button"
                        >
                            LogIn
                        </Button>
                    </form>
                </Box>
            </Container>
            </div>
            <Footer /> {/* Footer at the bottom */}
        </>
    );
}

export default LogIn;
