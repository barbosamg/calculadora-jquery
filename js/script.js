$(function(){
	
	var v1, v2, op;

	$("input[name=btn]").click(function(){
		$("#resultado").val($("#resultado").val() + $(this).val());
	});

	$("input[name=ce]").click(function(){
		$("#resultado").val('');
		$("#op").val(' ');
	});

	$("input[name=soma]").click(function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "soma";
			$("#op").text($(this).val());
		}else{
			alert("Insira um valor para fazer o calculo!")
		}
	});

	$("input[name=menos]").click(function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "sub";
			$("#op").text($(this).val());
		}else{
			alert("Insira um valor para fazer o calculo!")
		}
	});

	$("input[name=mult]").click(function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "mult";
			$("#op").text($(this).val());
		}else{
			alert("Insira um valor para fazer o calculo!")
		}
	});

	$("input[name=divisao]").click(function(){
		if($("#resultado").val() != ''){
			v1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "divisao";
			$("#op").text($(this).val());
		}else{
			alert("Insira um valor para fazer o calculo!")
		}
	});

	$("input[name=igual]").click(function(){
		if($("#resultado").val() != ''){
			v2 = parseFloat($("#resultado").val());
			if(op == "soma"){
				$("#resultado").val(v1 + v2);
			}
			else if(op == "sub"){
				$("#resultado").val(v1 - v2);
			}
			else if(op == "mult"){
				$("#resultado").val(v1 * v2);
			}
			else if(op == "divisao"){
				$("#resultado").val(v1 / v2);
			}
		}else{
			alert("Insira um valor para efetuar o calculo");
		}
	});

	$("input[name=c]").click(function(){
		var len = $("#resultado").val().length;
		var valor = $("#resultado").val();
		valor = valor.replace(valor.charAt(len - 1), "");
		$("#resultado").val(valor);
	});

});