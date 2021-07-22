const app = new Vue({
    el : '#app',
    methods:{
        play(){
            var audio = new Audio();
            audio.src='./addToCart.mp3';
            audio.volume=1;
            audio.play();
        }
    }
})
