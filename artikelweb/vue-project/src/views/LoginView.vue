<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({
    email: '',
    password: ''
});
const message = ref();
function submit() {
    message.value = '';
    axios.post('login', form)
    .then(response => {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        router.push({ name: 'user' });
    })
    .catch(error => {
        if (error.response.status === 422) {
            message.value = error.response.data.message;
        }
    })
    .finally(() => form.password = '');
}
</script>