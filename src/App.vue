<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="text-h4">Simplify</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/dhruvsaxena1998/simplify-vue"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="ma-10">
        <Form />
        <Links />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Form from "./components/Form";
import Links from "./components/Links";
export default {
  name: "App",

  components: {
    Form,
    Links,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
