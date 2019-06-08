
$(function(){
    $("#head").load("pulic.html .tou");
    $("#footer").load("pulic.html .jio");

    function GetRequest() {  
        var url = location.search; //获取url中"?"符后的字串  
        var theRequest = new Object();  
        if (url.indexOf("?") != -1) {  
           var str = url.substr(1);  
           strs = str.split("&");  
           for(var i = 0; i < strs.length; i ++) {  
              theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
            //   theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
           }  
        }  
        return theRequest;  
    }  
    function getDates(){
        var lists = GetRequest();
        // var str="";
        //     str+=`<li>
        //     <a href="javascript:void(0);">
        //         <img src="${lists.imgSrc}">
        //     </a>
        //     <div class="shang">
        //         <a href="##">
        //                 ${lists.name}
        //         </a>
        //     </div>
        //     <span>${lists.price}</span>
        // </li>`;
        // $(".milk").html(str)
        $("#content").find("img").attr({'src':lists.imgSrc});
        $("#content .title_price").find("h3").html(lists.name);
        $("#content .title_price").find("p").html(lists.price);

    }

    function Fei(){
        var that=this;
		$("ul").children("li").click(function(){
			that.index=$(this).index();
			$(this).toggleClass("active").siblings().removeClass();
			$(".sbox").children("img").eq($(this).index()).css("display","block")
			.siblings().css("display","none");
			that.show();
		})
		this.hide();
	}
	Fei.prototype.show=function(){
				//console.log(this.index)
			var that=this;
		$(".sbox").on("mouseover",function(){
			$(this).children("span").css("display","block");
			$(".bbox").css("display","block")
			.children("img").eq(that.index).css("display","block")
			.siblings().css("display","none")
			//console.log(that.index)
			that.move()
		})
	}
		
	Fei.prototype.move=function(){
		$(".sbox").on("mousemove",function(){
			//console.log(event.offsetX)
			var t=event.pageY-$(this).offset().top-$(".sbox").children("span").height()/2;
			var l=event.pageX-$(this).offset().left-$(".sbox").children("span").width()/2;
			
			if(l<0) l=0;
			if(t<0) t=0;
			if(l>$(".sbox").width()-$(".sbox").children("span").width()){
				l=$(".sbox").width()-$(".sbox").children("span").width()
			}
			if(t>$(".sbox").height()-$(".sbox").children("span").height()){
				t=$(".sbox").height()-$(".sbox").children("span").height()
			}
			 $(".sbox").children("span").css("top",t)
			 $(".sbox").children("span").css("left",l)
			var x=l/($(".sbox").width()-$(".sbox").children("span").width());
			var y=t/($(".sbox").height()-$(".sbox").children("span").height());
			$(".bbox").children("img").css("top",y*-($(".bbox").children("img").height()-$(".bbox").height()))
			$(".bbox").children("img").css("left",x*-($(".bbox").children("img").width()-$(".bbox").width()))
			//console.log(x,y)
			// console.log($("")children("img").height())

		})

	}
	Fei.prototype.hide=function(){
		$(".sbox").on("mouseout",function(){
			$(".sbox").children("span").css("display","none");
			$(".bbox").css("display","none");
		})
	}
		new Fei();

    // console.log(22+GetRequest())
    getDates()

})