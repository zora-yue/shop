(function(){
    class Login{
        constructor(){
            this.user=document.querySelector(".user");
            this.pass=document.querySelector(".pass");
            this.btn=document.querySelector(".btn");
            this.msg=document.querySelector(".msg");
            this.init();
        }
        init(){
            var that=this;
            this.btn.onclick=function(){
                that.getUserMsg()
            }
        }
        getUserMsg(){
            this.usermsg=localStorage.getItem("usermsg")?JSON.parse(localStorage.getItem("usermsg")):[];
            
            
        }
}
})()
