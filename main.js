const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            brand: 'Youme',
            product: 'socks',
            description: 'It makes your foot warm.',
            url: 'https://youmeson.github.io/portfolio/',
            sizes: ['small', 'medium', 'large'],
            selectedVariant: 0,
            variants : [
                { id: 1234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, sale: true},
                { id: 3345, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, sale: false}
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart > 0 ? this.cart -= 1 : 0;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        onSale() {
            return this.variants[this.selectedVariant].sale;
        }
    }

});

