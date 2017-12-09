

var datas=[];

//商城服务分页
function ServiceList(list){
	if(list!=undefined){
		var html="";
		if(list.length==0){
			t=0;
		       	page=4;
	 	   	html=html+	    	
		    "<tr style=\"height:auto;text-align:center;\">"+ 
		    "<td colspan=\"2\" style=\"text-align: center;\">没有任何数据/td>"
		    "</tr>"; 
		}
		for(var i=0;i<list.length;i++){
	    	html=html+	    	
	    	"<tr>"+
	        "<td class=\"imgtd\"><img style=\"height:40px;widht:60px;\" src=\"http://localhost/"+list[i].photo1+"\" /></td>"+
	        "<td>"+list[i].productName+"</td>"+
	        "<td>"+list[i].content+"</td>"+
	        "<td>"+list[i].minprice+"元/次</td>"+
	        "<td>"+list[i].manufacturer+"</td>"+
	        "<td><a class=\"click1\" onclick=\"OrderShow("+list[i].id+")\">购买</a></td>"+
	        "<td><a class=\"click\">删除</a></td>"+
	        "</tr>"; 			
	    };
	    document.getElementById("tbody").innerHTML =html;
	    return false;
	}
	var urltext = "getServiceProductList1.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        dataType: "json",
	        success: function (data) { 	   
	        	
	        	datas=data;
	        	fenye(1,"商城服务");
	        }		
		});	
	
}

//根据id显示订单信息
function OrderShow(id){
	 var data=[];
	 for(var i =0;i<datas.length;i++){
		 if(datas[i].id==id){
			 data=datas[i];
		 }		 
	 }
	 document.getElementById("id").value=data.id;
	 document.getElementById("name").value=data.productName;
	 document.getElementById("minprice").value=data.minprice;
	 document.getElementById("manufacturer").value=data.manufacturer;
	 if(data.productName==1){
		 document.getElementById("name").value="客房保洁";
	 }
	 if(data.productName==1){
		 document.getElementById("name").value="厨房清洁";
	 }
	 if(data.productName==1){
		 document.getElementById("name").value="客房布草";
	 }
	document.getElementById("begintime").value="";
	document.getElementById("serviceRoom").value="";
	document.getElementById("indentName").value="";
	document.getElementById("telphone").value="";
}



//添加商城服务订单
function OrderAdd(){
	
	var audit = $('#dingdan input[name="audit"]:checked ').val();
	var pay = $('#dingdan input[name="pay"]:checked ').val();
    
    var type_flag = document.getElementById("id").value;
    var begintime = document.getElementById("begintime").value;
	var serviceRoom = document.getElementById("serviceRoom").value;
	var indentName = document.getElementById("indentName").value;
	var telphone = document.getElementById("telphone").value;
	var generateTime = getNowFormatDate();
	if(begintime==""){
		Prompt("服务时间不能为空！");
		return false;
	}
	if(serviceRoom==""){
		Prompt("服务房间号不能为空！");
		return false;
	}
	if(indentName==""){
		Prompt("预定人名称不能为空！");
		return false;
	}
	if(telphone==""){
		Prompt("预定人电话不能为空！");
		return false;
	}
	var myreg = /^(13[0-9]|17[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/; 
	if(!myreg.test(telphone)){
		Prompt("请输入正确的手机号码!");
		 return false;
	}
	var specialtiesOrder={
			pay:pay,
			audit:audit,
			typeFlag:type_flag,
			begintime:begintime,
			serviceroom:serviceRoom,
			indentname:indentName,
			telphone:telphone
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "addServiceOrder.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        data:specialtiesOrder,
	        dataType: "json",
	        success: function (data) { 	   
	        	if(data.msg=="success"){
	        		Prompt("订单添加成功！");
	        	}else{
	        		Prompt("订单添加失败！");
	        	}
	        }		
		});	
}

