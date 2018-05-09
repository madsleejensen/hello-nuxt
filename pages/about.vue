<template>
  <div>
    <h1>About {{ $store.state.counter }} {{ hello }}</h1>
    <a @click="doIncrement">add</a>
  </div>
</template>

<script>

export default {
  name: 'about-page',
  asyncData(context) {
    return {
      count: 123,
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