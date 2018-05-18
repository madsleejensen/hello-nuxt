<template>
  <div>
    <h1>About {{ $store.state.counter }} {{ hello }} {{ data }}</h1>
    <a @click="doIncrement">add</a>
  </div>
</template>

<script>

export default {
  name: 'about-page',
  asyncData(context) {
    return new Promise((resolve) => {
      console.log(123);

      setTimeout(function() {
        resolve({
          data: "Mads",
        })
      }, 2000)
    });
  },
  head() {
    return {
      title: 'What is this about???'
    }
  },
  computed: {
    hello() {
      console.log(this.$store);
      return 33;
    }
  },
  methods: {
    doIncrement() {
      this.$store.commit('increment');
    }
  }
}

</script>