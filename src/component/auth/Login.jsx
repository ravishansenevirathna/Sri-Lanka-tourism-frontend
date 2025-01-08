import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import "./LoginStyles.css"
import NavBar from "../navBar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import instance from "../../service/serviceOrder.jsx";
import { useNavigate } from "react-router-dom";


function LogIn() {

    const navigate = useNavigate();

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


        instance.post('/login', {
            email: formData.email,
            password: formData.password
        })
            .then(function (response) {
                localStorage.setItem('userToken',response.data.token);
                navigate("/");
                // window.location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });
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
                            size="small"
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
                            size="small"
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
            <Footer />
        </>
    );
}

export default LogIn;
