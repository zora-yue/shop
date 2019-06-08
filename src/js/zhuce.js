(function(){
    $(function(){
        $("#head").load("pulic.html .tou");
        $("#footer").load("pulic.html .jio")
    })
// $("document").ready(function(){

// })

class Register{
    constructor(){
        this.user=document.querySelector(".user");
        this.pass1=document.querySelector(".pass1");
        this.pass2=document.querySelector(".pass2");
        this.yan=document.querySelector(".yan");
        this.fire=document.querySelector(".fire");
        this.btn=document.querySelector(".btn");
        this.msg=document.querySelector(".msg");
        this.yi=document.querySelector(".yi");
        this.er=document.querySelector(".er");
        this.san=document.querySelector(".san");
        this.blur();
    }
    blur(){ 
           var that=this;
        this.user.onblur=function(){
            var reg=/^1[3-9]\d{9}$/;
            if(!reg.test(that.user.value)){
                this.nextElementSibling.innerHTML="请输入正确的11位手机号码";
                return;
            }
        }

        this.pass1.onblur=function(){
            var lengthReg=/^.{4,20}$/;
            if(!lengthReg.test(that.pass1.value)){
                this.nextElementSibling.innerHTML="确认密码长度为4-20个字符"
            }
            var a =0;var b=0;var c=0;
            var numReg=/\d/;
            if(numReg.test(that.pass1.value)){
                a=1;
            }
            var azReg=/[a-zA-Z]/;
            if(azReg.test(that.pass1.value)){
                b=1;
            }
            var tsReg=/\W_/;
            if(tsReg.test(that.pass1.value)){
                c=1;
            }
            if(a+b+c==1){
                that.yi.style.background="red";
            }
            if(a+b+c==2){
                that.er.style.background="yellow";
            }
            if(a+b+c==3){
                that.san.style.background="green";
            }
            if(that.pass2.value!=""&&that.pass2.value!=that.pass1.value){
                that.pass2.nextElementSibling.innerHTML="密码输入不一致，请重新确认";
            }
        }

        this.pass2.onblur=function(){
            if(that.pass2.value!=that.pass1.value){
                this.nextElementSibling.innerHTML="密码输入不一致，请重新确认";
            }
        }

        this.init();
    }
    init(){
        var that=this;
        this.btn.onclick=function(){
            //先获取指定的localstroage，用来判断是不是第一次注册，如果是第一次直接注册，不是判断是否重名
           that.getUserMsg();
        } 
    }
    getUserMsg(){
        this.usermsg=localStorage.getItem("usermsg");
        console.log(this.usermsg);
        this.setUserMsg()
    }
    setUserMsg(){
        //localStorage中的数据格式位：[{user:"admin",pass:"123",onoff:0},{user:"admin",pass:"123",onoff:0}]
        if(this.usermsg==null){
            this.usermsg=[{
                user:this.user.value,
                pass:this.pass1.value,
                onoff:0
            }]
        }else{
            this.usermsg=JSON.parse(localStorage.getItem("usermsg"));
            for(var i=0;i<this.usermsg.length;i++){
                if(this.usermsg[i].user==this.user.value){
                    this.nextElementSibling.innerHTML="重名"
                    return;
                }
            }
        }
    }
}


new Register()




})()