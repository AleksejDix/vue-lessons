<template>
  <nav>
    <div>
      <div>
        <div>
          <button @click="login">login</button>
          <button @click="login2">login2</button>
          <img
            class="user"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      token: ''
    }
  },
  methods: {
    async createToken() {
      const response = await api.requestToken.create()
      const { success, request_token } = response
      if (success) {
        this.request_token = request_token
        window.open(
          `https://www.themoviedb.org/auth/access?request_token=${request_token}`
          // &redirect_to=${location.protocol}//${location.host}/profile`
        )
      }
      return response
    },
    async createAccess() {
      const response = await api.accessToken.create({
        request_token: this.request_token
      })
      console.log(response)
      return response
    },
    login() {
      this.createToken()
    },
    login2() {
      this.createAccess()
    }
  }
}
</script>
