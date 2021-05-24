import { timeout } from "./timeoutService";

export const mergeSort = async (arr: number[], start: number, end: number, cb: Function, idxCb: Function, time: number, stopCb: Function) => {
    let running = true;
    stopCb((prev: boolean) => {
        running = prev;
        return prev;
    })
    if (!running) return 'exit';
    // await timeout(time);

    if (end - start <= 1) return;
    const middleIdx: number = Math.floor((start + end) / 2);

    // Promise.all([
    const firstHalf = await mergeSort(arr, start, middleIdx, cb, idxCb, time, stopCb)
    if(firstHalf === 'exit') return 'exit';
    const secondHalf = await mergeSort(arr, middleIdx, end, cb, idxCb, time, stopCb)
    if(secondHalf === 'exit') return 'exit';
    // ])

    const newArr = [...arr];
    let i = start;
    let j = middleIdx;
    let k = start;

    while (i < middleIdx && j < end) {
        await timeout(time);

        if (newArr[i] < newArr[j]) {
            arr[k++] = newArr[i++];
            idxCb([k, i])

        } else {
            arr[k++] = newArr[j++];
            idxCb([k, j])

        }
        cb([...arr])

        stopCb((prev: boolean) => {
            running = prev;
            return prev;
        })
        if (!running) return 'exit';
    }

    while (j < end) {
        await timeout(time);
        arr[k++] = newArr[j++]
        idxCb([k, i])
        cb([...arr])

        stopCb((prev: boolean) => {
            running = prev;
            return prev;
        })
        if (!running) return 'exit';
    }

    while (i < middleIdx) {
        await timeout(time);
        arr[k++] = newArr[i++]
        idxCb([k, j])
        cb([...arr])

        stopCb((prev: boolean) => {
            running = prev;
            return prev;
        })
        if (!running) return 'exit';
    }

}



// export const mergeSort = (arr: number[]): number[] => {
//     if (arr.length < 2) return arr;
//     const middleInx: number = Math.floor(arr.length / 2);
//     const firstHalf: number[] = mergeSort(arr.slice(0, middleInx));
//     const secondHalf: number[] = mergeSort(arr.slice(middleInx));
//     const newArr: number[] = [];
//     while (firstHalf.length && secondHalf.length) {
//         firstHalf[0] < secondHalf[0] ? newArr.push(firstHalf.shift()!) : newArr.push(secondHalf.shift()!);
//     }
//     return [...newArr, ...firstHalf, ...secondHalf]
// }