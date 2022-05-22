<template>
  <v-container>
    <v-alert
      border="left"
      close-text="Close"
      color="green"
      dark
      dismissible
      v-if="this.$route.params.message"
      >{{ this.$route.params.message }}</v-alert
    >
    <v-row no-gutter>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
          <v-img height="250" :src="`/${post.image}`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">{{
            post.category
          }}</v-btn>
          <v-card-title class="headline">{{ post.title }}</v-card-title>
          <v-card-text class="py-0">{{
            post.content.substring(0, 100) + "....."
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getAllPosts();
    t;
  },
  methods: {
    async getAllPosts() {
      alert("Sd");
      this.posts = await API.getAllPosts()
        .then((res) => {
          alert("res:", res);
        })
        .catch((err) => {
          alert(err);
        });
      console.log("posts = ", this.posts);
    },
  },
};
</script>

<style></style>
