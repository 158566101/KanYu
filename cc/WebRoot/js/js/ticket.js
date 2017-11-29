
var TickeData=[];
//商城票务列表
function TicketList(){
	var urltext = "getTicketList1.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        dataType: "json",
	        success: function (data) {
	        	TickeData=data;
				var html="";
				if(data.length==0){
			 	   	html=html+	    	
				    "<tr style=\"height:auto;text-align:center;\">"+ 
				    "<td colspan=\"2\" style=\"text-align: center;\">没有任何数据！</td>"
				    "</tr>"; 
				}
			    for(var i=0;i<data.length;i++){
			    	html=html+	    	
			    	"<li class=\"selected\">"+
			        "<span onclick=\"TickeID("+data[i].id+")\"><img style=\"height:126px;width:168px;\" src=\"http://localhost/"+data[i].photo1+"\" /></span>"+
			        "<h2><a>"+data[i].name+"</a></h2>"+
			        "<p><a >价格：</a>&nbsp;<a >"+data[i].minprice+"&yen</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick=\"TickeID("+data[i].id+")\">查看</a>&nbsp;&nbsp;&nbsp;&nbsp;<a  class=\"click1\" onclick=\"TickeOrderShow("+data[i].id+")\">购买</a></p>"+			       
			        "</li>";	   	      
			        
			    };
		    	document.getElementById("imglist").innerHTML =html;
		    	tanchu();
	        }		
		});	
	
}


//票务根据id查询
function TickeID(id){
	 var data=[];
	 for(var i =0;i<TickeData.length;i++){
		 if(TickeData[i].id==id){
			 data=TickeData[i];
		 }		 
	 }
	 var htmls=""+data.name+""
	var html="<li style=\"padding: 10px;padding-left: 0px;\"><div style=\"height: 200px;width: 100%;\"> <img id=\"lunbo\"  src=\"http://localhost/"+data.photo1+"\" style=\"height:100%;width:100%;-webkit-border-radius: 8px;\"/></div></li>"+
	"<li><label class=\"label1\">景点名称：</label><label class=\"label1\" style=\"width:200px;\">"+data.name+"</label></li>"+
	"<li><label class=\"label1\">门票价格：</label><label class=\"label1\" style=\"width:200px;\">"+data.minprice+"&yen</label></li>"+
	"<li><label class=\"label1\" style=\"float: inherit;\">景点描述：</label><div class=\"div1\">&nbsp;&nbsp;&nbsp;&nbsp;"+data.content+"</div></li>";
	
	 document.getElementById("stname").innerHTML =htmls;
	document.getElementById("Tickeforminfo").innerHTML =html;
	imglist();
	lunbotu(data.photo1,data.photo2,data.photo3,data.photo4,data.photo5);
}


//根据id显示订单信息
function TickeOrderShow(id){
	 var data=[];
	 for(var i =0;i<TickeData.length;i++){
		 if(TickeData[i].id==id){
			 data=TickeData[i];
		 }		 
	 }
	 document.getElementById("id").value=data.id;
	 document.getElementById("name").value=data.name;
	 document.getElementById("minprice").value=data.minprice;	 
	document.getElementById("datebut").value="";
	document.getElementById("indentName").value="";
	document.getElementById("telphone").value="";
	document.getElementById("identification").value="";
    document.getElementById("quantity").value=0;
 	document.getElementById("minprice1").value=0;
}


//添加商城票务订单
function OrderAdd(){
	
	var audit = $('.tip1 input[name="audit"]:checked ').val();
	var pay = $('.tip1 input[name="pay"]:checked ').val();
	 var quantity = document.getElementById("quantity").value;
  	 var minprice = document.getElementById("minprice1").value;
  	 var minpriceone = document.getElementById("minprice").value;
    var type_flag = document.getElementById("id").value;
    var usetime = document.getElementById("datebut").value;
	var indentName = document.getElementById("indentName").value;
	var telphone = document.getElementById("telphone").value;
	var identification = document.getElementById("identification").value;
	if(quantity<1){
		Prompt("门票数量不能少于一张！");
		return false;
	}
	if(usetime==""){
		Prompt("使用时间不能为空！");
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
			minpriceone:minpriceone,
			usetime:usetime,
			identification:identification,
			indentname:indentName,
			telphone:telphone
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "addTicketOrder.json";
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


