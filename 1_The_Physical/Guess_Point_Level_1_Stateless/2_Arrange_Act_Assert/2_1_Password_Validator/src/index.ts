export function isPasswordValid(password: string): boolean {
    const digitRegex = /[0-9]/g;
    const upperRegex = /[A-Z]/g;
    if (password.length < 5 || password.length > 15)
        return false;
    if (!password.match(digitRegex))
        return false;
    if (!password.match(upperRegex))
        return false;
    return true;
}