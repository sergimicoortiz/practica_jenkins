import { get_pokemon } from "../utils/utils";
import { expect, test } from '@jest/globals';


test('ditto', async () => {
    expect(await get_pokemon(132)).toBe('ditto');
});