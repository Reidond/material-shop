<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-card class="mx-auto" height="560" width="470" outlined elevation="0">
          <v-carousel height="560" show-arrows hide-delimiters cycle>
            <v-carousel-item v-for="(photo, i) in currentCloth.photos" :key="i">
              <v-img class="white--text align-end" height="560" :src="photo">
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="mx-auto" height="560" outlined elevation="0"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "view-more",
  watch: {
    $route: "idChanged"
  },
  setup(_, { root }) {
    const {
      getters: clothesGetters,
      actions: clothesActions
    } = root.$modules.Clothes;

    const currentCloth = computed(() => clothesGetters.getCurrentCloth.value);

    const idChanged = async () => {
      await clothesActions.fetchOneCloth(root.$route.params.id);
    };

    return {
      currentCloth,
      idChanged,
      ...clothesActions,
      ...clothesGetters
    };
  }
};
</script>

<style lang="scss" scoped></style>
