/* Html koden blev väldigt osnygg om man kopiera 30 stycken posts */

var app = new Vue({
    el: '#app',
    data: () => {
        return {
            posts: [],
        }
    },
    methods: {
        randomDate () {
            let start = new Date(2012, 0, 1)
            let end = new Date()
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US')
        },
        randomImage () { /* Returns a string */
            return new Promise((resolve, reject) => {
                axios.get("https://picsum.photos/200")
                .then(response => {
                    resolve(response.request.responseURL)
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
        addPosts () {
            this.randomImage()
            for(let i = 0; i < 30; i++) { 
                this.randomImage()
                .then(response => {
                    this.posts.push({
                        imageUrl: response,
                        likes: Math.floor(Math.random() * 1000),
                        date: this.randomDate()
                    })
                })
            }
        }
    },
    mounted() {
        this.addPosts()
    }
})

