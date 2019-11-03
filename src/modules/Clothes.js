import Vue from "vue";
import CompositionApi, { createModule } from "vuex-composition-api";

const axios = require("axios").default;

Vue.use(CompositionApi);

export const Clothes = createModule({
  name: "clothes",
  namespaced: true,
  setup({ state, getter, mutation }) {
    const clothes = state([]);
    const currentCloth = state({});
    const errors = state([]);

    const getClothes = getter(() => clothes.value);

    const getCurrentCloth = getter(() => currentCloth.value);

    const CHANGE_CLOTHES = mutation(
      "CHANGE_CLOTHES",
      { clothes },
      (state, value) => {
        state.clothes = value;
      }
    );

    const CHANGE_CURRENT_CLOTH = mutation(
      "CHANGE_CURRENT_CLOTH",
      { currentCloth },
      (state, value) => {
        state.currentCloth = value;
      }
    );

    const PUSH_CLOTHES_ERROR = mutation(
      "PUSH_CLOTHES_ERROR",
      { errors },
      (state, value) => {
        state.errors.push(...value);
      }
    );

    const fetchClothes = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/clothes`);
        CHANGE_CLOTHES(response.data);
      } catch (error) {
        PUSH_CLOTHES_ERROR(error);
      }
    };

    const fetchOneCloth = async id => {
      try {
        const response = await axios.get(`http://localhost:3004/clothes/${id}`);
        CHANGE_CURRENT_CLOTH(response.data);
      } catch (error) {
        PUSH_CLOTHES_ERROR(error);
      }
    };

    return {
      state: {
        clothes,
        currentCloth,
        errors
      },
      getters: {
        getClothes,
        getCurrentCloth
      },
      mutations: {
        CHANGE_CLOTHES,
        CHANGE_CURRENT_CLOTH,
        PUSH_CLOTHES_ERROR
      },
      actions: {
        fetchClothes,
        fetchOneCloth
      }
    };
  }
});
