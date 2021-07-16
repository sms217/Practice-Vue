Vue.component('hello',{
    props:['name'],
    template:'<p>{{message}}</p>',
    data:function(){
            return {message:'hello!, ' +this.name}
    }
});

Vue.component('add',{
    template:'<button @click="add">{{count}}</button>',
    data(){
        return {count:0}
    },
    methods:{
        add(){
            this.count+=1;
            this.$emit('event-add');
        }
    }
});

// Vue.component('post',{

// })

const app = new Vue({
    el:'#app',
    data:{
        totalCount:0,
    },
    methods:{
        updateTotal(){
            this.totalCount++;
        }
    }
});