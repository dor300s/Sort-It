import React, { useState, useContext, useEffect } from 'react';
import { ButtonGroup, Button, Box, Typography, Slider } from '@material-ui/core';
import { SortType } from '../types/Sort';
import { State, StateContext } from '../store/GlobalState';
import { generateNumbers } from '../services/generateNumbersService';



export const BarOptions = () => {
    const [state, SetState] = useContext(StateContext);

    const handleSortTypeChange = (val: SortType) => {
        SetState((prev: State) => ({ ...prev, sortType: val }))
    }

    useEffect(() => {
        handleGenerate()
    }, [state.size])

    const handleChange = (name: 'speed' | 'size') => (e: any, val: any) => {
        if (name === 'speed') val = (1e3 / val)
        SetState((prev: State) => ({ ...prev, [name]: val }))
    }

    const handleSortToggle = () => {
        state.setIsRunning((prev: boolean) => !prev);
    }

    const handleGenerate = () => {
        SetState((prev: State) => ({ ...prev, numbers: generateNumbers(prev.size) }))
    }



    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center">
                <ButtonGroup variant="text" color="inherit" aria-label="text primary button group" >
                    <Button disabled={state.isRunning} onClick={() => handleSortTypeChange('Bubble Sort')}>Bubble Sort</Button>
                    <Button disabled={state.isRunning} onClick={() => handleSortTypeChange('Merge Sort')}>Merge Sort</Button>
                    <Button disabled={state.isRunning} onClick={() => handleSortTypeChange('Quick Sort')}>Quick Sort</Button>
                </ButtonGroup>
                <Typography style={{ margin: '0 10px 0 5vw' }}>Speed:</Typography>
                <Slider
                    defaultValue={60}
                    aria-labelledby="discrete-slider"
                    onChangeCommitted={handleChange('speed')}
                    step={20}
                    marks
                    min={20}
                    max={200}
                    style={{ maxWidth: '100px', color: '#fff' }}
                    disabled={state.isRunning}
                />
                <Typography style={{ margin: '0 10px 0 5vw' }}>Size:</Typography>
                <Slider
                    defaultValue={40}
                    aria-labelledby="discrete-slider"
                    onChangeCommitted={handleChange('size')}
                    step={10}
                    marks
                    min={10}
                    max={70}
                    style={{ maxWidth: '100px', color: '#fff' }}
                    disabled={state.isRunning}
                />
                <Button
                    variant="contained"
                    onClick={handleGenerate}
                    style={{ marginLeft: '5vw', backgroundColor: '#fff' }}
                    disabled={state.isRunning}
                >
                    {state.isRunning ? 'RUNNING' : 'GENERATE'}
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSortToggle}
                    style={{ marginLeft: '5vw', backgroundColor: state.isRunning ? '#e91e63' : '#fff', color: state.isRunning ? '#fff' : '' }}
                >
                    {state.isRunning ? 'STOP' : 'SORT'}
                </Button>
            </Box>
        </>
    )
}