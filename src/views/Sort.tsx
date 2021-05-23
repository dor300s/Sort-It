import React, { useState, useEffect } from 'react';
import { Container, Box, CssBaseline, Typography } from '@material-ui/core';
import { bubbleSort } from '../services/bubbleSortService';
import { generateNumbers } from '../services/generateNumbersService';
import { quickSort } from '../services/quickSortService';
import { mergeSort } from '../services/mergeSortService';
import { heapSort } from '../services/heapSortService';
import { promises } from 'dns';
import { JsxEmit } from 'typescript';


// const nums = generateNumbers(10)
// console.log(nums);
// console.log(quickSort(nums));
// console.log(heapSort(nums));

const sortType = 'Bubble Sort';


export const Sort = () => {
    const [numbers, setNumbers] = useState<number[]>(generateNumbers(50));
    // const [numbers, setNumbers] = useState<number[]>([5, 3, 7, 12, 2, 8, 4]);
    const [sorted, setSorted] = useState<string>();
    const [currentIndex, setCurrentIndex] = useState<number[] | null>([0]);

    useEffect(() => {
        console.log(numbers);
        setSorted(JSON.stringify([...numbers].sort((a, b) => a - b)));

        // bubbleSort(setNumbers, setCurrentIndex, 5);
        // quickSort(numbers, 0, numbers.length - 1, setNumbers, setCurrentIndex, 50)
        mergeSort(numbers, 0, numbers.length, setNumbers, setCurrentIndex, 50);


        // [...Array(100)].forEach(() => {
        //     const numbers = generateNumbers(30);
        //     console.log(JSON.stringify(mergeSort(numbers, 0, numbers.length, setNumbers, setCurrentIndex, 100)) === JSON.stringify(numbers.sort((a, b) => a - b)))
        // });

    }, [])

    useEffect(() => {
        if (JSON.stringify(numbers) === sorted) setCurrentIndex(null);
    }, [numbers])

    const getBackgroundColor = (idx: number) => {
        if (currentIndex === null) {
            return 'green';
        }
        return currentIndex.includes(idx) ? 'red' : 'gray';
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                {sortType}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                {numbers.map((num, idx) => {
                    return <div key={idx} style={{ backgroundColor: getBackgroundColor(idx), width: '20px', textAlign: 'center', height: num + 'px' }}>{num}</div>
                })}
            </Box>

        </Container>
    )
}