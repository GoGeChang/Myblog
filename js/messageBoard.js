findElem.getId("messageContent").oninput=function(){
	
	var needTransparency = this.parentElement.parentElement;
	if( !verify.isNullStr(this.value) ){
		if( needTransparency.className.indexOf("transparency") == -1 ){
			needTransparency.className += " transparency";
		}
	}else{
		needTransparency.className = needTransparency.className.replace("transparency","");
	}
}


