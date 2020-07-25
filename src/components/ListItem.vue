<template>
<v-card
    class="mx-auto my-2"
    color="#f4f5f4"
  >
    <v-list-item>
      <v-list-item-content two-line>
        <v-list-item-title>{{ link.longUrl }}</v-list-item-title>
        <span class="overline">#{{ link.shortUrl }}</span>
      </v-list-item-content>
      <v-list-item-icon>
          <v-btn color="success" value="COPY" @click="copy"> Copy </v-btn>
        </v-list-item-icon>
    </v-list-item>
    <v-sheet v-if="sheet" color="success px-4" class="anim" dark>URL has been copied to your clipboard</v-sheet>
  </v-card>
</template>

<script>
import constants from '../env'
export default {
  name: "listItem",
  props: ["link"],
  data () {
    return {
      sheet: false
    }
  },
  methods: {
    copy () {
      const url = constants.server + this.link.shortUrl
      window.navigator.clipboard.writeText(url)
      console.log(url)
      this.sheet = true
      setTimeout(() => {
        this.sheet = false
      }, 2500)
    }
  }
};
</script>
<style lang="scss" scoped>
.anim {
  transition: .3s;

}
</style>
