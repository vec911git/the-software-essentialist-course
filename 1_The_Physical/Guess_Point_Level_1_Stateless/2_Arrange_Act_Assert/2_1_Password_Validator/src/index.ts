export function isPasswordValid(password: string): PasswordValidatorResult {
    let errors: ErrorType[] = [];
    const digitRegex = /[0-9]/g;
    const upperRegex = /[A-Z]/g;

    if (password.length < 5 || password.length > 15)
        errors.push(ErrorType.InvalidLength);
    if (!password.match(digitRegex))
        errors.push(ErrorType.NoDigitFound);
    if (!password.match(upperRegex))
        errors.push(ErrorType.NoUpperCaseFound);
    
    return new PasswordValidatorResult(
        errors.length === 0,
        errors
    );
}

export enum ErrorType {
    InvalidLength = 1,
    NoDigitFound = 2,
    NoUpperCaseFound = 3,
}

class PasswordValidatorResult {
    isValid: boolean;
    errors: ErrorType[];

    constructor(isValid: boolean, errors: ErrorType[]) {
        this.isValid = isValid;
        this.errors = errors;
    }
}

