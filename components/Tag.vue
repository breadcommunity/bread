<template>
  <span
    :class="
      `text-xs font-medium inline-block py-1 px-2 rounded text-${colour}-600 bg-${colour}-200 last:mr-0 mr-1`
    "
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Tag'
    }
  },
  computed: {
    colour() {
      const colours = [
        'red',
        'green',
        'blue',
        'teal',
        'pink',
        'purple',
        'gray',
        'orange',
        'yellow',
        'indigo'
      ]

      const sumCode = this.label.split('').reduce((sum, char) => {
        return sum + char.charCodeAt(0)
      }, 0)

      return colours[sumCode % (colours.length - 1)]
    }
  }
}
</script>
