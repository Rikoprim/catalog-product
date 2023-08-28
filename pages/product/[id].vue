<script setup lang="ts">
const { params } = useRoute()
const store = useProductStore()
const router = useRouter()

await store.getDetailProduct(params.id)
</script>

<template>
  <div class="product-featured">
    <div class="header-featured">
      <i class="mdi mdi-arrow-left" @click="router.back" />
      <div class="title">Detail product</div>
    </div>
    <hr />
    <div class="showcase-wrapper">
      <div class="showcase-container">
        <div class="showcase">
          <div class="showcase-banner">
            <img
              :src="`/products/${store.product?.images}.jpg`"
              alt="shampoo, conditioner & facewash packs"
              class="showcase-img"
            />
          </div>

          <div class="showcase-content">
            <a href="#">
              <h3 class="showcase-title">
                {{ store.product?.name }}
              </h3>
            </a>

            <p class="showcase-desc">
              {{ store.product?.description }}
            </p>

            <div class="price-box">
              <p class="price">${{ store.product?.price }}</p>
            </div>

            <button class="add-cart-btn">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
