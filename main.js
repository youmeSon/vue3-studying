const app = Vue.createApp({
    data() {
        return {
            product: 'socks',
            description: 'It makes your foot warm.',
            image1: './assets/images/socks_green.jpg',
            image2: './assets/images/socks_blue.jpg',
            url: 'https://youmeson.github.io/portfolio/',
            onSaleGreen: true,
            inventoryGreen: 100,
            onSaleBlue: false,
            inventoryBlue: 0,
            sizes: ['small', 'medium', 'large'],
            variants : [
                { id: 1234, color: 'green'},
                { id: 3345, color: 'blue'}
            ]
        }
    }

});

