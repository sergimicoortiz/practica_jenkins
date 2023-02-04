import axios from "axios";
const URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function get_pokemon_name(id) {
    try {
        const { data, status } = await axios.get(URL + id);
        if (status === 200) {
            return data.name
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }

}