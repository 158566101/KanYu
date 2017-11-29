

var datas=[];
var shuliang=0;
//商城民宿分页
function LodgeList(list){
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
	        "<span onclick=\"LodgeID("+list[i].id+")\"><img style=\"height:126px;width:168px;\" src=\"http://localhost/"+list[i].photo1+"\" /></span>"+
	        "<h2><a>"+list[i].lodgename+"</a></h2>"+
	        "<p><a >价格：</a>&nbsp;<a >"+list[i].minprice+"&yen</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick=\"LodgeID("+list[i].id+")\">查看</a>&nbsp;&nbsp;&nbsp;&nbsp;<a  class=\"click1\" onclick=\"LodgeOrderShow("+list[i].id+")\">购买</a></p>"+			       
	        "</li>";	   	      
	        
	    };
    	document.getElementById("LogdeID").innerHTML =html;
    	tanchu();
	    return false;
	}
	var urltext = "getLodgeList1.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        dataType: "json",
	        success: function (data) { 	   
	        	
	        	datas=data;
	        	fenye(1,"商城民宿",24);
	        }		
		});	
	
}


//民宿根据id查询
function LodgeID(id){
	 var data=[];
	 for(var i =0;i<datas.length;i++){
		 if(datas[i].id==id){
			 data=datas[i];
		 }		 
	 }
	 
	var htmls=""+data.lodgename+""
	var html="<li style=\"padding: 10px;padding-left: 0px;\"><div style=\"height: 200px;width: 100%;\"> <img id=\"lunbo\"  src=\"http://localhost/"+data.photo1+"\" style=\"height:100%;width:100%;-webkit-border-radius: 8px;\"/></div></li>"+
	"<li><label class=\"label1\">民宿名称：</label><label class=\"label1\" style=\"width:200px;\">"+data.lodgename+"</label></li>"+
	"<li><label class=\"label1\">房间类型：</label><label class=\"label1\" style=\"width:200px;\">"+data.room+"&yen</label></li>"+
	"<li><label class=\"label1\">平日价：</label><label class=\"label1\" style=\"width:200px;\">"+data.minprice+"&yen</label></li>"+
	"<li><label class=\"label1\">周末价：</label><label class=\"label1\" style=\"width:200px;\">"+data.minprice1+"&yen</label></li>"+
	"<li><label class=\"label1\">提供商：</label><label class=\"label1\" style=\"width:200px;\">"+data.manufacturer+"</label></li>"+
	"<li><label class=\"label1\" style=\"float: inherit;\">环境描述：</label><div class=\"div1\">&nbsp;&nbsp;&nbsp;&nbsp;"+data.content+"</div></li>";
	
	
	document.getElementById("stname").innerHTML =htmls;
	document.getElementById("Lodgeforminfo").innerHTML =html;
	imglist();
	lunbotu(data.photo1,data.photo2,data.photo3,data.photo4,data.photo5);
}

//根据id显示订单信息
function LodgeOrderShow(id){
	 var data=[];
	 for(var i =0;i<datas.length;i++){
		 if(datas[i].id==id){
			 data=datas[i];
		 }		 
	 }
	var html="<li><label>房价名称：</label><input style=\"width: 245px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.lodgename+"\" /></li>"+ 
	" <li><label>房间类型：</label><input style=\"width: 245px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.room+"\" /></li>"+ 
/*	 "<li><label>房型：</label>  "+ 
	   "<div class=\"vocation\">"+ 
	    "<select class=\"select1\">"+ 
	    "<option>大房</option>"+ 
	    "<option>标间</option>"+ 
	    "<option>单间</option>"+ 
	    "</select>"+ 
	    "</div>"+ 
	    "</li>"+    */    	 
	"<input type=\"text\" style=\"display:none;\" id=\"id\" class=\"sure\" value=\""+data.id+"\" />"+
	 "<li><label>预定数量：</label> <input id=\"quantity\" style=\"width: 60px;\" class=\"dfinput\" type=\"number\" min=\"0\" max=\"1000\" step=\"1\" value=\"0\"  onblur=\"chkvalue(1)\">&nbsp;&nbsp;&nbsp;间</li>"+ 
	 "<li><label>房间价格：</label><cite><input name=\"minprice\" type=\"radio\" value=\""+data.minprice+"\" checked=\"\" onblur=\"chkvalue(1)\"/>"+data.minprice+"&yen/平日价&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"minprice\" type=\"radio\" value=\""+data.minprice1+"\" onblur=\"chkvalue(1)\"/>"+data.minprice1+"&yen/周日价</cite></li>"+
	 "<li><label>总价格：</label><input id=\"minprice1\" style=\"width: 45px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\"0\" />元</li>"+ 
    "<li><label>付款标识：</label><cite><input name=\"pay\" type=\"radio\" value=\"1\" checked=\"\" />已付款&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"pay\" type=\"radio\" value=\"0\" />未付款</cite></li>"+ 
	"<li><label>审核标识：</label><cite><input name=\"audit\" type=\"radio\" value=\"1\" checked=\"\" />已审核&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"audit\" type=\"radio\" value=\"0\" />未审核</cite></li>"+ 
	"&nbsp;&nbsp;&nbsp;<input title=\"添加入住人\" style=\"width:25px;-webkit-border-radius: 8px;background: url(images/t01.png) repeat-x;\" type=\"button\" class=\"btn\" value=\"\" onclick=\"addInput()\"/>"+	 		
	
	"<li><label>入住时间：</label><input id=\"begintime\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" onclick=\"jeDate({dateCell:'#begintime',isTime:true,format:'YYYY-MM-DD'})\" readonly/></li>"+ 
		 "<li><label>入住房间号：</label><input id=\"serviceroom\" name=\"serviceroom\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
		 "<li><label>预定人名称：</label><input id=\"indentName\" name=\"indentName\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
		"<li><label>预定人电话：</label><input id=\"telphone\" name=\"telphone\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
		"<li><label>身份证号码：</label><input id=\"identification\" name=\"identification\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>";
	

	document.getElementById("LodgeOrder").innerHTML =html;
	document.getElementById("tijiao").innerHTML="<input type=\"button\"  class=\"sure1\" value=\"提交订单\" onclick=\"LodgeOrderAdd()\"/>";
	shuliang=0;
}


//添加商城民宿订单
function LodgeOrderAdd(){
	var audit = $('.tip1 input[name="audit"]:checked ').val();
	var pay = $('.tip1 input[name="pay"]:checked ').val();
	 var quantity = document.getElementById("quantity").value;
  	 var minprice = document.getElementById("minprice1").value;
  	var serviceroom = document.getElementById("serviceroom").value;
  	var begintime = document.getElementById("begintime").value;
    var type_flag = document.getElementById("id").value;
    var identification = document.getElementById("identification").value;
	var indentName = document.getElementById("indentName").value;
	var telphone = document.getElementById("telphone").value;
	if(quantity<1){
		Prompt("数量不能为零！");
		return false;
	}
	if(begintime==""){
		Prompt("使用时间不能为空！");
		return false;
	}
	if(serviceroom==""){
		Prompt("房间号不能为空！");
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
	if(identification==""){
		Prompt("预定人身份证不能为空！");
		return false;
	}
	var myreg = /^(13[0-9]|17[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/; 
	if(!myreg.test(telphone)){
		 Prompt("请输入正确的手机号码!");
		 return false;
	}
	var sid=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
	if(!sid.test(identification)){
		 Prompt("请输入正确的身份证号码!");
		return false;
	}
	var ticketOrder={
			pay:pay,
			audit:audit,
			typeFlag:type_flag,
			quantity:quantity,
			minprice:minprice,
			begintime:begintime,
			address:address,
			serviceroom:serviceroom,
			indentname:indentName,
			identification:identification,
			telphone:telphone
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "addLodgeOrder.json";
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

function addInput(){
	var quantity = document.getElementById("quantity").value*4-1;	
	if(quantity<1){
		quantity=3;
	}
	shuliang=shuliang+1;
	if(shuliang>quantity){
		Prompt("一个房间最多只能住"+(quantity+1)+"个人！");
		shuliang=quantity;
		return false;
	}
	var html="<li></li>&nbsp;<li><label>入住房间号：</label><input name=\"serviceroom\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
	 "<li><label>预定人名称：</label><input name=\"indentName\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
	"<li><label>预定人电话：</label><input name=\"telphone\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
	"<li><label>身份证号码：</label><input name=\"identification\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>";
	$("#LodgeOrder").append(html);
	
}

//添加民宿订单身份证信息
function addLodgeCheckinOrder(){
	var list=[];
  	var se =$("input[name='serviceroom']");
    var id =$("input[name='identification']");
	var ie = $("input[name='indentName']");
	var te = $("input[name='telphone']");
	for(var i=0;i<se.length;i++){
		if(se[i].value==""&& id[i].value==""&& ie[i].value==""&& te[i].value==""){
			
			return false;
		}
		if(se[i].value==""){
			Prompt("房间号不能为空不能为空！");
			return false;
		}
		if(id[i].value==""){
			Prompt("预定人名称不能为空！");
			return false;
		}
		if(ie[i].value==""){
			Prompt("预定人电话不能为空！");
			return false;
		}
		if(te[i].value==""){
			Prompt("预定人身份证不能为空！");
			return false;
		}
		var myreg = /^(13[0-9]|17[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/; 
		if(!myreg.test(ie[i].value)){
			 Prompt("请输入正确的手机号码!");
			 return false;
		}
		var sid=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
		if(!sid.test(te[i].value)){
			 Prompt("请输入正确的身份证号码!");
			return false;
		}
		list.push(cun);
		var urltext = "addLodgeCheckinOrder.json?serviceroom="+se[i].value+"&name1="+id[i].value+"&identification1="+te[i].value+"&telphone1="+ie[i].value;
		$.ajax({
		        type: "POST",
		        contentType:'application/json;charset=UTF-8',
		        url: urltext, 
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
	

	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	
}