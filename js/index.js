layui.use(['form','element','jquery','layer','laydate'],function(){
	var form=layui.form,
		element=layui.element,
		$=layui.jquery,
		layer=layui.layer,
		laydate=layui.laydate,
		imageList = [
			"in-xinjiang-3775970_1920.jpg",
			"mati-3354924_1920.jpg",
			"sea-2134885_1920.jpg",
			"sky-1625270_1920.jpg"
		],
		nowTime = function(){
			laydate.render({
			 	elem:'#showToday',
			 	show:true,   //是否显示，默认false
			 	trigger:'click',   //显示的形式，默认focus  如果绑定的元素是非输入框，需要变成click
			 	position:'static',
			 	calendar:true,
			 	theme:'#fff',
			 	btns: ["now"],	
			 	ready:function(){
			 		findElem.getId("showToday").children[0].classList+=" transparency";
			 	}
			 })
		},
		imagIndex = 0,
		changeBackgroundImg = setInterval(function(){
			var body = document.body;
			imagIndex++;
			if( imagIndex == imageList.length ){
				imagIndex = 0;
			}
//			body.style.backgroundImage = "url(img/"+imageList[imagIndex]+")";
		},3000)
		nowTime();
		getTime();//设置时间
	findElem.getId("articleList").addEventListener("click",function(e){
		var evnet = window.event || e,
			dom = event.target,
			herf = dom.parentElement.parentElement.getAttribute("page-href"),
			name = dom.textContent;
		SetPageContent({
			page:"page/atricleList.html?key="+name,
			elemId:"layoutContent",
			success:function(code){
				if( verify.isNullStr(code) ){
					layer.confirm("还没有开放...",function(){
						layer.closeAll();
						return;
					})
				}
				layer.closeAll();
				document.body.appendChild(scriptOperation.creatScript( herf ));
//				var imgDom = document.querySelectorAll("img"),
//					newSrc = "";
//				for( var i = 0; i < imgDom.length; i++ ){
//					if( imgDom[i].getAttribute("src").indexOf("../") != -1 ){
//						newSrc = imgDom[i].getAttribute("src").replace("../","");
//						imgDom[i].setAttribute("src",newSrc);
//					}
//				}
			}
		})
		
	event.stopPropagation();//阻止默认事件
	})
		
	findElem.getId("yes").onclick=function(){
		if( verify.isNullStr(findElem.getId("inputContent").value) )
		{
			layer.msg("要记得填写信息！");
			 return;
		}else{
			layer.open({
				type:2,
				title:"选择记录类别",
				content:"page/recordType.html",
				area:["70%","80%"]
			})
		}
	}
	
	

 $("#clear").click(function(){
 	  layer.open({
 	  	title:'提示',
 	  	content:'你确定要清除内容吗？',
 	  	yes:function(){
			document.getElementById("inputContent").value = "";
 	  		layer.msg("清空成功");
 	  	}
 	  })
 })
 
 
 //绑定日历

		

//得到时间
function getTime(){
	var timeSet = function(){
			var oDate=new Date();
		var	year=oDate.getFullYear(),
			month=oDate.getMonth(),
			day=oDate.getDate(),	
			hour=oDate.getHours(),
			minute=oDate.getMinutes(),
			second=oDate.getSeconds();
			if(minute<10)
			{
				minute="0"+minute;
			}
			if(hour<12)
			{
				hour='上午'+hour;
			}
			if(hour == 12){
				hour='中午'+hour;
			}
			else if(hour<18)
			{
				hour='下午'+hour;
			}
			else if(hour>18)
			{
				hour='晚上'+hour;
			}
			$(".timeShow p").text("现在是"+hour+'：'+minute+'分');
	};
	timeSet();
	setInterval(function(){
	timeSet();	
	},60000)
}
	
})
