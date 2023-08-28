<script setup lang="ts">
const store = useProductStore()
const router = useRouter()

const filterProduct = computed(() => {
  if (store.filter) {
    const dataFilters = store.listProducts.filter(
      (item) => item.category === store.filter
    )
    return dataFilters
  } else {
    return store.listProducts
  }
})
</script>

<template>
  <div class="product-main">
    <h2 class="title">Products</h2>
    <hr />
    <div class="product-grid">
      <div class="showcase" v-for="(item, id) in filterProduct" :key="id">
        <div class="showcase-banner">
          <img
            :src="`/products/${item.images}.jpg`"
            :alt="item.images"
            width="300"
            class="product-img default"
          />
          <img
            :src="`/products/${item.images}-1.jpg`"
            :alt="item.images"
            width="300"
            class="product-img hover"
          />

          <p
            class="showcase-badge angle"
            :class="item.type === 'Sale' ? 'black' : 'pink'"
          >
            {{ item.type }}
          </p>

          <div class="showcase-actions">
            <button class="btn-action">
              <i class="mdi mdi-eye-outline"></i>
            </button>

            <button class="btn-action">
              <i class="mdi mdi-repeat"></i>
            </button>

            <button class="btn-action">
              <i class="mdi mdi-basket-plus-outline"></i>
            </button>
          </div>
        </div>

        <div class="showcase-content">
          <div class="showcase-category">{{ item.category }}</div>

          <h3
            class="showcase-title"
            @click="router.push(`/product/${item.id}`)"
          >
            {{ item.name }}
          </h3>

          <div class="price-box">
            <p class="price">${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
