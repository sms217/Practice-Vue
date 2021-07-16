const app = new Vue({
    el:'#root',
    data :{
        first:Math.ceil((Math.random()*20)),
        second:Math.ceil((Math.random()*20)),
        value:'',
        result:'',
        count:'',
    },
    methods:{
        onSubmitForm(e){
            e.preventDefault(); //자동 새로고침을 막는다
            if(this.first*this.second===parseInt(this.value)){
                this.result='정답';
                this.first=Math.ceil((Math.random()*20));
                this.second=Math.ceil((Math.random()*20));
                this.value='';
                this.count++;
                this.$refs.answer.focus();
            }else {
                this.result='오답';
                this.count=0;
                this.value='';
            }
        }
    }
});