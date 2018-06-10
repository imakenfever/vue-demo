// テンプレートにv-bind（:）でclassを定義
// targetKeyに自身のindexが存在すればtargetというclassを付与
// ■をクリックした時のイベントを定義、■をclickしたらpochi()を実行
// ■のデザインを中身が0か1の時で変わるようにする
// - ■自身のvalueが0か1かでonかoffというclassが付与
var temp
= '<div v-if="setFlg">'
+ '    <div class="lightout" v-if="!goal">'
+ '        <div v-for="(val, index) in boxes" class="box" @click="pochi()" :class="[val == 1 ? \'on\' : \'off\', targetKey.indexOf(index) > -1 ? \'target\' : \'\']" @mouseover="search(index)" @mouseout="out()"></div>'
+ '    </div>'
+ '    <div v-else class="clear">Clear!</div>'
+ '</div>';

// lightout コンポーネントの定義
// - template
// - data
// - methods
// - computed
// - created
Vue.component('lightout', {
    template: temp,
    data: function(){
        return {
            setFlg: false,
            // 選択している■のindexが入る
            targetKey: [],
            // lightsoutの■はbool管理で制御、0を持つ■が25個出来た
            boxes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
    },
    methods: {
        // mouseout、targetKeyをリセット
        out: function(){
            this.targetKey = [];
        },
        // mouseover、選択している■と上下左右の■のindexがtargetKeyに代入される
        search: function(index){
            this.targetKey.push(index); //自身
            if(index > 4){
                this.targetKey.push(index - 5); //上
            }
            if(index < 20){
                this.targetKey.push(index + 5); //下
            }
            if(index % 5 != 4){
                this.targetKey.push(index + 1); //右
            }
            if(index % 5 != 0){
                this.targetKey.push(index - 1); //左
            }
        },
        // targetKeyに入っている各indexをtoggle()に渡す
        pochi: function(){
            this.targetKey.forEach(function(index){
            		this.toggle(index);
        		}, this);
        },
        // toggle()はboxes[index]のvalueを見て0と1を反転させる
        // Vue.set(this.boxes, index, !this.boxes[index]); で反転させたかったが、0を!で反転させると1じゃなくてtrueになるので、面倒
        toggle: function(index){
            if(this.boxes[index] === 0){
                Vue.set(this.boxes, index, 1);
            }else{
                Vue.set(this.boxes, index, 0);
            }
        },
        // minとmaxを渡すとその間の整数をランダムで返す関数
        rand: function(min, max){
            var num = Math.floor(Math.random() * (max + 1 - min)) + min;
            return num;
        }
    },
    // クリア判定に使用
    computed: {
        // boxesの中に1がひとつもなくなればgoalがtrue
        // 全部の■の中身が0になればクリア
        goal: function(){
            if(this.setFlg){
                if(this.boxes.indexOf(1) < 0){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    },
    // ゲーム開始時は全部0にしておき開始した瞬間に自動的にランダムでポチポチ
    // createdというvue.jsのライフサイクルを利用したメソッドを使用
    // コンポーネントが作られた時に発火するライフサイクルフック
    created: function(){
        var imax = this.rand(10, 15);
        for(var i = 0; i < imax; i++){
            var r = this.rand(0, 24);
            this.search(r);
            this.pochi();
            this.out();
        }
        this.setFlg = true;
    }
});

// Vueインスタンス作成
var vue = new Vue({
    el: '#js-vue'
});
