<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-title>Edit this Post</v-card-title>
      <v-form ref="form" class="pa-5" enctype="multipart/form-data">
        <v-text-field
          label="Title"
          v-model="post.title"
          prepend-icon="mdi-note"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          label="Category"
          v-model="post.category"
          prepend-icon="mdi-view-list"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          label="Content"
          v-model="post.content"
          prepend-icon="mdi-note-plus"
          :rules="rules"
        ></v-text-field>
        <v-file-input
          @change="selectFile"
          show-size
          counter
          multiple
          label="Select Image"
        ></v-file-input>
        <v-img :src="`/${post.image}`" width="150"></v-img>
        <v-btn @click.prevent="updateForm" class="mt-3" color="danger"
          >Update Post</v-btn
        >
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required....!!"],
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: "",
    };
  },
  async created() {
    const res = await API.getPostById(this.$route.params.id);
    this.post = res;
    console.log(this.post);
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      formData.append("old_image", this.post.image);
      if (this.$refs.form.validate()) {
        const res = await API.updatePost(this.$route.params.id, formData);
        this.$router.push({ name: "home", params: { message: res.message } });
      }
    },
  },
};
</script>

<style></style>
