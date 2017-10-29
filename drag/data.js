/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Vue.component('select-item', {
  props: ['url', 'index', 'drop_method'],
  template: '<img v-bind:src="url" @dragover.prevent @drop="drop_method(index)" width="100px" height="100px"/>'
})

Vue.component('image-item', {
  props: ['url', 'dragstart_method'],
  template: '<img v-bind:src="url" draggable="true" @dragstart="dragstart_method(url)" width="100px" height="100px"/>'
})

new Vue({
  el: '#root',
  components: ['image-item', 'select-item'],
  data: {
    url_list: [
      'https://jp.vuejs.org/images/logo.png',
      'http://2.bp.blogspot.com/-h_6vJqWz5KE/VaMNnYX1izI/AAAAAAAAvag/LfS62MKrhKE/s800/man_58.png',
      'http://3.bp.blogspot.com/-0SY0brETIYs/VaMNiZlDbUI/AAAAAAAAvZQ/hrfERj3OB4A/s800/man_49.png',
      'http://4.bp.blogspot.com/-JW9IHh4fQ_g/VaMN9C_Zs7I/AAAAAAAAvgY/91QhSXR-HGc/s800/youngman_36.png',
      'https://qiita-image-store.s3.amazonaws.com/0/48596/profile-images/1473691406'
    ],
    selected_url_list: ['', '', ''],
    dragging_url: ''
  },
  methods: {
    dragstart_method: function(url) {
      this.dragging_url = url;
    },
    drop_method: function(index) {
      var copy = [].concat(this.selected_url_list);
      copy[index] = this.dragging_url;
      this.selected_url_list = copy;
      this.dragging_url = '';
    }
  }
})