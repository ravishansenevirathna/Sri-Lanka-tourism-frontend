import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./SignInStyles.css";
import Footer from "../footer/Footer.jsx";
import NavBar from "../navBar/NavBar.jsx";

function SignIn() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SignIn Form Data: ", formData);
        // Add your signup logic here
    };

    return (
        <>
            <NavBar /> {/* Navbar at the top */}
            <div className="background">
            <Container maxWidth="sm" className="signin-container">
                <Box className="signin-box">
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        className="signin-title"
                    >
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit} className="signin-form">
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            variant="outlined"
                            margin="normal"
                            value={formData.username}
                            onChange={handleChange}
                        />
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
                            className="signin-button"
                        >
                            Sign Up
                        </Button>
                    </form>
                    <Typography
                        variant="body2"
                        align="center"
                        className="signin-footer"
                        sx={{ marginTop: "1rem" }}
                    >
                        Already signed in?{" "}
                        <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
                            Log in here
                        </Link>
                    </Typography>
                </Box>
            </Container>
            </div>
            <Footer /> {/* Footer at the bottom */}
        </>
    );
}

export default SignIn;
