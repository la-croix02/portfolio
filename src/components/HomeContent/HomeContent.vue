<template>
    <main class="main">
        <section class="projects">
            <div class="container">
                <div class="projects__top">
                    <h2 class="section-title">projects</h2>
                    <a class="projects__top-link" href="#">View all ~~></a>
                </div>
                <div class="projects__inner">
                    <ProjectItem
                    v-for="proj in limitedProjects"
                    :key="proj.name"
                    :proj="proj"
                    />
                </div>
            </div>
        </section>
        <section class="skills">
            <div class="container">
                <h2 class="section-title">skills</h2>
                <div class="skills__inner">
                    <div class="skills__img">
                        <img class="skills__img-pic" src="@/assets/images/skills-image.png" alt="">
                    </div>
                    <div class="skills__items">
                        <div class="skills__item">
                            <h3 class="skills__item-title">Tools</h3>
                            <ul class="skills__item-list">
                                <li>VSCode</li>
                                <li>Figma</li>
                                <li>Git</li>
                                <li>Font Awesome</li>
                            </ul>
                        </div>
                        <div class="skills__item">
                            <h3 class="skills__item-title">Frameworks</h3>
                            <ul class="skills__item-list">
                                <li>Vue</li>
                            </ul>
                        </div>
                        <div class="skills__item">
                            <h3 class="skills__item-title">Databases</h3>
                            <ul class="skills__item-list">
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div class="skills__item">
                            <h3 class="skills__item-title">Other</h3>
                            <ul class="skills__item-list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                        <div class="skills__item">
                            <h3 class="skills__item-title">Languages</h3>
                            <ul class="skills__item-list">
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="about">
            <div class="container">
                <div class="about__inner">
                    <div class="about__info">
                        <h2 class="section-title">about-me</h2>
                        <div class="about__info-text">
                            <p>Hello, my name is Artyom!</p>
                            <p>I'm an aspiring front-end developer with a passion for creating beautiful and interactive web applications</p>
                            <p>Currently, I'm diving deeper into front-end development and aspire to create amazing user interfaces that are not only visually appealing but also functional. My goal is to build web applications that enhance the user experience and make people's lives easier.</p>
                        </div>
                        <a class="about__info-btn" href="#">Read more -></a>
                    </div>
                    <div class="about__img">
                        <img class="about__img-pic" src="@/assets/images/about-img.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="contacts">
            <div class="container">
                <h2 class="section-title">contacts</h2>
                <div class="contacts__inner">
                    <p class="contacts__text">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    <div class="contacts__box">
                        <div class="contacts__box-header">Message me here</div>
                        <div class="contacts__box-links">
                            <a class="contacts__box-link" href="#">
                                <img src="@/assets/images/telegram-ico.png" alt="telegram">
                                la_croix98
                            </a>
                            <a class="contacts__box-link" href="#">
                                <img src="@/assets/images/email-ico.svg" alt="email">
                                armaksudov2002@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import ProjectItem from '@/components/ProjectItem.vue';
import { onMounted, computed } from 'vue';
import { useProjects } from '@/store/projects.js';

const projectsStore = useProjects()

onMounted(() => projectsStore.getProjects())

const projectsList = computed(() => projectsStore.repositories)
const limitedProjects = computed(() => projectsList.value ? projectsList.value.slice(0, 3) : [])

</script>

<style lang="scss" scoped>

</style>