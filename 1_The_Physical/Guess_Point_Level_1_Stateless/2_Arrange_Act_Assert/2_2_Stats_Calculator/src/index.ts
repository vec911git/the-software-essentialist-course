export function statsCalculator(numberSequence: number[]): StatHolder {
    if (numberSequence.length === 0 || numberSequence.some(x => x%1 !== 0))
        throw new Error('All sequence elements must be integers');

    let minValue:any = null;
    let maxValue:any = null;
    let numberOfElements:number = numberSequence.length;
    let avgValue:any = null;
    let sumValue:number = 0;
    for (const element of numberSequence) {
        if (minValue === null || minValue > element) minValue = element;
        if (maxValue === null || maxValue < element) maxValue = element;
        sumValue += element;
    }
    avgValue = sumValue / numberOfElements;

    return new StatHolder(minValue, maxValue, numberOfElements, avgValue);
}

class StatHolder {
    minValue: number;
    maxValue: number;
    numberOfElements: number;
    avgValue: number;

    constructor(minValue: number, maxValue: number, numberOfElements: number, avgValue: number,) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.numberOfElements = numberOfElements;
        this.avgValue = avgValue;
    }
}