
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

    describe('Single values', () => {
        it('returns true for "TRUE"', () => {
            expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
        })
        it('returns false for "FALSE"', () => {
            expect(booleanCalculator.evaluate("FALSE")).toBeFalsy();
        })
    })

    describe('NOT operator', () => {
        it('returns false for "NOT TRUE"', () => {
            expect(booleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
        })
        it('returns true for "NOT FALSE"', () => {
            expect(booleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
        })
    })

    describe('AND operator', () => {
        it('returns false for "TRUE AND FALSE"', () => {
            expect(booleanCalculator.evaluate("TRUE AND FALSE")).toBeFalsy();
        })
        it('returns true for "TRUE AND TRUE"', () => {
            expect(booleanCalculator.evaluate("TRUE AND TRUE")).toBeTruthy();
        })
    })

    describe('OR operator', () => {
        it('returns true for "TRUE OR FALSE"', () => {
            expect(booleanCalculator.evaluate("TRUE OR FALSE")).toBeTruthy();
        })
        it('returns false for "FALSE OR FALSE"', () => {
            expect(booleanCalculator.evaluate("FALSE OR FALSE")).toBeFalsy();
        })
    })

    describe('Combination of operators w/ precedence', () => {
        it('returns true for "TRUE OR TRUE OR TRUE AND FALSE"', () => {
            expect(booleanCalculator.evaluate("TRUE OR TRUE OR TRUE AND FALSE")).toBeTruthy();
        })
        it('returns true for "TRUE OR FALSE AND NOT FALSE"', () => {
            expect(booleanCalculator.evaluate("TRUE OR FALSE AND NOT FALSE")).toBeTruthy();
        })
    })

    describe('Parenthesis', () => {
        it('returns false for "(TRUE OR TRUE OR TRUE) AND FALSE"', () => {
            expect(booleanCalculator.evaluate("(TRUE OR TRUE OR TRUE) AND FALSE")).toBeFalsy();
        })
        it('returns false for "TRUE OR FALSE AND NOT FALSE"', () => {
            expect(booleanCalculator.evaluate("NOT (TRUE AND TRUE)")).toBeFalsy();
        })
    })
})
