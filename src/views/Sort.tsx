import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, CssBaseline, Typography } from '@material-ui/core';
import { bubbleSort } from '../services/bubbleSortService';
import { generateNumbers } from '../services/generateNumbersService';
import { quickSort } from '../services/quickSortService';
import { mergeSort } from '../services/mergeSortService';
import { heapSort } from '../services/heapSortService';
import { SortType } from '../types/Sort';
import { StateContext } from '../store/GlobalState';



export const Sort = () => {
    const [state, setState] = useContext(StateContext);
    const [numbers, setNumbers] = useState<number[]>(state.numbers);
    const [sorted, setSorted] = useState<string>();
    const [currentIndex, setCurrentIndex] = useState<number[] | null>([-1]);


    useEffect(() => {
        setNumbers([...state.numbers]);
        setSorted(JSON.stringify([...state.numbers].sort((a, b) => a - b)));
        setCurrentIndex([-1]);
    }, [state.numbers])

    useEffect(() => {
        if (state.isRunning) {
            switch (state.sortType) {
                case 'Bubble Sort':
                    bubbleSort(setNumbers, setCurrentIndex, state.speed, state.setIsRunning);
                    break;
                case 'Merge Sort':
                    mergeSort(numbers, 0, numbers.length, setNumbers, setCurrentIndex, state.speed, state.setIsRunning);
                    break;
                case 'Quick Sort':
                    quickSort(numbers, 0, numbers.length - 1, setNumbers, setCurrentIndex, state.speed, state.setIsRunning);
                    break;

                default:
                    bubbleSort(setNumbers, setCurrentIndex, state.speed, state.setIsRunning);
                    break;
            }
        }
    }, [state.isRunning])


    useEffect(() => {
        if (JSON.stringify(numbers) === sorted) {
            setCurrentIndex(null);
            state.setIsRunning(false);
        }
    }, [numbers, sorted])



    const getBackgroundColor = (idx: number) => {
        if (currentIndex === null) {
            return '#33b679';
        }
        return currentIndex.includes(idx) ? '#e91e63' : '#616161';
    }

    return (
        <>
            <CssBaseline />

            <Container maxWidth="xs">
                <Typography variant="h2" align="center" color="textPrimary" style={{ marginBottom: '100px' }}>
                    {state.sortType}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="flex-end" style={{ height: '550px' }} >
                    {numbers.map((num, idx) => {
                        return (
                            <div
                                key={idx}
                                style={{
                                    position: 'relative',
                                    backgroundColor: getBackgroundColor(idx),
                                    margin: '0 2px',
                                    minWidth: '20px',
                                    textAlign: 'center',
                                    height: num + 'px',
                                    borderRadius: '2.5rem 2.5rem 0 0'
                                }}>
                                <span
                                    style={{
                                        position: 'absolute',
                                        transform: `translate(-50%,-20px)`,
                                        fontSize: '.7rem'
                                    }}
                                >
                                    {num}
                                </span>
                            </div>
                        )
                    })}
                </Box>

            </Container>
        </>
    )
}



// TESTS

  // [...Array(100)].forEach(() => {
        //     const numbers = generateNumbers(30);
        //     console.log(JSON.stringify(mergeSort(numbers, 0, numbers.length, setNumbers, setCurrentIndex, 100)) === JSON.stringify(numbers.sort((a, b) => a - b)))
        // });