<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-title>Comic Characters Media</v-card-title>
      <v-card-subtitle
        >Lore for all comic characters data form your favourite movies and
        comics!!</v-card-subtitle
      >
      <v-card-content
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis maxime
        libero sunt illum facilis, dolorum dignissimos eaque quos maiores
        dolorem! Reiciendis error consequuntur perferendis est odio. Delectus
        vel adipisci quae!</v-card-content
      >
    </v-card>
    <div class="pa-5"></div>
    <v-card class="pa-2">
      <v-card-title>Technologies</v-card-title>
      <v-card-subtitle>List of all technologies used </v-card-subtitle>
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
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 0,
    items: [
      {
        text: "Frontend----Vue Js",
      },
      { text: "Backend----Node Js & Express" },
      { text: "Database----Mongo DB" },
    ],
  }),
};
</script>
