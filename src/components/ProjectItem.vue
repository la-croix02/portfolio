<template>
    <div class="project">
        <img class="project__img" :src="getImg" alt="">
        <ul class="project__list">
            <li class="project__list-item" v-for="(item, index) in projectLanguages" :key="index">
                {{ item }}
            </li>
        </ul>
        <div class="project__info">
            <h3 class="project__info-title">{{ proj.name }}</h3>
            <p class="project__info-text">{{ proj.description }}</p>
            <a class="project__info-btn" :href="getProjectUrl" target="_blank">Open &lt;~&gt;</a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted, computed } from 'vue';
import { useProjects } from '@/store/projects.js';
import { projectImage } from '@/project-images.js'

const { proj } = defineProps(['proj']);
const projectsStore = useProjects();

const projectLanguages = ref([]);

onMounted(async () => {
  await getLanguages();
});

async function getLanguages() {
  await projectsStore.getLanguages(proj.name);
  const langArr = Object.keys(projectsStore.reposLanguages);
  projectLanguages.value = langArr;
}

const getImg = computed(() => {
    return projectImage[proj.name] || '';
})

const getProjectUrl = computed(() => {
    return `https://la-croix02.github.io/${proj.name}/`;
})
</script>

<style lang="scss" scoped>
.project {
    border: 1px solid #ABB2BF;
    max-width: 330px;
    &__img {
        max-width: 100%;
        width: 100%;
        object-fit: cover;
        height: 201px;
        vertical-align: bottom;
    }
    &__list {
        border-top: 1px solid #ABB2BF;
        border-bottom: 1px solid #ABB2BF;
        padding: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        &-item {
            color: #ABB2BF;
            font-size: 16px;
        }
    }
    &__info {
        padding: 16px;
        &-title {
            color: #FFF;
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 16px;
            text-transform: capitalize;
        }
        &-text {
            color: #ABB2BF;
            font-size: 16px;
            margin-bottom: 16px;
            overflow-wrap: break-word;
        }
        &-btn {
            display: inline-block;
            color: #FFF;
            font-size: 16px;
            font-weight: 500;
            padding: 8px 16px;
            border: 1px solid #C778DD;
            transition: .5s;
            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
                color: #C778DD;
            }
        }
    }
    @media (max-width: 768px) {
        & {
            max-width: unset;
            width: 60%;
        }
    }
    @media (max-width: 576px) {
        & {
            max-width: unset;
            width: 90%;
        }
    }
}

</style>

