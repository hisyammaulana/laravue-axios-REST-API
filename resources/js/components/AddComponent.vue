<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Tambah Data</div>
          <div class="card-body">
            <input type="text" v-model="name" placeholder="Name" />
<p v-if="errors.length">
      <li v-for="error in errors">{{ error }}</li>
  </p>
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <select v-model="role">
              <option disabled value>Role</option>
              <option>admin</option>
              <option>bendahara</option>
              <option>anggota</option>
            </select>
            <input type="button" @click="createPost()" value="submit" />
          </div>
        </div>
        <ul v-if="users && users.length">
          <li v-for="user of users" v-bind:key="user.member_id">
            <p>
              <strong>{{user.name}}</strong>
            </p>
            <p>{{user.role}}</p>
          </li>
        </ul>
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
      name: null,
      email: null,
      password: null,
      role: null,
      register: [],
      users: [],
      errors: []
    };
  },
  mounted() {
    this.created();
  },
  methods: {
    created() {
      this.$http
        .get("users")
        .then(response => {
          this.users = response.data.users;
          console.log(response.data.users);
        })
        .catch(e => {
          console.error(e);
        });
    },
    createPost: function(e) {
        if (this.name && this.email && this.password && this.role) {
            return true;
        }

        this.errors = [];
        if (!this.name) {
        this.errors.push('Nama tidak boleh kosong gan.');
      }
      if (!this.email) {
        this.errors.push('Masukkan email yang benar!');
      }
      if (!this.password) {
        this.errors.push('Password Kurang');
      }
      if (!this.role) {
        this.errors.push('Pilih role gan!');
      }

      e.preventDefault()

      this.$http
        .post("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        })
        .then(response => {
          console.log(response);
          this.register = response.status;
          this.created();
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>
