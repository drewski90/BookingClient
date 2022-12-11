<template>
  <v-row justify="center" align="center" no-gutters class="fill">
    <div class="login-bg">
      <v-form class="fill-x" >
        <slot>
          <h1 class="login-header text-center">
            Login
          </h1>
        </slot>

        <v-text-field
          v-model="email"
          dark
          prepend-icon="mdi-account"
          name="Email"
          label="E-mail"
          type="text"
          @keyup.enter="login"
        ></v-text-field>

        <v-text-field
          @keyup.enter="login"
          v-model="password"
          dark
          id="password"
          prepend-icon="mdi-lock"
          name="password"
          label="Password"
          type="password"
        ></v-text-field>

        <v-row no-gutters class="caption mb-4" justify="space-between">
          <span>
            Forgot password?
          </span>
          <span>
            Sign Up
          </span>
        </v-row>

        <v-btn dark @click="login" style="width:100%">
          Sign In
        </v-btn>

      </v-form>

      <div>
        <div class="caption text-center mb-2 mt-2">
          or
        </div>
        <div v-if="googleSignIn">
          <div id="g_id_onload"
              :data-client_id="googleSignIn.clientId"
              data-auto_prompt="false">
          </div>

          <div class="g_id_signin"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left">
          </div>
        </div>
      </div>

    </div>
  </v-row>
</template>

<script>

const loginQuery = `
mutation signIn($email:String!, $password: String!){
  signIn(email:$email, password:$password){
    user {
      id
      email
      emailVerified
      firstName
      lastName
      role {
        name
        created
        id
        isAdmin
        permissions
        cls
      }
      groups {
        id
        name
        active
        cls
      }
      status
      created
      cls
    }
  }
}`

export default {
  mounted() {
    window.google.accounts.id.renderButton()
  },
  data() {
    return {
      email: "",
      password: "",
      googleSignIn: {
        clientId: "729984532461-paorerhtgqukbur5vg2poe95mcf8kavi.apps.googleusercontent.com",
        loginURI: "https://6fde-76-77-188-10.ngrok.io/"
      }
    }
  },
  methods:{ 
    login() {
      const {email, password} = this;
      console.log(email, password)
      this.api.request(loginQuery, {email, password}).then((i) => {
        console.log(i)
      })
    }
  }
}
</script>

<style>
.fill-x {
  width: 100%;
}
.fill-y {
  height: 100%;
}
.fill {
  height: 100%;
  width: 100%;
}
.login-header {
  font-weight:100;
  font-size:1.5rem;
  margin-bottom:15px;
}
.login-bg {
  overflow:hidden;
  max-width: 400px;
  padding: 25px;
  color: white;
  width: 100%;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid  rgb(49, 1, 84);
  box-shadow: 0px 0px 30px rgba(72, 173, 255, 0.176);
}
</style>