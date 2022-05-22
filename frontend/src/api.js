  import axios from 'axios'
  import '@capacitor-community/http';
  import { Http } from '@capacitor-community/http';

  //   const url = 'http://localhost:5000/posts'

  export default class API {
      //   get all posts from db
      static async getAllPosts() {
              const res = await Http.request({
                  method: 'GET',
                  url: 'http://localhost:5000/posts'
              })
              return res.data
          }
          // get post by id
      static async getPostById(id) {
              const res = await axios.get(`${url}/${id}`)
              return res.data
          }
          //  create post
      static async createPost(post) {
              const res = await axios.post(url, post)
              return res.data
          }
          //  update post
      static async updatePost(id) {
              const res = await axios.patch(`${url}/${id}`)
              return res.data
          }
          // delete post
      static async deletePost(id) {
          const res = await axios.delete(`${url}/${id}`)
          return res.data
      }
  }