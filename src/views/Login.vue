<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>s'inscrire</h2>
        <input
          type="email"
          placeholder="votre adresse mail "
          v-model="register_form.email"
        />
        <input
          type="password"
          placeholder="votre mot de passe "
          v-model="register_form.password"
        />
        <input type="submit" value="S'inscrire" />
      </form>

      <form class="login" @submit.prevent="login">
        <h2>Se connecter</h2>
        <input
          type="email"
          placeholder="votre adresse mail "
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="votre mot de passe "
          v-model="login_form.password"
        />
        <input type="submit" value="se connecter" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.forms {
  padding-top: 30px;
  display: flex;
  min-height: 50px;
}

form {
  flex: 1 1 0%;
  padding: 80px 10px 10px;
}

form.register {
  color: white;
  background-color: rgb(245, 66, 101);
  background-image: linear-gradient(
    to bottom right,
    rgb(245, 66, 101) 0%,
    rgb(189, 28, 60) 100%
  );
}

form.login {
  color: white;
  background-color: #112a46;
  background-image: linear-gradient(to bottom right, #184880 0%, #112a46 100%);
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0 rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}

form.login input:not([type="submit"]) {
  color: white;
  border-bottom: 2px solid #fff;
}

form.login input[type="submit"] {
  background-color: black;
  color: #fff;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: 0.4s;
  text-transform: uppercase;
}

form.register input[type="submit"] {
  background-color: rgb(57, 24, 202);
  color: #fff;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: 0.4s;
  text-transform: uppercase;
}
</style>
