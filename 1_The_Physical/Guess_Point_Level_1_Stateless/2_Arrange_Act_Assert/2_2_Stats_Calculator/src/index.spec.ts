import { statsCalculator } from './index';

describe('stats calculator', () => {

    it('A function exists for stats calculations', () => {
        expect(typeof(statsCalculator)).toBe("function");
    })

    it('It process a sequence of integer numbers', () => {
        expect(() => statsCalculator([2, 4, 6])).not.toThrow('All sequence elements must be integers');
        expect(() => statsCalculator([2, 4.5, 6])).toThrow('All sequence elements must be integers');
    })

})