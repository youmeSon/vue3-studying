const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            image: './assets/images/socks_green.jpg',
            product: 'socks',
            description: 'It makes your foot warm.',
            url: 'https://youmeson.github.io/portfolio/',
            onSaleGreen: true,
            inventoryGreen: 100,
            onSaleBlue: false,
            inventoryBlue: 0,
            sizes: ['small', 'medium', 'large'],
            variants : [
                { id: 1234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 3345, color: 'blue', image: './assets/images/socks_blue.jpg'}
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
        changeColour(variantImage) {
            this.image = variantImage;
        }

    }

});

