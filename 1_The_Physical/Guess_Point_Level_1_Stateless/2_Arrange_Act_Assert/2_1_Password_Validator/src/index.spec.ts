import { isPasswordValid, ErrorType } from './index'

describe('password validator', () => {

    it('A function exists for validating passwords', () => {
        expect(typeof(isPasswordValid)).toBe("function");
    })

    it('Must be between 5 and 15 characters long', () => {
        expect(isPasswordValid('1').isValid).toBeFalsy();
        expect(isPasswordValid('A2345').isValid).toBeTruthy();
        expect(isPasswordValid('A23451234512345').isValid).toBeTruthy();
        expect(isPasswordValid('1234512345123451').isValid).toBeFalsy();
    })

    it('Contains at least one digit', () => {
        expect(isPasswordValid('Abcd1').isValid).toBeTruthy();
        expect(isPasswordValid('abcde').isValid).toBeFalsy();
    })

    it('Contains at least one upper case letter', () => {
        expect(isPasswordValid('Abcd1').isValid).toBeTruthy();
        expect(isPasswordValid('abcd1').isValid).toBeFalsy();
    })

    it('Result object contains expected errors', () => {
        expect(isPasswordValid('a').errors).toEqual([ErrorType.InvalidLength, ErrorType.NoDigitFound, ErrorType.NoUpperCaseFound]);
        expect(isPasswordValid('abcde').errors).toEqual([ErrorType.NoDigitFound, ErrorType.NoUpperCaseFound]);
        expect(isPasswordValid('abcd1').errors).toEqual([ErrorType.NoUpperCaseFound]);
        expect(isPasswordValid('Abcde').errors).toEqual([ErrorType.NoDigitFound]);
        expect(isPasswordValid('A1').errors).toEqual([ErrorType.InvalidLength]);
        expect(isPasswordValid('Abcd1').errors).toEqual([]);
    })
})

