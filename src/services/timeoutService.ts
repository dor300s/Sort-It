export async function timeout(time: number) {
    const res = await new Promise(resolve => setTimeout(resolve, time))
    return res;
}