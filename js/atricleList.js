findElem.getId("moreBtn").addEventListener("click",function(e){
		var evnet = window.event || e,
			dom = event.target,
			herf = dom.getAttribute("page-href"),
			name = dom.textContent;
		SetPageContent({
			page:"page/atricleContent.html?ID="+123,
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
		
	event.preventDefault();//阻止默认事件
	})