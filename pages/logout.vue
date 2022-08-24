<template>
  <div />
</template>

<script>
export default {
  name: 'LogoutPage',
  mounted () {
    this.logout()
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
