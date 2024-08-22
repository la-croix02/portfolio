import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjects = defineStore({
    id: 'projects',
    state: () => ({
        url: 'https://api.github.com/users/',
        userName: 'la-croix02',
        repositories: null,
        reposLanguages: null,
    }),
    actions: {
        async getProjects() {
            try {
                const repos = await axios.get(`${this.url}${this.userName}/repos`)
                this.repositories = repos.data 
            } catch (error) {
                console.error('Ошибка при получении данных', error)
            }
        },
        async getLanguages(projectName) {
            try {
                const lang = await axios.get(`https://api.github.com/repos/${this.userName}/${projectName}/languages`)
                this.reposLanguages = lang.data
            } catch (error) {
                console.error('Ошибка при получении данных', error)
            }
        }
    },
    getters: {

    }
})