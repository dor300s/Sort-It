export const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr;
    const middle = arr.splice(0, 1)[0];
    const lowers: number[] = [];
    const highers: number[] = [];
    arr.forEach((num: number) => num < middle ? lowers.push(num) : highers.push(num));
    return [...quickSort(lowers), middle, ...quickSort(highers)];
}


