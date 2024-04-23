import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
// Set up axios globally:
window.axios = axios;
// Configure the default headers for axios:
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Define the base URL for all axios requests:
axios.defaults.baseURL = 'http://<YOUR-LARAVEL-API-SERVER>/api';
// If there's a token in the localStorage, set it as the default Authorization header:
if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}
// Handle token expiration or invalid tokens:
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Remove the token from local storage:
            localStorage.removeItem('token');
            // Reset the axios Authorization header:
            axios.defaults.headers.common['Authorization'] = 'Bearer';
            // Redirect the user to the login page:
            router.push({ name: 'login' });
        }
        return Promise.reject(error);
    }
);
// Create and mount the Vue app:
const app = createApp(App);
app.use(router);
app.mount('#app');