const app = new Vue({
    el : '#app',
    methods:{
        play(){
            var audio = new Audio();
            audio.src='./a/ab/addToCart.mp3';
            audio.volume=1;
            audio.play();
        }
    }
})