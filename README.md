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

🍓 Show and Hide

    <p v-show="inStock">In Stock</p>

🍇 Chained Conditional Logic

```
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
<p v-else>Out of Stock</p>
```