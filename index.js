var typeArr = [{id:0, name:'手机', brand:[
				{id:0, name:'苹果', model:[
				 {id:0, name:'iPhone 6', color:['金', '银', '灰']},
				 {id:1, name:'iPhone 6 Plus', color:['金', '银', '灰']},
				 {id:2, name:'iPhone 6S', color:['金', '玫瑰金', '银', '灰']},
				 {id:3, name:'iPhone 6S Plus', color:['金', '玫瑰金', '银', '灰']},
				 {id:4, name:'iPhone 7', color:['金', '玫瑰金', '银', '灰', '黑']},
				 {id:5, name:'iPhone 7 Plus', color:['金', '玫瑰金', '银', '灰', '黑']},
				 {id:6, name:'iPhone SE', color:['金', '玫瑰金', '银', '灰']}]},
				{id:1, name:'三星', model:[
				 {id:7, name:'Galaxy S7', color:['黑', '金', '粉']},
				 {id:8, name:'Galaxy S7 Edge', color:['黑', '金', '粉']},
				 {id:9, name:'Galaxy S8', color:['黑','银','灰']},
				 {id:10, name:'Galaxy S8+', color:['黑','银','灰']}]}]}, 
			   {id:1, name:'平板', brand:[
			    {id:2, name:'苹果', model:[
				 {id:11, name:'iPad Pro', color:['金', '玫瑰金', '银', '粉']},
				 {id:12, name:'iPad', color:['金', '银', '灰']},
				 {id:13, name:'iPad mini4', color:['金', '银', '灰']}]},
				{id:3, name:'三星', model:[
				 {id:14, name:'三星平板', color:['各种颜色']}]}]}];
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
		var indexType = typeNode.options[typeNode.selectedIndex].value;
		var item = typeArr[indexType];
		for(var i=0;i<item.brand.length;++i)
		{
			brandNode.options.add(new Option(item.brand[i].name, i.toString()));
		}
	}
	
	brandNode.onchange = function(){
		modelNode.options.length = 0;
		colorNode.options.length = 0;
		if(brandNode.options[0].value == "") brandNode.remove(0);
		modelNode.options.add(new Option("请选择型号",""));
		colorNode.options.add(new Option("请选择颜色",""));
		var indexType = typeNode.options[typeNode.selectedIndex].value;
		var indexBrand = brandNode.options[brandNode.selectedIndex].value;
		var item = typeArr[indexType].brand[indexBrand];
		for(var i=0;i<item.model.length;++i)
		{
			modelNode.options.add(new Option(item.model[i].name, i.toString()));
		}
	}
	
	modelNode.onchange = function(){
		colorNode.options.length = 0;
		if(modelNode.options[0].value == "") modelNode.remove(0);
		colorNode.options.add(new Option("请选择颜色",""));
		var indexType = typeNode.options[typeNode.selectedIndex].value;
		var indexBrand = brandNode.options[brandNode.selectedIndex].value;
		var indexModel = modelNode.options[modelNode.selectedIndex].value;
		var item = typeArr[indexType].brand[indexBrand].model[indexModel];
		for(var i=0;i<item.color.length;++i)
		{
			colorNode.options.add(new Option(item.color[i], i.toString()));
		}
	}
	colorNode.onchange = function(){
		if(colorNode.options[0].value == "") colorNode.remove(0);
	}
	damageNode.onchange = function(){
		if(damageNode.options[0].value == "") damageNode.remove(0);
	}
}

