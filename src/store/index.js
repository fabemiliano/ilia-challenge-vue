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
    attack: null,
    isLoading: false
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
    },
    SWITCH_IS_LOADING(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    getPokemonCards({ commit, dispatch }) {
      dispatch("switchIsLoading", null, { root: true });
      getAllPokemons().then(({ data: { cards } }) => {
        commit("SAVE_POKEMON_CARDS", cards);
        dispatch("switchIsLoading", null, { root: true });
      });
    },
    getPokemonCardById({ commit, dispatch, state }, id) {
      console.log(state.isLoading);
      dispatch("switchIsLoading", null, { root: true });
      console.log(state.isLoading);

      commit("SAVE_POKEMON_CARD_DETAILS", { types: [] });
      getPokemonById(id).then(({ data: { card } }) => {
        commit("SAVE_POKEMON_CARD_DETAILS", card);
        commit("SAVE_POKEMON_ATTACKS", card.attacks);
        console.log(state.isLoading);

        dispatch("switchIsLoading", null, { root: true });
        console.log(state.isLoading);
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
    },
    switchIsLoading({ commit }) {
      commit("SWITCH_IS_LOADING");
    }
  },
  getters: {
    getColor: state => {
      const type = state.pokemonDetails.types;
      const color = type
        ? pokeTypes.find(pType => pType.type === type).color
        : "#faf";
      return color;
    },
    getTypeIcon: state => {
      const type = state.pokemonDetails.types[0];
      return pokeTypes.find(pType => pType.type === type).src;
    },
    getWeakIcon: state => {
      const type = state.pokemonDetails.weaknesses[0].type;
      return pokeTypes.find(pType => pType.type === type).src;
    }
  },
  modules: {}
});
