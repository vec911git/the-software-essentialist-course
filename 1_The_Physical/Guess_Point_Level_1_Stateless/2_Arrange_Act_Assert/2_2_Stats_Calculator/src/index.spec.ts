import { statsCalculator } from './index';

describe('stats calculator', () => {

    it('A function exists for stats calculations', () => {
        expect(typeof(statsCalculator)).toBe("function");
    })

    it('It process a sequence of integer numbers', () => {
        expect(() => statsCalculator([2, 4, 6])).not.toThrow('All sequence elements must be integers');
        expect(() => statsCalculator([2, 4.5, 6])).toThrow('All sequence elements must be integers');
        expect(() => statsCalculator([])).toThrow('All sequence elements must be integers');
    })

    it('It calculates minimum value', () => {
        expect(statsCalculator([2, 4, 21, -8, 53, 40]).minValue).toEqual(-8);
    })

    it('It calculates maximum value', () => {
        expect(statsCalculator([2, 4, 21, -8, 53, 40]).maxValue).toEqual(53);
    })

})