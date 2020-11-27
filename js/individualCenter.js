layui.use(["layer","form","element"],function(){
	var layer = layui.layer,
		form = layui.form,
		element = layui.element;
		
	findElem.getId("individualCenterNav").onclick=function(e){
		var thisDom = e.target,
			keyName = thisDom.getAttribute("page-herf");
			if( !verify.isNullStr(keyName)){
				SetPageContent({
					page:"page/photoAlbum.html?key="+keyName,
					elemId:"layoutContent",
					success:function(code){
						if( verify.isNullStr(code) ){
							layer.confirm("还没有开放...",function(){
								layer.closeAll();
								return;
							})
						}
						layer.closeAll();
						document.body.appendChild(scriptOperation.creatScript( keyName ));
					}
				})
					
				e.stopPropagation();
			}
		
	}
	
})
