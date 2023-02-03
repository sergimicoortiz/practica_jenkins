import { get_pokemon } from "../utils/utils";
import {jest} from '@jest/globals';

test('ditto', () => {
    expect(get_pokemon(132)).toBe('ditto');
});