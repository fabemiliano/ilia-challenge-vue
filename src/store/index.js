import Vue from "vue";
import Vuex from "vuex";
import { getAllPokemons, getPokemonById } from "@/services/pokeAPI.js";
import pokeTypes from "@/assets/pokeTypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    closedPokemonsArray: [],
    pokemonName: null,
    pokemonDetails: {
      types: []
    },
    attacks: [],
    showModal: false,
    attack: null
  },
  mutations: {
    SAVE_POKEMON_CARDS(state, data) {
      state.pokemons = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      state.closedPokemonsArray = data.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
    },
    SAVE_POKEMON_NAME(state, data) {
      state.pokemonName = data;
    },
    UPDATE_POKEMON_CARDS(state, data) {
      state.pokemons = state.closedPokemonsArray;
      state.pokemons = state.closedPokemonsArray.filter(({ name }) =>
        name.toLowerCase().includes(data.toLowerCase())
      );
    },
    SAVE_POKEMON_CARD_DETAILS(state, data) {
      state.pokemonDetails = data;
    },
    SAVE_POKEMON_ATTACKS(state, data) {
      state.attacks = data;
    },
    SWITCH_SHOW_MODAL(state) {
      state.showModal = !state.showModal;
    },
    SET_ATTACK(state, data) {
      state.attack = state.attacks.find(attack => attack.name === data);
    }
  },
  actions: {
    getPokemonCards({ commit }) {
      getAllPokemons().then(({ data: { cards } }) =>
        commit("SAVE_POKEMON_CARDS", cards)
      );
    },
    getPokemonCardById({ commit }, id) {
      commit("SAVE_POKEMON_CARD_DETAILS", { types: [] });
      getPokemonById(id).then(({ data: { card } }) => {
        commit("SAVE_POKEMON_CARD_DETAILS", card);
        commit("SAVE_POKEMON_ATTACKS", card.attacks);
      });
    },
    typePokemon({ commit }, pokemonName) {
      commit("SAVE_POKEMON_NAME", pokemonName);
      commit("UPDATE_POKEMON_CARDS", pokemonName);
    },
    showModal({ commit }) {
      commit("SWITCH_SHOW_MODAL");
    },
    setAttack({ commit }, attack) {
      commit("SET_ATTACK", attack);
    }
  },
  getters: {
    getColor: state => {
      const type = state.pokemonDetails.types;
      console.log(type);
      const color = type
        ? pokeTypes.find(pType => pType.type === type).color
        : "#faf";
      // console.log(type)
      // console.log(pokeTypes.find(pType => pType.type === type).color)
      console.log(color);
      return color;
    },
    getTypeIcon: state => {
      const type = state.pokemonDetails.types[0];
      console.log(pokeTypes.find(pType => pType.type === type).src);
      return pokeTypes.find(pType => pType.type === type).src;
    },
    getWeakIcon: state => {
      const type = state.pokemonDetails.weaknesses[0].type;
      return pokeTypes.find(pType => pType.type === type).src;
    }
  },
  modules: {}
});
