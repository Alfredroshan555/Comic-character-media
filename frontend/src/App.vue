<template>
  <v-app id="inspire" color="primary">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Characters </v-list-item-title>
          <v-list-item-subtitle>
            Your favourite fantasy characters....
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Comics Media</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", link: "/" },
      { text: "Add Post", icon: "mdi-note-plus", link: "/add-post" },
      { text: "About", icon: "mdi-help-box", link: "/about" },
    ],
  }),
};
</script>
