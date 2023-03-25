import { isPasswordValid } from './index'

describe('password validator', () => {

    it('A function exists for validating passwords', () => {
        expect(typeof(isPasswordValid)).toBe("function");
    })

    it('Must be between 5 and 15 characters long', () => {
        expect(isPasswordValid('1')).toBeFalsy();
        expect(isPasswordValid('A2345')).toBeTruthy();
        expect(isPasswordValid('A23451234512345')).toBeTruthy();
        expect(isPasswordValid('1234512345123451')).toBeFalsy();
    })

    it('Contains at least one digit', () => {
        expect(isPasswordValid('Abcd1')).toBeTruthy();
        expect(isPasswordValid('abcde')).toBeFalsy();
    })

    it('Contains at least one upper case letter', () => {
        expect(isPasswordValid('Abcd1')).toBeTruthy();
        expect(isPasswordValid('abcd1')).toBeFalsy();
    })

})

