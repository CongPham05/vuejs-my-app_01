import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Add',
        path: '/add-restaurant',
        component: Add
    },
    {
        name: 'Update',
        path: '/update-restaurant/:id',
        component: Update
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router