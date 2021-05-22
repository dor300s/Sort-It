// const arr: number[] = [4, 72, 64, 79, 23, 46, 19, 29, 75, 22, 1];

// export const bubbleSort = async (arr: number[], cb: Function, speed: number): Promise<number[]> => {
//     const _arr = [...arr]

//     let swaped: boolean = false;
//     let i: number = 0;

//     function timeout(time: number) {
//         return new Promise(resolve => setTimeout(resolve, time))
//     }



//     while (i < _arr.length) {
//         await timeout(speed);

//         if (_arr[i] > _arr[i + 1]) {
//             [_arr[i], _arr[i + 1]] = [_arr[i + 1], _arr[i]];
//             swaped = true;
//         }

//         cb(_arr);
//         console.log(_arr);
//         i++;
//     }


//     console.log(swaped)
//     return swaped ? bubbleSort(_arr, cb, speed) : _arr;
// };

export const bubbleSort = (cb: Function, indexCb: Function, time: number): void => {
    let swaped = false;
    let i = 0;
    const bubbleSortInterval = setInterval(() => {

        cb((prev: number[]) => {
            if (i === 0) swaped = false;
            const arr = [...prev];
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swaped = true;
            }


            if (i === arr.length - 1 && !swaped) clearInterval(bubbleSortInterval);
            i++;
            if (i === arr.length) i = 0;
            return arr;
        })
        indexCb(i);
    }, time)
}