export function isMilitaryTimeValid(timeRange: string): boolean {
    if (timeRange.length === 0) return false;
    let times = getTimeRanges(timeRange);
    if (times.length !== 2) return false;
    for (const time of times) {
        let hourAndMinutes = getHourAndMinutes(time);
        if (hourAndMinutes.length !== 2) return false;
        let hour = hourAndMinutes[0];
        if (hour < 0 || hour > 23) return false;
        let minutes = hourAndMinutes[1];
        if (minutes < 0 || minutes > 59) return false;
    }

    return true;
}

const getTimeRanges = (timeRange: string): string[] => {
    return timeRange.split(' - ');
}

const getHourAndMinutes = (time: string): number[] => {
    return time.split(':').map(x => Number(x) || -1);
}