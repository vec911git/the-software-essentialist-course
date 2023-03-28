
import { BooleanCalculator } from './index';

describe('boolean calculator', () => {

    let booleanCalculator = new BooleanCalculator();

    it('Create a boolean calculator', () => {
        expect(typeof(booleanCalculator)).toBe("object");
    })

    it('takes a boolean expression', () => {
        expect(() => booleanCalculator.addBooleanExpression('')).toThrow('Boolean expression is empty');
        expect(() => booleanCalculator.addBooleanExpression('RUE')).toThrow('Boolean expression contains invalid values');
        expect(() => booleanCalculator.addBooleanExpression('MOT TRUE')).toThrow('Boolean expression contains invalid values');
        expect(() => booleanCalculator.addBooleanExpression('TRUE')).not.toThrow('Boolean expression contains invalid values');
    })
})
