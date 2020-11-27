var $,layer;
layui.use(["jquery","layer"],function(){
		$ = layui.jquery;
		layer = layui.layer;
document.onscroll=function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop,
			oTop = document.querySelectorAll(".top"),
			top_left = document.querySelectorAll(".top-left a");
			top_right = document.querySelectorAll(".top-right a");
		
		if( top>80 ){
			oTop[0].style.position = "fixed";
			oTop[0].style.backgroundColor = "rgba(255,255,255,0.9)";	
			for( var i = 0; i<top_left.length; i++ ){
				top_left[i].style.color = "#000";
			}
			for( var i = 0; i<top_right.length; i++ ){
				top_right[i].style.color = "#000";
			}
			
		}else if( top == 0 ){
			oTop[0].removeAttribute("style");
			for( var i = 0; i<top_left.length; i++ ){
				top_left[i].style.color = "#fff";
			}
			for( var i = 0; i<top_right.length; i++ ){
				top_right[i].style.color = "#fff";
			}
			$(".more-list a").css("color","#000");
		}
	}
	$(".top-right li").mouseover(function(){
			$(this).find("span").css("width","100%");
		})
	$(".top-right li").mouseout(function(){
		$(this).find("span").css("width","0%");
	})
	
	$(".more label").click(function(){
		$(".more-list").toggle(200);
	})
	
	$(".more-list").click(function(){
		$(this).hide(100)
	})
	
})
var findElem={
	//传入类名查找类
	getClass:function(classStr){
		var oClass=document.getElementsByClassName(classStr);
		return oClass;
	},
	//传入ID名查找ID
	getId:function(idStr)
	{
		var oId=document.getElementById(idStr);	
	    return oId;
	},
	//传入需要查找子元素的目标元素，可以是ID，也可以是类名
	getChild:function(oStr)
	{
		idOrClass(oStr);
		//判断成功是类名还是ID名来获取一个初始Dom:elemStr，通过该元素来查找子元素
	    return idOrClass(oStr).children;
	},
	//传入元素查找兄弟元素
	getBrother:function(oStr)
	{
		idOrClass(oStr);
	},
	getSelectText:function(oStr){
		var oSelect=document.getElementById(oStr).selectedIndex,	
			selectText=document.getElementById(oStr).options[oSelect].textContent;
		return selectText;	
			
	},
	setSelet:function( oStr,selectVal ){
		var oSelect=document.getElementById(oStr);
			for(var i = 0; i<oSelect.options.length; i++)
			{
				if(oSelect.options[i].value == selectVal || oSelect.options[i].textContent == selectVal)
				{
					oSelect.options[i].selected=true;
					break;
				}
			}
	},
	toggle:function(elemIdOrElemClass,className){
		var oElem = document.getElementById(elemIdOrElemClass) || document.getElementsByClassName(elemIdOrElemClass);
		for( var i = 0; i<oElem.length; i++ ){
			var classList = oElem.className.split(" ")
			console.log(classList);
		}
		
	},
	//传入select的id来判断是否选择了值
	notSelectVal:function(str)
	{
		var oSelect=document.getElementById(str);
		if(oSelect.value == 0 || oSelect.value == "")
		{
			return true;
		}else
		{
			return false;
		}
		
	},
	getSelectVal:function(str) //获取下拉框选择的值
	{
		var oSelect=document.getElementById(str);
		return oSelect.value;
	},
	getSelectText:function(str){
		var oSelect=document.getElementById(str),
			selectText=oSelect.options[oSelect.selectedIndex].textContent;
		return 	selectText;
	}
}
//各种信息的验证
var verify={
	//电话
	phone:function(phonStr)
	{
		var phone = /^1(3|4|5|7|8)\d{9}$/; 
			return phone.test(phonStr);
	},
//	notNumber:function()
//	{
//		var number=
//	},
	//身份证
	idCard:function(idCardStr)
	{
		    var IdCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
			return IdCard.test(idCardStr);

	},
	isNullStr:function(valStr)
	{
		if(valStr =="" || valStr == undefined  || valStr == null)
		{
			return true;
		}
		else {
			return false;
		}
	}
	
}


/*localStorage的相关操作*/
var localData={
	localStorage:window.localStorage,//设置localStorage对象来用作一下操作的使用
	//设置本地存储
	setData:function(dataName,data){
		localData.localStorage.setItem(dataName,JSON.stringify(data));
	},
	//获取本地储存信息
	getData:function(dataName){
		return JSON.parse(localData.localStorage.getItem(dataName));//返回一个json对象
	},
	removeData:function(dataName){
		localData.localStorage.removeItem(dataName);
	},
	clearData:function(dataName){
		localData.localStorage.setItem(dataName,null)
	}
}


//查询url传参值,使用方法.getUrlVal(.location.search).传值的值名称，例如getUrlVal(url).type即可
function getUrlVal()
{
	var queryStr=(location.search.length>0? location.search.substring(1) : "" ),
	//将查询语句分割开存放在一个数组里面
	queryStr=queryStr.split("&"),
	//存放查询数组的索引值的临时容器
	strVal,
	//将每个索引值都存放在这个数组里面方便取用
	strVals=[],
	//保存在对象中的键对名称
	name=null,
	//保存在对象中的键对名称的值
	val=null,
	//将值以对象的方式保存起来作为最终值来使用
	vals={};
	for(var i =0; i<queryStr.length; i++)
	{
		 strVals=queryStr[i].split("=");
		 name=strVals[0];
		 val=strVals[1];
		 
//		 alert("值的名字是："+name+"值是："+val);
		 vals[name]=val; 
	}
	return vals;	
}


	
	
var scriptOperation = {
	creatScript:function( scriptSrc ){
		var creaScript = document.createElement("script");
			creaScript.src = "js/"+scriptSrc+".js";
			return creaScript;
	},
	removeScript:function( scriptSrc ){
		var scriptDom = document.querySelectorAll("script");
		for( var i = 0; i<scriptDom.length; i++ ){
			if( scriptDom[i].getAttribute("src").indexOf(scriptSrc) != -1 ){
				scriptDom[i].parentElement.removeChild( scriptDom[i] );
				break;
			}
		}
	}
}

var cssOperation = {
	creatCss:function( cssHref ){
		var cssDom = document.createElement("link");
			cssDom.rel = "stylesheet";
			cssDom.href = cssHref;
		document.head.appendChild(cssDom);	
	},
	removeCss:function( cssHref ){
		var cssDom = document.getElementsByTagName("link");
		for( var i = 0; i<cssDom.length; i++ ){
			if( cssDom[i].getAttribute("href").indexOf(cssHref) != -1 ){
				cssDom[i].parentElement.removeChild( cssDom[i] );
				break;
			}
		}
	}
}

function SetPageContent(obj){
	var theObj = obj || {},
		xhr = window.XMLHttpRequest ? new XMLHttpRequest : ActiveXObject("mirosoft.XMLHTTP");
		theObj.success = obj.success || new Function;
		theObj.error = obj.error || new Function;
		xhr.open("get",theObj.page);
		xhr.send();
		xhr.onreadystatechange = function(){
			if( xhr.readyState == 4 || xhr.readyState == 200 ){

				var code = xhr.responseText,
					thisCode = code.replace(/<!--thisContent-->/g,"**") ;
					thisCode = thisCode.substring( thisCode.indexOf("**")+2);
					thisCode = thisCode.substring(0, thisCode.indexOf("**"));
					opacity = 1,  //变换内容区域透明度初始值
					indexShade = findElem.getClass("index-shade")[0],
					indexShadeValue = findElem.getClass("index-shade")[0].style.opacity;
				//开始隐藏区域
				var hide = setInterval(function(){
					var elem = findElem.getId(theObj.elemId);
					opacity = (opacity-0.1).toFixed(1);	//循环减少区域透明度的值
					elem.style.opacity = opacity; //给区域设定值
					indexShadeValue = (indexShadeValue / 10).toFixed(2);
					indexShade.style.opacity = indexShadeValue ;
					
					
					if( opacity == 0  &&  Math.floor(indexShadeValue) == 0){
						/*
						 * 由于JS浮点数的原因，每次减少0.1可能出现误差，因此直接判断小于0
						 * 并在小于0之后直接赋值透明度为0，此刻区域隐藏
						 */
						opacity = 0;
						indexShadeValue = 0;
						clearInterval(hide);//清除隐藏计数器
						
						var show = setInterval(function(){
							findElem.getId(theObj.elemId).innerHTML = thisCode;
							opacity += 0.1;
							indexShadeValue = Number(indexShadeValue) + 0.06;
							indexShade.style.opacity = indexShadeValue;
							elem.style.opacity = opacity;
							if( opacity > 0.9 && indexShadeValue > 0.5 ){
								elem.style.opacity = 1;
								indexShade.style.opacity  = 0.5;
								theObj.success(code);
								clearInterval(show);
							}
						},30);
					}
				},30);
			}
		}
}
var HTMLCODE = document.getElementById("layoutContent").innerHTML,
	REMOVESCRIPT = "";//需要移除的script标签
document.querySelectorAll("nav")[0].addEventListener("click",function(e){
		var event = e || window.event,
			dom = event.target;
			
		if( dom.hasAttribute("page-href") ){
			
			var	index= layer.load(1);
			scriptOperation.removeScript( REMOVESCRIPT );//移除当前页面脚本
			REMOVESCRIPT = dom.getAttribute("page-href");
			
			var pageUrl = "";
			REMOVESCRIPT == "index" ? pageUrl = "index.html":
			pageUrl = "page/"+dom.getAttribute("page-href")+".html";
			
			if( REMOVESCRIPT == "spaceIntroduction" ){
				layer.closeAll();
				layer.msg("暂未开放");
				return;
			}
			
			SetPageContent({
				page:pageUrl,
				elemId:"layoutContent",
				success:function(code){
					if( verify.isNullStr(code) ){
						layer.confirm("还没有开放...",function(){
							layer.closeAll();
							return;
						})
					}
					layer.closeAll();
					document.body.appendChild(scriptOperation.creatScript( dom.getAttribute("page-href" )));
					
				}
			})
		}	
})
