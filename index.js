var brandArr = [["苹果","三星"],["苹果","三星"]];
var modelArr = [["6","6 Plus","6S","6S Plus"],["S7","S7+","S8","S8+"]];
var colorArr = [["金","银","粉","黑"],["黑","银"]];
window.onload = function(){
	
	var typeNode = document.getElementById('dev-type');
	var brandNode  =  document.getElementById('dev-brand');
	var modelNode  =  document.getElementById('dev-model');
	var colorNode  =  document.getElementById('dev-color');
	var damageNode  =  document.getElementById('dev-damage');
	
	typeNode.onchange = function(){
		brandNode.options.length = 0;
		modelNode.options.length = 0;
		colorNode.options.length = 0;
		if(typeNode.options[0].value == "") typeNode.remove(0);
		brandNode.options.add(new Option("请选择品牌",""));
		modelNode.options.add(new Option("请选择型号",""));
		colorNode.options.add(new Option("请选择颜色",""));
		var index = typeNode.options[typeNode.selectedIndex].value;
		for(var i=0;i<brandArr[index].length;++i)
		{
			brandNode.options.add(new Option(brandArr[index][i], i.toString()));
		}
	}
	
	brandNode.onchange = function(){
		modelNode.options.length = 0;
		colorNode.options.length = 0;
		if(brandNode.options[0].value == "") brandNode.remove(0);
		modelNode.options.add(new Option("请选择型号",""));
		colorNode.options.add(new Option("请选择颜色",""));
		var index = brandNode.options[brandNode.selectedIndex].value;
		for(var i=0;i<modelArr[index].length;++i)
		{
			modelNode.options.add(new Option(modelArr[index][i], i.toString()));
		}
	}
	
	modelNode.onchange = function(){
		colorNode.options.length = 0;
		if(modelNode.options[0].value == "") modelNode.remove(0);
		colorNode.options.add(new Option("请选择颜色",""));
		var index = modelNode.options[modelNode.selectedIndex].value;
		for(var i=0;i<colorArr[index].length;++i)
		{
			colorNode.options.add(new Option(colorArr[index][i], i.toString()));
		}
	}
	colorNode.onchange = function(){
		if(colorNode.options[0].value == "") colorNode.remove(0);
	}
	damageNode.onchange = function(){
		if(damageNode.options[0].value == "") damageNode.remove(0);
	}
}

