<script>
  import AudioPlayer from './audio-player.vue'

  export default {
    components: {
      AudioPlayer
    },

    data () {
      return {
        audioSources: [
          "docs/.vuepress/public/wonderwall.mp3"
        ]
      }
    }
  }
</script>

<template>
  <div>
    <audio-player :sources="audioSources" :loop="true"></audio-player>
  </div>
</template>