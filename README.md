# vue3-studying 💖

## 1. creating the vue app 

    const app = Vue.createApp({Options Object})

to render the product data withing the h1,
```
<div id="app">
  <h1>{{ product }}</h1>
</div>
```

## 2. Attribute Binding 
    <img v-bind:src="image">
> v-bind: Dynamically bind an **attribute** to an **expression**.

✅ a shorthand for v-bind
    
    <img :src="image"> 

## 3. Conditional Rendering

* main JS
```
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true, // new data property //
            inventory: 100,
        }
    }
})
```

🍓 Show and Hide

    <p v-show="inStock">In Stock</p>

🍇 Chained Conditional Logic

```
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
<p v-else>Out of Stock</p>
```

## 5. List Rendering

for loop

    v-for

``` 
const app = Vue.createApp({
    data() {
        return {
            ...
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
``` 

```
<ul>
  <li v-for="detail in details">{{ detail }}</li>
</ul>
``` 
details refers to the details array in our data, and detail is the alias for the current element from that array, as we're looping through it to print out a new li. 

```
data() {
  return {
    ...
    variants: [
      { id: 2234, color: 'green' },
      { id: 2235, color: 'blue' }
    ]
  }
}
``` 
```
<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
```
>this gives each DOM element a unique key so that Vue can grasp onto the element and not lose track of it as things update within the app. 

## 6. Event Handling 

    v-on:click
    

A shorthand for v-on

    @click

    @mouseover


```
<button class="button" v-on:click="addToCart">Add to Cart</button>
```

```
const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      ...
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    }
  }
})
```

## 7.Class & Style Binding 

✨Style binding 

we want to bind styles to the variant divs. WE do so by using v-bind (or its shorthand: **:** )

```
<div 
  v-for="variant in variants" 
  :key="variant.id" 
  @mouseover="updateImage(variant.image)" 
  class="color-circle" 
  :style="{ backgroundColor: variant.color }">
</div>
```

>we can use '`background-color`' instead of `backgroundColor`. 

💥On our variant `div`, we added the `style` attibute and bound a style object to it. 
```
<div 
  :style="{ backgroundColor: variant.color }">
</div>
```

✨ Stying Binding: Objects

sometimes you might want to add a bunch of styles to an element, but adding them all in-line could get messy. In these situations, we can bind to an entire style object that lives within our data. 
```
<div :style="styles"></div>
```
```
data() {
  return {
    styles: {
      color: 'red',
      fontSize: '14px'
    }
  }
}
```

### 🐱‍🚀 Class Binding 

✅ disabled button 
```
<button :disabled="!inStock">
```
✅ Add `class`

🐶 If inStock is false, add `disabledButton` !!! 
-> 
```
<button :class="{ disabledButton: !inStock }">
```

### 🐱‍🚀 Ternary Operators
Same order like normal ternary operators.
```
<div :class="[isActive ? activeClass : '']"> 
```