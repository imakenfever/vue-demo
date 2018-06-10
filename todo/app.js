var data = {
  items: [
    { text: 'buy the milk', checked: true },
    { text: 'read a book', checked: false }
  ],
  title: 'My Task List',
  newItem: '' // テキスト文字列
};

new Vue({
  el: '#app',
  data: data, // データオブジェクト
  methods: { // メソッド

    addItem: function () {
      var text;
      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = '';
      }
    },

    deleteItem: function (idx) {
      this.items.splice(idx, 1); // 古い要素を削除しつつ、新要素を追加
    }
  }
});