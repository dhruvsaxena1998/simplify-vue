<template>
  <div class="list">
    <div class="list-item" v-for="link in getState" :key="link._id">
      <ListItem :link="link" />
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import constants from "../env";
export default {
  components: {
    ListItem,
  },
  computed: mapGetters(["getState"]),
  created: async function() {
    await axios
      .get(constants.api)
      .then((res) => {
        this.setState(res.data);
      })
      .catch(() => {});
  },
  methods: {
    ...mapActions(["setState"]),
    async copy(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  overflow: auto;
  max-height: 365px;
  &::-webkit-scrollbar {
    display: block;
    width: 5px;
    height: 5px;
    background: #ccc;
  }
  &::-webkit-scrollbar-thumb {
    background: #848484;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5b5b5b;
  }
}
</style>
