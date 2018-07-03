<template>
  <div>
    <chip-item :title="title"></chip-item>
    <chip-item :title="title" :close="close"></chip-item>
    <chip-item :title="title" :avatar="avatar"></chip-item>
    <chip-item :title="title" :close="close" :avatar="avatar"></chip-item>
    <chip-item :title="title" :avatar="avatar2"></chip-item>
    <chip-item :title="title" :close="close" :avatar="avatar2"></chip-item>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Zaur Bigriev',
      close: true,
      avatar: {
        imgSrc: ''
      },
      avatar2: {
        imgSrc: './static/img/avatar.png'
      }
    }
  }
}
</script>
