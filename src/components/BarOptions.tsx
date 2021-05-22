import React from 'react';
import { ButtonGroup, Button, Box, Typography, Slider } from '@material-ui/core';

export const BarOptions = () => {
    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center">
                <ButtonGroup variant="text" color="inherit" aria-label="text primary button group" >
                    <Button>Bubble Sort</Button>
                    <Button>Heap Sort</Button>
                    <Button>Merge Sort</Button>
                    <Button>Quick Sort</Button>
                </ButtonGroup>
                <Typography style={{ margin: '0 10px 0 5vw' }}>Speed:</Typography>
                <Slider aria-label="ios slider" defaultValue={60} style={{ maxWidth: '100px', color: '#fff' }} />
                <Typography style={{ margin: '0 10px 0 5vw' }}>Size:</Typography>
                <Slider aria-label="ios slider" defaultValue={60} style={{ maxWidth: '100px', color: '#fff' }} />
                <Button variant="contained" style={{ marginLeft: '5vw', backgroundColor: '#fff' }}>SORT</Button>
            </Box>
        </>
    )
}