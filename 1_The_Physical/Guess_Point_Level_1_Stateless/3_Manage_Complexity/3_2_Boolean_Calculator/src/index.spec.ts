
import { BooleanCalculator } from './index';

describe('boolean calculator', () => {

    let booleanCalculator = new BooleanCalculator();

    it('Create a boolean calculator', () => {
        expect(typeof(booleanCalculator)).toBe("object");
    })

    it('takes a boolean expression', () => {
        expect(() => booleanCalculator.evaluate('')).toThrow('Boolean expression is empty');
        expect(() => booleanCalculator.evaluate('RUE')).toThrow('Boolean expression contains invalid values');
        expect(() => booleanCalculator.evaluate('MOT TRUE')).toThrow('Boolean expression contains invalid values');
        expect(() => booleanCalculator.evaluate('TRUE')).not.toThrow('Boolean expression contains invalid values');
    })

    it('evaluates single operators', () => {
        expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
        expect(booleanCalculator.evaluate("FALSE")).toBeFalsy();
    })

    it('evaluates not operator', () => {
        expect(booleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
        expect(booleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
    })
})
