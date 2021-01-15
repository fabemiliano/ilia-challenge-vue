import pokeTypes from "@/assets/pokeTypes";

import { mapActions } from "vuex";
export const TypesMixin = {
  methods: {
    typeColor: pokemon => {
      const typeProperties = pokemon.types
        ? pokeTypes.find(pType => {
            return pType.type === pokemon.types[0];
          })
        : { color: "#ffa" };
      return typeProperties.color;
    },

    typeIcon: pokemon => {
      const typeProperties = pokemon.types
        ? pokeTypes.find(pType => {
            return pType.type === pokemon.types[0];
          })
        : false;
      return typeProperties.src;
    },
    ...mapActions(["getPokemonCards"])
  }
};
