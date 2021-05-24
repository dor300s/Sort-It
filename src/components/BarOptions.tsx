import React, { useState, useContext, useEffect } from 'react';
import { ButtonGroup, Button, Box, Typography, Slider } from '@material-ui/core';
import { SortType } from '../types/Sort';
import { State, StateContext } from '../store/GlobalState';
import { generateNumbers } from '../services/generateNumbersService';



export const BarOptions = () => {
    const [value, SetValue] = useContext(StateContext);

    const handleSortTypeChange = (val: SortType) => {
        SetValue((prev: State) => ({ ...prev, sortType: val }))
    }

    useEffect(() => {
        handleGenerate()
    }, [value.size])

    const handleChange = (name: 'speed' | 'size') => (e: any, val: any) => {
        if (name === 'speed') val = (1e3 / val)
        SetValue((prev: State) => ({ ...prev, [name]: val }))
    }

    const handleSortToggle = () => {
        value.setIsRunning((prev: boolean) => !prev);
    }

    const handleGenerate = () => {
        SetValue((prev: State) => ({ ...prev, numbers: generateNumbers(prev.size) }))
    }



    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center">
                <ButtonGroup variant="text" color="inherit" aria-label="text primary button group" >
                    <Button disabled={value.isRunning} onClick={() => handleSortTypeChange('Bubble Sort')}>Bubble Sort</Button>
                    <Button disabled={value.isRunning} onClick={() => handleSortTypeChange('Merge Sort')}>Merge Sort</Button>
                    <Button disabled={value.isRunning} onClick={() => handleSortTypeChange('Quick Sort')}>Quick Sort</Button>
                </ButtonGroup>
                <Typography style={{ margin: '0 10px 0 5vw' }}>Speed:</Typography>
                <Slider
                    defaultValue={60}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onChangeCommitted={handleChange('speed')}
                    step={20}
                    marks
                    min={20}
                    max={200}
                    style={{ maxWidth: '100px', color: '#fff' }}
                    disabled={value.isRunning}
                />
                <Typography style={{ margin: '0 10px 0 5vw' }}>Size:</Typography>
                <Slider
                    defaultValue={40}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onChangeCommitted={handleChange('size')}
                    step={10}
                    marks
                    min={10}
                    max={100}
                    style={{ maxWidth: '100px', color: '#fff' }}
                    disabled={value.isRunning}
                />
                <Button
                    variant="contained"
                    onClick={handleGenerate}
                    style={{ marginLeft: '5vw', backgroundColor: '#fff' }}
                    disabled={value.isRunning}
                >
                    {value.isRunning ? 'RUNNING' : 'GENERATE'}
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSortToggle}
                    style={{ marginLeft: '5vw', backgroundColor: value.isRunning ? 'red' : '#fff', color: value.isRunning ? '#fff' : '' }}
                >
                    {value.isRunning ? 'STOP' : 'SORT'}
                </Button>
            </Box>
        </>
    )
}