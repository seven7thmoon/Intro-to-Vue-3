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
            this.cart.pop(id)//這裡錯了 這樣點到藍襪子的remove也會移除綠襪子
        },
    }
})
