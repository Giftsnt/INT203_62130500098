const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true
        }
    },
}
var mountedApp = Vue.createApp(app).mount('#app')