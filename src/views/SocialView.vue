<template>
    <div class="social-view">
        <h1>Social Login</h1>
        <p>Login with your social media account:</p>
        <button @click="loginGoogle">Login with Google</button>
        <button @click="loginGitHub">Login with GitHub</button>
        <button>Login with Facebook</button>
    </div>
</template>
<script lang="ts" setup>    
    import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const auth = getAuth();

    const loginGoogle = async () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                localStorage.setItem('token', token || '');

                console.log('Login successful:', user);
            })
            .catch((error) => {
                // Handle Errors here.
                console.error('Login failed:', error);
            });
    };


        const loginGitHub = async () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                localStorage.setItem('token', token || '');

                console.log('Login successful:', user);
            })
            .catch((error) => {
                // Handle Errors here.
                console.error('Login failed:', error);
            });
    };


</script>

