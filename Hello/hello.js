const app = new Vue({
    el :'#root',
    data:{
        message:'Hello',
        name:'나나',
        clicked:false,
        address:'https://www.naver.com',
        age:'',
        todos:[
            {text:'JavaScript'},
            {text:'Vue'},
            {text:'PHP'},
            {text:'HTML'},
            {text:'CSS'},
            {text:'NodeJS'}
        ],
        user:{
            userId:'user123',
            name:'Jane Vue',
            email:'user123@email.com'
        },
        counter:0,
        message2: 'Select a user',
        users:[{name:'User'},{name:'Admin'}],
        comment:'',
        value:false,
        values:[],
        lazyValue:'',
        input:'',
        user_id:'gaga',
        user_grade:'sophomore'
    },
    methods: {
        onClicked(){
            this.clicked=true;
        },
        goNaver(){
            location.href='https://www.naver.com';
        },
        addCount(){
            this.counter+=1;
        },
        sayHi(name){
            this.message2='Hi, '+name;
        }
    },
    computed:{
        user_info(){
            return this.user_id+" = {"+this.user_grade+"}";
        },
        checkAge(){
            if(this.age!='' && this.age>0){
                if(this.age>=20){
                    return 'adult';
                }else if(this.age<20&&this.age>13){
                    return 'teenager';
                }else return 'kids';
            }
        }
    }
});