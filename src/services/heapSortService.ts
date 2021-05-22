export const heapSort = (arr: number[]) => {
    const newArr = [...arr];
    let arrLength = arr.length;

    function maxHeap(idx: number) {
        let maxIdx: number = idx;
        const leftIdx: number = 2 * idx + 1;
        const rightIdx: number = 2 * idx + 2;

        if (leftIdx < arrLength && newArr[leftIdx] > newArr[maxIdx]) maxIdx = leftIdx;
        if (rightIdx < arrLength && newArr[rightIdx] > newArr[maxIdx]) maxIdx = rightIdx;
        if (maxIdx != idx) {
            swap(idx, maxIdx);
            maxHeap(maxIdx);
        }
    }

    function swap(idx1: number, idx2: number) {
        [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]]
    }

    const len = Math.floor(arrLength / 2);
    for (let i = len; i >= 0; i--) {
        maxHeap(i);
    }

    while (arrLength) {
        swap(0, arrLength - 1);
        arrLength--;
        maxHeap(0);
    }
    return newArr;
}