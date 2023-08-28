<script setup lang="ts">
import dress from '~/assets/images/icons/dress.svg?url'
import shoes from '~/assets/images/icons/shoes.svg?url'
import jewelry from '~/assets/images/icons/jewelry.svg?url'
import perfume from '~/assets/images/icons/perfume.svg?url'
import cosmetics from '~/assets/images/icons/cosmetics.svg?url'
import glasses from '~/assets/images/icons/glasses.svg?url'
import bag from '~/assets/images/icons/bag.svg?url'

const store = useProductStore()

const categorys = markRaw<{ icon: string; value: string; title: string }[]>([
  {
    icon: glasses,
    value: '',
    title: 'All',
  },
  {
    icon: dress,
    value: 'Clothes',
    title: 'Clothes',
  },
  {
    icon: shoes,
    value: 'Footwear',
    title: 'Footwear',
  },
  {
    icon: jewelry,
    value: 'Jewelry',
    title: 'Jewelry',
  },
  {
    icon: perfume,
    value: 'Perfume',
    title: 'Perfume',
  },
  {
    icon: cosmetics,
    value: 'Cosmetics',
    title: 'Cosmetics',
  },
  {
    icon: bag,
    value: 'Bags',
    title: 'Bags',
  },
])
</script>

<template>
  <div class="category">
    <h2 class="title">Category</h2>
    <ul class="menu-category-list">
      <li class="menu-category" v-for="(category, id) in categorys" :key="id">
        <div class="menu-title-flex">
          <img
            :src="category.icon"
            :alt="category.icon"
            width="20"
            height="20"
            class="menu-title-img"
          />

          <p class="menu-title" @click="store.insertFilter(category.value)">
            {{ category.title }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
