<script setup lang="ts">
const dialog = ref<boolean>(false)
const store = useProductStore()

const handleDelete = async (id: number) => {
  await store.deleteProduct(id)
  store.getProduct()
}

const handleDetail = async (id: number) => {
  await store.getDetailProduct(id)
}
</script>

<template>
  <div class="container">
    <div class="product-box">
      <div class="product-minimal">
        <div class="product-showcase">
          <div class="product-header">
            <h2 class="title">List product</h2>
            <button class="btn btn-primary" @click="dialog = true">
              add product
            </button>
          </div>
          <hr />
          <div class="showcase-wrapper">
            <div
              class="showcase-container"
              v-for="(item, id) in store.listProducts"
              :key="id"
            >
              <div class="showcase">
                <a href="#" class="showcase-img-box">
                  <img
                    :src="`/products/${item.images}.jpg`"
                    :alt="item.images"
                    width="70"
                    class="showcase-img"
                  />
                </a>

                <div class="showcase-content">
                  <a href="#">
                    <h4 class="showcase-title">{{ item.name }}</h4>
                  </a>

                  <a href="#" class="showcase-category">{{ item.category }}</a>

                  <div class="price-box">
                    <p class="price">${{ item.price }}</p>
                  </div>
                </div>

                <div class="showcase-actions">
                  <button class="btn-action" @click="handleDetail(item.id)">
                    <i class="mdi mdi-circle-edit-outline"></i>
                  </button>

                  <button class="btn-action" @click="handleDelete(item.id)">
                    <i class="mdi mdi-delete-outline"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog title="Input Data" v-if="dialog" @on-close="dialog = false">
    <AddProduct @on-close="dialog = false" />
  </Dialog>
</template>
