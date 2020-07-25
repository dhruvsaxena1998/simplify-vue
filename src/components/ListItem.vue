<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-text="link.longUrl"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title v-text="link.shortUrl"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'"
          >chat_bubble</v-icon
        >
      </v-list-item-icon>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "listItem",
//   props: ["link"],
    data () {
        return {
            link: {
                longUrl: 'htladada',
                shortUrl: 'asa'
            }
        }
    }
};
</script>
