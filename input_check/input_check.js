/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Vueインスタンス作成
// - el
// - data
// - methods
var vue = new Vue({
    el:'#app',
    data:{ // データオブジェクト
        test1:'',
        test2:'',
        test3:'',
        test4:''
    },
    methods:{
        opt:function(e){
            var re = new RegExp(e.target.pattern);
            var result = re.exec(e.target.value);
            return (result)?result[0]:'';
        }
    }
})

