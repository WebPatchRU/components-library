
<template>
  <div class="chip">
    <div v-if="avatar" class="chip__avatar">
      <img v-if="avatar.imgSrc" :src="avatar.imgSrc" alt="" class="chip__avatar-data"/>
      <div v-else class="chip__avatar-data chip__avatar-data--empty"></div>
    </div>
    <div class="chip__title">{{ title }}</div>
    <div v-if="close" class="chip__control chip__control--close">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'chip',
  props: [
    'title',
    'avatar',
    'close'
  ]
}
</script>

<style lang="sass">
  .chip
    display: inline-block
    height: 30px
    margin: 5px
    background: #f9f9f9
    border-radius: 20px
    box-shadow: 0 0 1px rgba(0,0,0,.25)
    transition: box-shadow 150ms ease-in-out
    overflow: hidden
    cursor: default
    &:hover
      // background-color: #f0f0f0
      // box-shadow: 0px 5px 20px rgba(0,0,0,.25)
    &__avatar
      float: left
      width:  30px
      height: 30px
      border-radius: 20px
      overflow: hidden
      &-data
        display: block
        width:  30px
        height: 30px
        &--empty
          width: 100%
          height: 100%
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDNjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zem0wIDE0LjJjLTIuNSAwLTQuNzEtMS4yOC02LTMuMjIuMDMtMS45OSA0LTMuMDggNi0zLjA4IDEuOTkgMCA1Ljk3IDEuMDkgNiAzLjA4LTEuMjkgMS45NC0zLjUgMy4yMi02IDMuMjJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==)
          background-repeat: no-repeat
          background-position: center
    &__title
      margin: 0 10px
      float: left
      font-size: 14px
      line-height: 30px
      color: #666666
    &__control
      float: left
      height: 20px
      width: 20px
      margin: 5px 5px 5px 0
      border-radius: 30px
      cursor: pointer
      &--close
        text-align: center
        font-size: 17px
        line-height: 22px
        color: #999999
        background-color: rgba(0,0,0,.05)
        &:hover
          background-color: rgba(0,0,0,.1)
</style>
