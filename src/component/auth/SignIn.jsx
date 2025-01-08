import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./SignInStyles.css";
import Footer from "../footer/Footer.jsx";
import NavBar from "../navBar/NavBar.jsx";
import instance from "../../service/serviceOrder.jsx";

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

        instance.post('/signIn', {
            name: formData.username,
            email: formData.email,
            password: formData.password
        })
            .then(() => {
                alert("Successfully Signed Up!");
                window.location.href = "/login";
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <>
            <NavBar />
            <div className="background">
                <Container maxWidth="sm" className="signin-container">
                    <Box className="signin-box">
                        <Typography
                            variant="h4"
                            gutterBottom
                            align="center"
                            className="signin-title"
                        >
                            Welcome to Explore Sri Lanka
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className="signin-subtitle"
                        >
                        </Typography>
                        <form onSubmit={handleSubmit} className="signin-form">
                            <TextField
                                fullWidth
                                size="small"
                                label="Username"
                                name="username"
                                variant="outlined"
                                margin="normal"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                size="small"
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                size="small"
                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                value={formData.password}
                                onChange={handleChange}
                                required
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
                            Already have an account?{" "}
                            <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
                                Log in here
                            </Link>
                        </Typography>
                    </Box>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
