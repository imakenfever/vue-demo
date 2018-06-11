new Vue({
  el: '#app',
  data: {
    input: "# title"
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: function (e) {
      this.input = e.target.value
    }
  }
})
