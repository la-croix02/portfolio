<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__inner">
                <router-link class="nav__logo" to="/">
                    <img src="@/assets/images/logo.svg" alt="">
                    <span>La-Croix</span>
                </router-link>
                <div class="nav__burger" @click="BurgerMenu = true"></div>
                <div class="nav__menu" :class="{active: BurgerMenu}">
                    <div class="nav__menu-header">
                        <router-link class="nav__logo" to="/">
                            <img src="@/assets/images/logo.svg" alt="">
                        </router-link>
                        <div class="nav__menu-close" @click="BurgerMenu = false"></div>
                    </div>
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="item in listItems" :key="item.title">
                            <router-link class="nav__list-link" :to="item.url">
                                {{ item.title }}
                            </router-link>
                            <span></span>
                        </li>
                    </ul>
                    <div class="nav__menu-footer">
                        <ul class="nav__menu-media-list">
                            <li class="nav__menu-media-item">
                                <a href="#">
                                    <img src="@/assets/images/github-ico.svg" alt="github">
                                </a> 
                            </li>
                            <li class="nav__menu-media-item">
                                <a href="#">
                                    <img src="@/assets/images/github-ico.svg" alt="github">
                                </a> 
                            </li>
                            <li class="nav__menu-media-item">
                                <a href="#">
                                    <img src="@/assets/images/github-ico.svg" alt="github">
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const listItems = ref([
    {title: 'home', url: '/'},
    {title: 'works', url: '/works'},
    {title: 'about-me', url: '/about'},
    {title: 'contacts', url: '/contacts'},
])

const BurgerMenu = ref(false)
</script>

<style lang="scss" scoped>

</style>