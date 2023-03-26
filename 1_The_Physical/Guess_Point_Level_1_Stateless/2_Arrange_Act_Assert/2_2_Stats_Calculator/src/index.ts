export function statsCalculator(numberSequence: number[]): StatHolder {
    if (numberSequence.length === 0 || numberSequence.some(x => x%1 !== 0))
        throw new Error('All sequence elements must be integers');

    let stats = new StatHolder();
    let minValue:any = null;
    let maxValue:any = null;
    for (const element of numberSequence) {
        if (minValue === null || minValue > element) minValue = element;
        if (maxValue === null || maxValue < element) maxValue = element;
    }
    stats.minValue = minValue;
    stats.maxValue = maxValue;
    stats.numberOfElements = numberSequence.length;

    return stats;
}

class StatHolder {
    minValue: number;
    maxValue: number;
    numberOfElements: number;
    avgValue: number;

    constructor() {
        this.minValue = 0;
        this.maxValue = 0;
        this.numberOfElements = 0;
        this.avgValue = 0.0;
    }
}