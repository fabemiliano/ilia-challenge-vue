import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://api.pokemontcg.io/v1/cards/"
});

const getAllPokemons = () => pokeApi.get();

const getPokemonById = id => pokeApi.get(id);

export { getAllPokemons, getPokemonById };
