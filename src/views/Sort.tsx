import React, { useState, useEffect } from 'react';
import { Container, Box, CssBaseline, Typography } from '@material-ui/core';
import { bubbleSort } from '../services/bubbleSortService';
import { generateNumbers } from '../services/generateNumbersService';
import { quickSort } from '../services/quickSortService';
import { mergeSort } from '../services/mergeSortService';
import { heapSort } from '../services/heapSortService';


const nums = generateNumbers(10)
console.log(nums);
// console.log(quickSort(nums));
console.log(heapSort(nums));

const sortType = 'Bubble Sort';


export const Sort = () => {
    const [numbers, setNumbers] = useState<number[]>([4, 72, 64, 79, 23, 46, 19, 29, 75, 22, 1]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        // bubbleSort(numbers, setNumbers, 1000)
        // bubbleSort(setNumbers, setCurrentIndex, 500);

    }, [])

    const getBackgroundColor = (idx: number) => {
        return idx === currentIndex || idx === currentIndex + 1 ? 'red' : 'gray';
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