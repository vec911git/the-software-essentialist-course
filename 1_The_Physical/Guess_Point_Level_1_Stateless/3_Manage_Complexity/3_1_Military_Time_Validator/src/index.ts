export function isMilitaryTimeValid(timeRange: string): boolean {
    if (timeRange.length === 0) return false;
    let ranges = timeRange.split(' - ');
    if (ranges.length !== 2) return false;
    for (const range of ranges) {
        let hourAndMinutes = range.split(':');
        if (hourAndMinutes.length !== 2) return false;
        let hour = Number(hourAndMinutes[0]) || -1;
        if (hour < 0 || hour > 23) return false;
        let minutes = Number(hourAndMinutes[1]) || -1;
        if (minutes < 0 || minutes > 59) return false;
    }

    return true;
}