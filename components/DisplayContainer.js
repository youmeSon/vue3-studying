app.component('display-container', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
    `
    <div class="container">
    <div class="item">
      <img :src="image" :alt="description" class="socks-img"/>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p v-if="inStock">We have stock</p>
        <p v-else>😥 Out of stock</p>
        <p v-show="onSale">{{ title }} onSale</p>
        <p>Shipping: {{ shipping }}</p>
        <!-- <p v-if="inventory> 10">😍 You can buy right now!</p>
        <p v-else-if="inventory < 10 && inventory > 0">🙄 Almost sold out! only {{ inventory }} left!</p>
        <p v-else="inventory">😥 Out of stock</p> -->
        <div v-show="onSale">
          <p>What sizes we have? </p>
          <ul class="sizes">
            <li class="size" v-for="size in sizes">{{ size }}</li>
        </ul>
        </div>
        <p>Other colour options?</p>
        <ul>
          <li  v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ 'background-color': variant.color}"></li>
        </ul>
        <button class="button" @click="addToCart" :disabled="!onSale" :class="{ disabledButton: !onSale}">Add to Cart</button>
        <button class="button" @click="removeFromCart" :disabled="!onSale" :class="{ disabledButton: !onSale}">Remove it</button>
      </div>
    </div>

  </div>
    `,
    data() {
        return {
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
        },
        shipping() {
            if(this.premium) {
                return 'Free'
            } 
            return 2.99
        }
    }

})