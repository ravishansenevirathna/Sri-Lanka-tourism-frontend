import React from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    Grid,
    Link,
} from '@mui/material';


const LoginPage = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url('../src/assets/react.svg')`, // Path to your background image
                backgroundSize: 'cover', // Ensures the image covers the entire viewport
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents tiling
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Transparent Login Container */}
            <Container
                maxWidth="xs"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                    borderRadius: 2,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    Login
                </Typography>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="Email Address"
                        type="email"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="Password"
                        type="password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, py: 1 }}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                        <Grid item>
                            <Link href="#" variant="body2" underline="hover">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" underline="hover">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

// Sign In Component
const SignInPage = () => {
    return (
        <Container
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: 4,
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                Sign In
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Email Address"
                    type="email"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Password"
                    type="password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, py: 1 }}
                >
                    Sign In
                </Button>
                <Grid container justifyContent="center" sx={{ mt: 2 }}>
                    <Grid item>
                        <Link href="#" variant="body2" underline="hover">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export { LoginPage, SignInPage };
