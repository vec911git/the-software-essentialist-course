export function isPasswordValid(password: string): boolean {
    const regex = /[0-9]/g;
    if (password.length < 5 || password.length > 15)
        return false;
    if (!password.match(regex))
        return false;
    return true;
}