<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <button type="button" class="btn btn-success">Tambah</button>
        <div class="card">
          <div class="card-header">Example Component</div>
          <div class="card-body">
            <ul v-if="posts && posts.length">
              <li v-for="post of posts" v-bind:key="post.id">
                <p>
                  <strong>{{post.title}}</strong>
                </p>
                <p>{{post.body}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        console.error(e);
      });
  }
};
</script>
