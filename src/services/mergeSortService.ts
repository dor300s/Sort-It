export const mergeSort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr;
    const middleInx: number = Math.floor(arr.length / 2);
    const firstHalf: number[] = mergeSort(arr.slice(0, middleInx));
    const secondHalf: number[] = mergeSort(arr.slice(middleInx));
    const newArr: number[] = [];
    while (firstHalf.length && secondHalf.length) {
        firstHalf[0] < secondHalf[0] ? newArr.push(firstHalf.shift()!) : newArr.push(secondHalf.shift()!);
    }
    return [...newArr, ...firstHalf, ...secondHalf]
}