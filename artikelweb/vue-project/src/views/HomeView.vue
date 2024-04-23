<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
      <p v-if="message" class="error">{{ message }}</p>
      <form @submit.prevent="submit" class="login">
          <div class="form-group">
              <label>Email</label>
              <input v-model="form.email" type="text" class="form-input">
          </div>
          <div class="form-group">
              <label>Password</label>
              <input v-model="form.password" type="password" class="form-input">
          </div>
          <div class="form-group">
              <button type="submit" class="form-input">Login</button>
          </div>
      </form>
  </div>
  </template>
