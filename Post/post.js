const app = new Vue({
   el:'#root',
   data:{
       writer:'',
       content:'',
       posts:[],
   },
   methods:{
            save(){
                const post = {
                    writer:this.writer,
                    content:this.content
                }
                this.posts.unshift(post);
                this.writer='';
                this.content='';
                this.$refs.focus.focus();
            }
   }
});