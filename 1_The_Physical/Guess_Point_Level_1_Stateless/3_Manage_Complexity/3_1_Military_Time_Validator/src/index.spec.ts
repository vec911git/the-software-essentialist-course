
import { isMilitaryTimeValid } from './index';

describe('military time validator', () => {

    it('A function exists for military time validation', () => {
        expect(typeof(isMilitaryTimeValid)).toBe("function");
    })

    it('"01:12 - 14:32" is a valid military time range', () => {
        expect(isMilitaryTimeValid('01:12 - 14:32')).toBeTruthy();
    })

    it('"25:00 - 12:23" is not a valid military time range', () => {
        expect(isMilitaryTimeValid('25:00 - 12:23')).toBeFalsy();
    })

    it('"22:00 - 23:12" is a valid military time range', () => {
        expect(isMilitaryTimeValid('22:00 - 23:12')).toBeFalsy();
    })
})
