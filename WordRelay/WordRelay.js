const app = new Vue({
    el:'#root',
    data:{
        word:'가리비->',
        input:'',
        result:'',
    },
    methods:{
        setWord(e){
            e.preventDefault();
            // if(this.word[this.word.length-3]===this.input[0])
            if(this.word.charAt(this.word.length-3)===this.input.charAt(0)){
                this.word+=this.input+'->';
                this.input='';
            }else{
                this.input='';
            };
        }
    },
});

const str = '가나다';
const index = str.charAt(str.length-1);
// console.log(index);