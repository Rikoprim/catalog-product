<script setup lang="ts">
import { customAlphabet } from 'nanoid/non-secure'

const nanoid = customAlphabet('1234567890', 7)
const id = parseInt(nanoid())
const type = markRaw(['New', 'Sale'])
const store = useProductStore()
const category = markRaw([
  'Clothes',
  'Footwear',
  'Jewelry',
  'Perfume',
  'Cosmetics',
  'Glasses',
  'Bags',
])

const image = markRaw([
  'clothes',
  'jacket-blue',
  'jacket-brown',
  'jacket-girls',
  'party-wear',
  'shirt',
  'shoe-black',
  'shoe-bot',
  'shoe-brown',
  'shoe-sports',
  'shorts',
  'watch-blue',
  'watch-gold',
])

const emits = defineEmits<{
  (e: 'onClose'): void
}>()

const form = ref({
  id: id,
  name: '',
  type: '',
  category: '',
  description: '',
  price: '',
  images: '',
})

const { addProduct } = useProduct()

const submiProduct = async () => {
  const { status } = await addProduct(form.value)
  if (status.value === 'success') {
    emits('onClose')
    store.getProduct()
  }
}
</script>

<template>
  <form @submit.prevent="submiProduct">
    <label for="fname">Name Product</label>
    <input
      class="text-field"
      placeholder="name product"
      v-model="form.name"
      type="text"
      required
      id="fname"
      name="fname"
    />
    <label for="ftype">Type</label>
    <select
      class="text-field"
      v-model="form.type"
      name="ftype"
      id="ftype"
      form="ftype"
    >
      <option v-for="item in type" :value="item">{{ item }}</option>
    </select>
    <label for="fcategory">Category</label>
    <select
      class="text-field"
      v-model="form.category"
      name="fcategory"
      id="fcategory"
      form="fcategory"
    >
      <option v-for="item in category" :value="item">{{ item }}</option>
    </select>
    <label for="fdesc">Description</label>
    <textarea
      class="text-field"
      id="fdesc"
      name="fdesc"
      v-model="form.description"
      required
      rows="4"
      cols="50"
    ></textarea>
    <label for="fimage">Price</label>
    <input
      class="text-field"
      placeholder="price"
      v-model="form.price"
      type="number"
      required
      id="fprice"
      name="fprice"
    />
    <label for="fimage">Image</label>
    <select
      class="text-field"
      v-model="form.images"
      name="fimage"
      id="fimage"
      form="fimage"
    >
      <option v-for="item in image" :value="item">{{ item }}</option>
    </select>
    <div class="btn-modal-action">
      <button type="reset" class="btn btn-danger" @click="emits('onClose')">
        cancel
      </button>
      <button type="submit" class="btn btn-primary">save</button>
    </div>
  </form>
</template>

<style lang="scss">
.btn-modal-action {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  float: right;
}
</style>
