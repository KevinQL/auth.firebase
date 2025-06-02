<template>

    <div class="login-view">
        <h1>Login</h1>
        <form>
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" @click.prevent="authLogin">Login</button>
        </form> 
    </div>

</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { AuthService } from '../services/AuthService';

    const username = ref('');
    const password = ref('');

    const authLogin = async () => {
        const Auth = new AuthService();
        await Auth.login(username.value, password.value)
            .then(response => {
                console.log('Login successful:', response);
                // Handle successful login, e.g., redirect to dashboard
            })
            .catch(error => {
                console.error('Login failed:', error);
                // Handle login failure, e.g., show an error message
            });
    };


</script>

<style>
</style>