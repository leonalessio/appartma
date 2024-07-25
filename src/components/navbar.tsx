import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ResponsiveAppBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Typography for large screens */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' }, // Hide on xs screens, show on md and up
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        APPARTMA COCCOLO
                    </Typography>
                    {/* Typography for small screens */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' }, // Show on xs screens, hide on md and up
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        APPARTMA COCCOLO
                    </Typography>

                    {/* Box to push the button container to the right */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Container around the button taking up 1/3 of the screen */}
                    <Box
                        sx={{
                            width: { xs: '40%', md: '20%' }, // Full width on small screens, 1/3 on medium and larger
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' }, // Center on small screens, align end on md and larger
                        }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                borderRadius: '20px', // Curved corners
                                padding: '8px 40px', // Space inside button
                                textTransform: 'none', // Prevent uppercase text transformation
                                width: 'auto', // Auto width based on content
                            }}
                        >
                            BOOK NOW
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
