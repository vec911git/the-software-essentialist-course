
import { isMilitaryTimeValid } from './index';

describe('military time validator', () => {

    it('A function exists for military time validation', () => {
        expect(typeof(isMilitaryTimeValid)).toBe("function");
    })

    it('"01:12 - 14:32" is a valid military time range', () => {
        expect(isMilitaryTimeValid('01:12 - 14:32')).toBeTruthy();
    })

})
