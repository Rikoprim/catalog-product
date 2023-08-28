<script setup lang="ts">
const isSticky = ref<boolean>(false)
const router = useRouter()

const checkSticky = () => {
  if (window.pageYOffset > 100) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkSticky)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkSticky)
})
</script>

<template>
  <div class="header" :class="{ sticky: isSticky }">
    <div class="container">
      <div class="brand" @click="router.push('/product')">
        <div class="nav-mobile">
          <li class="mdi mdi-menu"></li>
        </div>
        <a> StoreID </a>
      </div>
      <nav>
        <ul class="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Jewelry</a></li>
          <li><a href="#">Parfume</a></li>
        </ul>
      </nav>
      <div class="nav-user">
        <div class="header-search">
          <input
            type="text"
            class="search-field"
            id="fname"
            name="search"
            placeholder="Enter your product name..."
          />
          <i class="mdi mdi-magnify"></i>
        </div>
        <div class="header-action">
          <i class="mdi mdi-account-outline" @click="router.push('/gallery')" />
          <i class="mdi mdi-shopping-outline" />
        </div>
      </div>
    </div>
  </div>
</template>
