import axios from "axios";
const URL = 'https://pokeapi.co/api/v2/pokemon/';

export function get_pokemon(id) {
    axios.get(URL + id)
        .then(({ data, status }) => {
            if (status === 200) {
                return data.namme
            }
            return null;
        })
        .catch(e => console.error(e))
}