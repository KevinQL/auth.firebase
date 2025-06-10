<template>

    <div class="login-view">
        <h1>Login with Firebase</h1>
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
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    
    const username = ref("");
    const password = ref("");

    const authLogin = async () => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, username.value, password.value);
            console.log('Login successful:', userCredential);
            // Handle successful login, e.g., redirect to dashboard
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure, e.g., show an error message
        }
    };

</script>

<style>
.login-view {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}  
.login-view form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.login-view label {
    font-weight: 500;
    margin-bottom: 4px;
    display: block;
}

.login-view input[type="text"],
.login-view input[type="password"] {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
}

.login-view button[type="submit"] {
    padding: 10px 0;
    background-color: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.login-view button[type="submit"]:hover {
    background-color: #1565c0;
}
</style>