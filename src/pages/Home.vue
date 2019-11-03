<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="2" v-for="cloth in clothes" :key="cloth.id">
        <v-card
          class="mx-auto"
          max-width="317"
          outlined
          elevation="0"
          @click="onCardClick(cloth.id)"
        >
          <v-img
            class="white--text align-end"
            height="404px"
            :src="cloth.photos[0]"
          >
          </v-img>

          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ cloth.type }}/{{ cloth.category }}
              </div>
              <v-list-item-title class="caption mb-3" v-line-clamp:20="2">{{
                cloth.title
              }}</v-list-item-title>
              <v-list-item-subtitle class="title">{{
                cloth.price
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn text icon>
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
            <v-btn text icon>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { onMounted, computed } from "@vue/composition-api";

export default {
  name: "home",
  setup(_, { root }) {
    const {
      getters: clothesGetters,
      actions: clothesActions
    } = root.$modules.Clothes;

    const clothes = computed(() => clothesGetters.getClothes.value);

    onMounted(async () => {
      await clothesActions.fetchClothes();
    });

    const onCardClick = async id => {
      root.$router.push(`/view-more/${id}`);
    };

    return {
      clothes,
      onCardClick,
      ...clothesActions,
      ...clothesGetters
    };
  }
};
</script>

<style lang="scss" scoped></style>
