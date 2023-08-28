<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const { title } = toRefs(props)

const emits = defineEmits<{
  (e: 'onClose'): void
}>()
</script>

<template>
  <div class="modal" data-modal>
    <div class="modal-close-overlay" data-modal-overlay></div>

    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button
          @click="emits('onClose')"
          class="modal-close-btn"
          data-modal-close
        >
          <i class="mdi mdi-close"></i>
        </button>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>
