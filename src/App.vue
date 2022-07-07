<template>
  <v-app id="main">
    <div class="d-flex flex-row flex-grow-1">
      <v-navigation-drawer
        permanent
        width="320"
        color="black-lighter px-8 pt-6 pb-11"
        class="justify-space-between"
      >
        <p class="white-main--text font-weight-medium display-1 mb-auto">
          Logo
        </p>
        <template v-slot:append>
          <v-btn text class="white-main--text text-none subtitle-2">
            <v-icon left class="me-3"> mdi-login-variant </v-icon>
            Log out
          </v-btn>
        </template>
      </v-navigation-drawer>
      <div class="d-flex flex-column flex-grow-1">
        <v-app-bar flat color="black-lighter" class="flex-grow-0"></v-app-bar>
        <v-main class="px-6 py-4">
          <div class="mb-4">
            <ServersMapDashboardBlock />
          </div>
          <div>
            <ServerConnectionsBlock />
          </div>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
@import url("./styles/index.scss");
</style>

<script>
import ServersMapDashboardBlock from "./components/ServersMapDashboardBlock.vue";
import ServerConnectionsBlock from "./components/ServerConnectionsBlock.vue";

export default {
  name: "App",

  components: { ServersMapDashboardBlock, ServerConnectionsBlock },
};
</script>
