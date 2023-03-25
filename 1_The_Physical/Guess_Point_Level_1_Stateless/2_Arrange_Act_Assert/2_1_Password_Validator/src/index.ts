export function isPasswordValid(password: string): boolean {
    if (password.length < 5 || password.length > 15)
        return false;
    return true;
}