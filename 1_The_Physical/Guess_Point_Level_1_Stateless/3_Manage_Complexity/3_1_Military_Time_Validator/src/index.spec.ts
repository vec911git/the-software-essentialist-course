
import { isMilitaryTimeValid } from './index';

describe('military time validator', () => {

    it('A function exists for military time validation', () => {
        expect(typeof(isMilitaryTimeValid)).toBe("function");
    })

})
