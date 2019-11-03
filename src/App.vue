<template>
  <div>
    <v-app>
      <v-navigation-drawer expand-on-hover permanent app>
        <template v-slot:prepend>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/women/85.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link two-line>
              <v-list-item-content>
                <v-list-item-title class="title"
                  >Sandra Adams</v-list-item-title
                >
                <v-list-item-subtitle
                  >sandra_a88@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </template>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Головна</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :tile="false" flat app class="light-v-app-bar">
        <v-toolbar-title>Material Shop</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-title>Ввімкнути темне оформлення</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-divider></v-divider>
      <v-content><router-view></router-view></v-content>
    </v-app>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";

export default {
  name: "app",
  setup() {
    const state = reactive({});

    return {
      state
    };
  }
};
</script>

<style lang="scss" scoped>
.light-v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
}
</style>
