const app = {
    data() {
        return {
            name: 'Sunanta Singka',
            job: 'Web Designer & Developer',
            articlesnum: '10434',
            articles: 'Articles',
            followersnum: '434K',
            followers: 'Followers',
            followingnum: '5454',
            following: 'Following',
        }
    },
}
var mountedApp = Vue.createApp(app).mount('#app')