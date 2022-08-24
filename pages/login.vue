<template>
  <div>
    <center>
      <h1>user not login</h1>
      <br>
      <h3>please login now</h3>
      <p style="margin-bottom: 50px;" />

      <v-btn color="primary" @click="loginNow()">
        login now (click)
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="pink"
      >
        <v-icon dark>
          mdi-heart
        </v-icon>
      </v-btn>
      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="secondary"
        @click="loader = 'loading'"
      >
        Accept Terms
      </v-btn>

      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Upload
        <v-icon
          right
          dark
        >
          mdi-cloud-upload
        </v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="loader = 'loading2'"
      >
        Custom Loader
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>

      <v-btn
        :loading="loading5"
        :disabled="loading5"
        color="blue-grey"
        class="ma-2 white--text"
        fab
        @click="loader = 'loading5'"
      >
        <v-icon dark>
          mdi-cloud-upload
        </v-icon>
      </v-btn>
    </center>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    loginNow () {
      localStorage.setItem('Nuxt_jwtToken', 'roshandelpoor')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
