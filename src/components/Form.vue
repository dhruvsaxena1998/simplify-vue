<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="url" label="Long URL" required></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="simplify">
      Simplify
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    url: "",
  }),

  methods: {
    ...mapActions(["addLink"]),
    simplify() {
      this.addLink(this.url);
      this.$refs.form.reset();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
