<template>
  <VInput
    :label="label"
    :id="name"
    :name="name"
    :type="type"
    @input="handleInput"
    class="text-input"
  />
</template>

<script>
import { VInput } from 'vuetensils'

export default {
  components: {
    VInput
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
.vts-input__label {
  @apply font-medium mb-2 block text-gray-600;
}

.vts-input__input {
  @apply w-full text-lg outline-none appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight;
}

.vts-input__input:focus {
  @apply border-gray-500;
}
</style>
