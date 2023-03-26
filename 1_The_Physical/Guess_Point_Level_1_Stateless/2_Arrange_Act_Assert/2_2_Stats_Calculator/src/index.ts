export function statsCalculator(numberSequence: number[]) {
    if (numberSequence?.some(x => x%1 !== 0))
        throw new Error('All sequence elements must be integers');
}
