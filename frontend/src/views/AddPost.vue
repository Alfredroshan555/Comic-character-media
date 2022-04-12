<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-title>Add a New Post</v-card-title>
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
          :rules="rules"
          show-size
          counter
          multiple
          label="Select Image"
        ></v-file-input>
        <v-btn
          type="submit"
          @click.prevent="submitForm"
          class="mt-3"
          color="primary"
          >Add Post</v-btn
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
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      if (this.$refs.form.validate()) {
        const res = await API.createPost(formData);
        this.$router.push({ name: "home", params: { message: res.message } });
      }
    },
  },
};
</script>

<style></style>
