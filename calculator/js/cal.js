$(document).ready(function(){
	var text_input = "";
	var result;
	$(".cal .show").click(function(){
		//先获取每个按钮的值
		var text = $(this).attr("value");
		//每次点击需要将按钮的值加入到input输入框,并根据按钮的值做出不同应对
		if(Object.is(text,"=")){
			result = eval(text_input);
			$(".input input").val(result);
			text_input = "";
		}else if(Object.is(text,"ce")){
			text_input = text_input.slice(0,-1);
			$(".input input").val(text_input);
		}else if(Object.is(text,"ae")){
			text_input = "";
			$(".input input").val(text_input);
		}else{
			text_input += text;
			$(".input input").val(text_input);
		}
	});
});
