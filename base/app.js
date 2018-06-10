var data = {
  cnt: 0,
  newTodo: "",
  todos: ["bu car"],
  text: '',
  testVal: 'Hello World!',
  msg: 'AAAA',
  searchQuery: '',
  list: [
    {
      id: "AAA",
      description: "AAA",
    },
    {
      id: "BBB",
      description: "BBB",
    }
  ],
  animals: [
    { id: 0, name: 'Dog' },
    { id: 1, name: 'Cat' },
    { id: 2, name: 'Horse' }
  ],
  columns: {
    id: 'ID',
    subject: '件数',
    category: 'カテゴリ',
    date: '日付'
  },
  tasks: [
    {
      id: 1,
      subject: 'タスク1',
      category: 'カテゴリー1',
      date: '2016-12-01'
    },
    {
      id: 2,
      subject: 'タスク2',
      category: 'カテゴリー2',
      date: '2016-12-02'
    },
    {
      id: 3,
      subject: 'タスク3',
      category: 'カテゴリー3',
      date: '2016-12-03'
    }
  ],
  imageSrc: 'assets/logo.png'
};

Vue.component('my-apple', {
  template: '<li>This is a Apple</li>'
});

Vue.component('my-animals', {
  props: ['receive'],
  template: '<li>{{ receive.name }}</li>'
});

const app = new Vue({
  el: '#app',
  data: data, // データオブジェクト
  methods: { // メソッド
    printSample: function () {
      console.log('----- methods -----')
      this.text = "reset";
    },
    change() {
      this.msg = "Changed";
    },
    toggle() {
      this.$emit('input', !this.value);
    },
    reverseMsg: function () {
      this.msg = this.msg.split('').reverse().join('');
    },
    counter: function (event) {
      if (this.cnt < 10) {
        this.cnt += 1
      } else {
        this.cnt = 0
      }
    },
    addTodo: function () {
      if (this.newTodo == "") return;
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    deleteTodo: function (todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
    }
  },
  created() {
    console.log('----- created -----')
  },
  mounted() {
    console.log('----- mounted -----')
    // axios
    //   .get('./data/data.json')
    //   .then(response => (this.info = response))
  },
  computed: {
    filteredView() {
      console.log('----- computed -----')
      return this.list.filter(l => {
        return this.searchQuery.toLowerCase()
          .split(/\s+/)
          .map(q => l.id.toLowerCase().indexOf(q) > -1 || l.description.toLowerCase().indexOf(q) > -1) // 検索
          .every(result => result === true) // 全ての検索語にマッチしたものを取り出す
      })
    }
  },
});