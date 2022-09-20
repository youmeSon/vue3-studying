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

## 4. List Rendering

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