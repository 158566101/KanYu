

var datas=[];

//商城农特产分页
function SpecialtiesList(list){
	if(list!=undefined){
		var html="";
		var html="";
		if(list.length==0){
	 	   	html=html+	    	
		    "<tr style=\"height:auto;text-align:center;\">"+ 
		    "<td colspan=\"2\" style=\"text-align: center;\">没有任何数据！</td>"
		    "</tr>"; 
		}
	    for(var i=0;i<list.length;i++){
	    	html=html+	    	
	    	"<li class=\"selected\">"+
	        "<span onclick=\"SpecialtiesID("+list[i].id+")\"><img style=\"height:126px;width:168px;\" src=\"http://localhost/"+list[i].photo1+"\" /></span>"+
	        "<h2><a>"+list[i].specialtiesname+"</a></h2>"+
	        "<p><a >价格：</a>&nbsp;<a >"+list[i].minprice+"&yen</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick=\"SpecialtiesID("+list[i].id+")\">查看</a>&nbsp;&nbsp;&nbsp;&nbsp;<a  class=\"click1\" onclick=\"SpecialtiesOrderShow("+list[i].id+")\">购买</a></p>"+			       
	        "</li>";	   	      
	        
	    };
    	document.getElementById("LogdeID").innerHTML =html;
    	tanchu();
	    return false;
	}
	var urltext = "getSpecialtiesList1.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        dataType: "json",
	        success: function (data) { 	   
	        	
	        	datas=data;
	        	fenye(1,"商城农特产",24);
	        }		
		});	
	
}


//农特产根据id查询
function SpecialtiesID(id){
	 var data=[];
	 for(var i =0;i<datas.length;i++){
		 if(datas[i].id==id){
			 data=datas[i];
		 }		 
	 }
	 
	var htmls=""+data.specialtiesname+""
	var html="<li style=\"padding: 10px;padding-left: 0px;\"><div style=\"height: 200px;width: 100%;\"> <img id=\"lunbo\"  src=\"http://localhost/"+data.photo1+"\" style=\"height:100%;width:100%;-webkit-border-radius: 8px;\"/></div></li>"+
	"<li><label class=\"label1\" style=\"width: 120px;\">农特产名称：</label><label class=\"label1\" style=\"width:200px;\">"+data.specialtiesname+"</label></li>"+
	"<li><label class=\"label1\" style=\"width: 120px;\">价格：</label><label class=\"label1\" style=\"width:200px;\">"+data.minprice+"&yen</label></li>"+
	"<li><label class=\"label1\" style=\"width: 120px;\">提供商：</label><label class=\"label1\" style=\"width:200px;\">"+data.manufacturer+"</label></li>"+
	"<li><label class=\"label1\" style=\"float: inherit;width: 120px;\">农特产描述：</label><div class=\"div1\">&nbsp;&nbsp;&nbsp;&nbsp;"+data.content+"</div></li>";
	
	
	document.getElementById("stname").innerHTML =htmls;
	document.getElementById("Lodgeforminfo").innerHTML =html;
	imglist();
	lunbotu(data.photo1,data.photo2,data.photo3,data.photo4,data.photo5);
}


//根据id显示订单信息
function SpecialtiesOrderShow(id){
	 var data=[];
	 for(var i =0;i<datas.length;i++){
		 if(datas[i].id==id){
			 data=datas[i];
		 }		 
	 }
	var html="<li><label>农特产名称：</label><input style=\"width: 245px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.specialtiesname+"\" /></li>"+ 
	"<input type=\"text\" style=\"display:none;\" id=\"id\" class=\"sure\" value=\""+data.id+"\" />"+	 
	 "<li><label>预定数量：</label> <input id=\"quantity\" style=\"width: 60px;\" class=\"dfinput\" type=\"number\" min=\"0\" max=\"1000\" step=\"1\" value=\"0\" onblur=\"chkvalue()\">&nbsp;&nbsp;&nbsp;</li>"+ 
	 "<li><label>农特产价格：</label><input id=\"minprice\" style=\"width: 45px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.minprice+"\" />元</li>"+ 	
	 "<li><label>总价格：</label><input id=\"minprice1\" style=\"width: 45px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\"0\" />元</li>"+ 
	 "<li><label>收货方式：</label><cite><input name=\"mode\" type=\"radio\" value=\"货到付款\" checked=\"\" />货到付款&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"mode\" type=\"radio\" value=\"中心自取\" />中心自取</cite></li>"+ 
    "<li><label>付款标识：</label><cite><input name=\"pay\" type=\"radio\" value=\"\" checked=\"\" />已付款&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"pay\" type=\"radio\" value=\"\" />未付款</cite></li>"+ 
    "<li><label>审核标识：</label><cite><input name=\"audit\" type=\"radio\" value=\"\" checked=\"\" />已审核&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"audit\" type=\"radio\" value=\"\" />未审核</cite></li>"+ 
		 "<li><label>预定人名称：</label><input id=\"indentName\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
		"<li><label>预定人电话：</label><input id=\"telphone\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
		"<li><label>收货地址：</label><textarea id=\"address\" style=\"width: 245px;\" placeholder=\"选择中心自取，地址栏可不填\" cols=\"\" rows=\"\" class=\"textinput\"></textarea></li>";
	

	document.getElementById("LodgeOrder").innerHTML =html;
	document.getElementById("tijiao").innerHTML="<input type=\"button\"  class=\"sure1\" value=\"提交订单\" onclick=\"SpecialtiesOrderAdd()\"/>";
}

//添加商城农特产订单
function SpecialtiesOrderAdd(){
	var mode = $('.tip1 input[name="mode"]:checked ').val();
	var audit = $('.tip1 input[name="audit"]:checked ').val();
	var pay = $('.tip1 input[name="pay"]:checked ').val();
	 var quantity = document.getElementById("quantity").value;
  	 var minprice = document.getElementById("minprice1").value;
  	 var minpriceone = document.getElementById("minprice").value;
    var type_flag = document.getElementById("id").value;
    var address = document.getElementById("address").value;
	var indentName = document.getElementById("indentName").value;
	var telphone = document.getElementById("telphone").value;
	if(quantity<1){
		Prompt("数量不能为零！");
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
	if(mode=="货到付款" && address==""){
		Prompt("收货地址不能为空！");
		return false;
	}
	var ticketOrder={
			pay:pay,
			audit:audit,
			typeFlag:type_flag,
			quantity:quantity,
			minprice:minprice,
			minpriceone:minpriceone,
			address:address,
			indentname:indentName,
			telphone:telphone
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "addSpecialtiesOrder.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        data:ticketOrder,
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
