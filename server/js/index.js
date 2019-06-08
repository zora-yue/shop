(function(){
            this.oc=document.getElementsByClassName("city");
            this.od=document.getElementsByClassName("dizhi");
            this.omy=document.getElementsByClassName("xia1");
            this.owei=document.getElementsByClassName("xia2");
            $(".banner5").banner({
                    items:$(".banner5").children("a"),
                    list:true,
                    autoPlay:true,
                    delayTime:3000,
                    moveTime:200,
                    index:0,
                })
                $(".banner4").banner({
                    items:$(".banner4").find("li"),
                    left:$(".banner4").children(".left"),
                    right:$(".banner4").children(".right"),
                    autoPlay:true,
                    delayTime:3000,
                    moveTime:200,
                    index:0,
                    list:false
                })
    
    
    
  
    $(".xia1").hover(function(){
        $(this).children("dt").css({backgroundColor:"#fff"})
        .siblings().css("display","block")
    },function(){
        $(this).children("dd").css("display","none").siblings().css({backgroundColor:"#f6f6f6"})
    })
    
    
    $("#btn").click(function(){
        $.ajax({
            url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
            data:{wd:"$('.cha').value"},
            success:function(){
            },
            dataType:"jsonp",
            jsonp:"cb"
        })
    })
    $.ajax({
        url:"http://localhost:8383/data/shouye.json",
        success:function(res){
            var str="";
            for(i=0;i<6;i++){
                var nameIndex= escape(res[i].name);
                str+=`<li>
                <a href="./detail.html?imgSrc=${res[i].src}&name=`+nameIndex+`&price=${res[i].price}">
                    <img src="${res[i].src}">
                </a>
                <div class="shang">
                    <a href="##">
                            ${res[i].name}
                    </a>
                </div>
                <span>${res[i].price}</span>
            </li>`;
            }
           $(".milk").html(str)
           var str2="";
           for(i=0;i<3;i++){
               str2+=`<li><div class="box2">
               <a href="##">
                   <img src="${res[i].src}">
               </a>
               <div class="shang">
                   <a href="##">
                           ${res[i].name}
                   </a>
               </div>
               <span>${res[i].price}</span>
           </div></li>`
           }
           $("#banner4").find("ul").html(str2)
        }
    })
    
    
    
    $("document").ready(function(){
       setInterval(function(){xunhuan()},3000);
       function xunhuan(){
        $(".dong").animate({
            left:-65
        },1000).animate({
            top:-80
        },1000).animate({
            left:-10
        }).animate({
            top:0
        },1000).animate({
            width:90,
            height:90,
            left:-10,
            top:-17
        },1000).animate({
            width:160,
            height:160,
        },1000)
       }
       $(".banner1").banner({
        items:$(".banner1").children(".imgbox"),
        left:true,
        right:true,
        list:true,
        autoPlay:true,
        delayTime:3000,
        moveTime:200,
        index:0
    })
    })
})()


