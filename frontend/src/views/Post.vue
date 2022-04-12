<template>
  <v-container v-if="deleted">
    <v-row>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <v-img :src="`${post.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn small outlined color="primary">{{
                  post.category
                }}</v-btn>
              </v-col>
              <v-col sm="2" class="d-flex justify-end">
                <v-btn
                  color="success"
                  text
                  @click="updatePost"
                  :to="{ name: 'edit-post', params: { id: post._id } }"
                  >Edit</v-btn
                >
                <v-btn color="red" text @click="deletePost(post._id)"
                  >Delete</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-subtitle class="headline">
            <h3>{{ post.title }}</h3>
          </v-card-subtitle>
          <v-card-text class="grey--text">{{ post.content }}</v-card-text>
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
      post: {},
      deleted: true,
    };
  },
  created() {
    this.getPostById();
  },
  methods: {
    async getPostById() {
      this.post = await API.getPostById(this.$route.params.id);
      console.log("current post =", this.post);
    },
    async deletePost(id) {
      const res = await API.deletePost(id);
      this.$router.push({ name: "home", params: res.message });
    },
    async updatePost() {},
  },
};
</script>

<style></style>
