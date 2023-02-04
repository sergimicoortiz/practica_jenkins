import { get_pokemon_name } from "../utils/utils";
import { expect, test } from '@jest/globals';


test('ditto', async () => {
    expect(await get_pokemon_name(132)).toBe('ditto');
});

test('charmander', async () => {
    expect(await get_pokemon_name(4)).toBe('charmander');
});

test('pikachu', async () => {
    expect(await get_pokemon_name(25)).toBe('pikachu');
});

test('chikorita', async () => {
    expect(await get_pokemon_name(152)).toBe('chikorita');
});