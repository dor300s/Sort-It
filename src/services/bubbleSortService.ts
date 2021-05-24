export const bubbleSort = (cb: Function, indexCb: Function, time: number, stopCb: Function): void => {
    let swaped = false;
    let i = 0;
    const bubbleSortInterval = setInterval(() => {
        stopCb((prev: boolean) => {
            if (!prev) clearInterval(bubbleSortInterval);
            return prev
        })

        indexCb([i, i + 1]);
        cb((prev: number[]) => {
            if (i === 0) swaped = false;
            const arr = [...prev];
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swaped = true;
            }

            if (i === arr.length - 1 && !swaped) {
                clearInterval(bubbleSortInterval);
            }
            i++;
            if (i === arr.length) i = 0;
            return arr;
        })
    }, time)
}