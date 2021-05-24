import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { Logo } from './Logo';
import { BarOptions } from './BarOptions';
// import { Android } from '@material-ui/icons';

export const NavBar = () => {

    return (
        <>
            <CssBaseline />
            <AppBar position="relative" style={{marginBottom: '2rem'}}>
                <Toolbar>
                    <Logo />
                    <Container>
                        <BarOptions />
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}