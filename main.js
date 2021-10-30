const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        atCart(id) {
            this.cart.push(id)
        },
        rfCart(id) {
            this.cart.pop(id)
        },
    }
})
