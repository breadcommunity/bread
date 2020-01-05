<template>
  <button
    :class="
      `px-8 py-2 font-medium rounded-full ${
        variant ? 'button-' + variant : 'bg-gray-200 text-gray-800'
      } ${size === 'large' ? 'button-large' : ''}`
    "
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.button-primary {
  @apply bg-bread-primary text-gray-800;
}

.button-secondary {
  @apply bg-bread-secondary text-bread-secondary-dark;
}

.button-secondary-light {
  @apply bg-bread-secondary-light;
}

.button-large {
  @apply py-3;
}
</style>
