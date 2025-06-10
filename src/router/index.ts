import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseView from '@/views/FirebaseView.vue';
import SocialView from '@/views/SocialView.vue';
import AWSView from '@/views/AWSView.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { title: 'Home Page' }
    },
    {
        path: '/Login',
        name: 'Login',
        component: LoginView,
        meta: { title: 'Login Page' }
    },
    {
        path: '/Firebase',
        name: 'Firebase',
        // component: () => import('../views/FirebaseView.vue'),
        component: FirebaseView,
        meta: { title: 'Firebase Page' }
    },
    {
        path: '/Social',
        name: 'Social',
        component: SocialView,
    },
    {
        path: '/aws',
        name: 'AWS',
        component: AWSView,
        meta: { title: 'AWS Page' }
    }

]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
