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
    }
});