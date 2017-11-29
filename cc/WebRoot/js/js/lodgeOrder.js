var dataLodge=[];
var pageNo=1;
//加载文档
//$(function(){
	
	
	var param=null;
	$("#query").click(function(){
		 param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val()};
		 selectLodgeOrder(param);
	});
	
	$(".paginItem").click(function(){
		var pageNo=$(this).attr("pageNo");
		if(pageNo<1){
			pageNo=1;
		}
		param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val(),"pageNo":pageNo};
		selectLodgeOrder(param);
	});
	

	selectLodgeOrder(param);
	
	//时间戳转换成日期

	function add0(m){return m<10?'0'+m:m }
	function format(shijianchuo){
		var time = new Date(shijianchuo);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		var mm = time.getMinutes();
		var s = time.getSeconds();
		return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
	} 
   function selectLodgeOrder(param){
	   
	   $.ajax({
			url: 'getLodgeOrderList.json',
			type: 'POST',
			data:param,
			dataType: 'json',
			//timeout: 1000,
			error: function(){
				alert("加载列表失败，请重试");
			},
			success: function(result){
			dataLodge=result.lodgeOrders;
			pageNo=result.page.pageNo;
				var data="";
				for(var i=0;i<result.lodgeOrders.length;i++){
					if(result.lodgeOrders[i].audit==1){
						result.lodgeOrders[i].audit='<font color=\"green\">已审核</font>';
					}else{
						result.lodgeOrders[i].audit='<font color=\"red\">未审核</font>';
					}
					if(result.lodgeOrders[i].pay==1){
						result.lodgeOrders[i].pay='<font color=\"green\">已付款</font>';
					}else{
						result.lodgeOrders[i].pay='<font color=\"red\">未付款</font>';
					}
					data+=" <tr>     " +
							"  <td>"+result.lodgeOrders[i].id+"</td>" +
							"<td>"+result.lodgeOrders[i].lodge.room+"</td>" +
							" <td>"+result.lodgeOrders[i].serviceroom+"</td>" +
							" <td>"+result.lodgeOrders[i].lodge.minprice+"</td>" +
							" <td>"+format(result.lodgeOrders[i].generatetime)+"</td>" +
							" <td>"+result.lodgeOrders[i].indentname+"</td>" +
							"<td>"+result.lodgeOrders[i].telphone+"</td>" +
							"<td>"+result.lodgeOrders[i].identification+"</td>" +
							" <td>"+result.lodgeOrders[i].audit+"</td>" +
							" <td>"+result.lodgeOrders[i].pay+"</td>" +
							" <td>"+result.lodgeOrders[i].lodge.manufacturer+"</td>" +
							"<td><a onclick='updateLodge("+result.lodgeOrders[i].id+")' class='tablelink'>修改</a> " +
							"    <a href='#' class='tablelink'>删除</a></td>" +
							"</tr> "
				}
				$("#lodgeOrders").html(data);
				if(result.lodgeOrders.length<=0){
					 Prompt1("很抱歉！暂无数据...");
				}
			
				var pagehtml="<div  class='message' >共<i class='blue'>"+result.page.totalCount+"</i>条记录，当前显示第&nbsp;<i class='blue'>"+result.page.pageNo+"&nbsp;</i>页</div>";
				var page1,page2,page3,page4;
				if(result.page.pageNo<=1){
					page1=1;
					page2=2;
					page3=3;
					page4=4;
				}else if(result.page.totalPageCount==result.page.pageNo){
					page1=result.page.pageNo-3;
					page2=result.page.pageNo-2;
					page3=result.page.pageNo-1;
					page4=result.page.pageNo;
					if(result.page.totalPageCount<4){
						page1=1;
						page2=2;
						page3=3;
						page4=4;
					}
				}else{
					page1=result.page.pageNo;
					page2=result.page.pageNo+1;
					page3=result.page.pageNo+2;
					page4=result.page.pageNo+3;
					if(result.page.totalPageCount<4){
						page1=1;
						page2=2;
						page3=3;
						page4=4;
					}
				}
				$("#page1").html(page1);
				$("#page2").html(page2);
				$("#page3").html(page3);
				$("#page4").html(page4);
				
				$("#paginItem1").attr("pageNo",page1);
				$("#paginItem2").attr("pageNo",page2);
				$("#paginItem3").attr("pageNo",page3);
				$("#paginItem4").attr("pageNo",page4);
				$("#paginItemjian").attr("pageNo",result.page.pageNo-1);
				$("#paginItemjia").attr("pageNo",result.page.pageNo+1);
			
				//当前页码添加背景颜色
				$(".paginItem").each(function(){
					$(this).removeClass("current");
					if($(this).attr("pageNo")==result.page.pageNo){
						$(this).attr("class","paginItem current");
					}
				});
				
		    	$("#page").html(pagehtml);
			}
		});
		
   };
//});
//提示框
function Prompt1(type){
	if(type==1){
		document.getElementById("yin").style.display="none";
		return false;
	}
	if(type==2){
		$(".sure").click(function(){
		  $(".tip,.tip1").fadeOut(100);
		})
		return false;
	}
	var shu;
	if(type=="订单添加成功！"){
    	shu=2;
    }else{
    	shu=1;
    }
	//document.getElementById("prompt").style.display="block";
    var html="";
    html=html+"<div class=\"tip\" id=\"yin\" style=\"display:block;\">"+ 
	"<div class=\"tiptop\"><span>提示信息</span><a onclick='Prompt1("+shu+")'></a></div>"+ 	            
	"<div class=\"tipinfo\">"+ 
    "<span><img src=\"images/ticon.png\" /></span>"+ 
    "<div class=\"tipright\">"+ 
    "<p>"+type+"</p>"+ 
    "<cite>点击确定按钮 ，关闭提示信息弹出框。</cite>"+ 
    "</div>"+ 
    "</div>"+ 	            
    "<div class=\"tipbtn\">";	    	    
    html=html+"<input style=\"margin-left: 40%;\" type=\"button\" class=\"sure\" value=\"确定\" onclick=\"Prompt1("+shu+")\"/>"; 
    html=html+"</div>"+    
    "</div>";
    document.getElementById("prompt").innerHTML=html;
    
}

var shuliang=0;
function addInput(){
	var quantity = document.getElementById("quantity").value*4-1;	
	if(quantity<1){
		quantity=3;
	}
	shuliang=shuliang+1;
	if(shuliang>quantity){
		Prompt1("一个房间最多只能住"+(quantity+1)+"个人！");
		shuliang=quantity;
		return false;
	}
	var html="<li></li>&nbsp;<li><label>入住房间号：</label><input name=\"serviceroom\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
	 "<li><label>入住人名称：</label><input name=\"indentName\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
	"<li><label>入住人电话：</label><input name=\"telphone\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>"+ 
	"<li><label>身份证号码：</label><input name=\"identification\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\"\" /></li>";
	$("#dingdan").append(html);
	
}


//修改民宿订单
function updateLodge(id){	
	$(".tip1").fadeIn(200);
	var data=[];
	 for(var i =0;i<dataLodge.length;i++){
		 if(dataLodge[i].id==id){
			 data=dataLodge[i];
		 }		 
	 }
	 var generatetime=format1(data.generatetime);
	 var html="<li style=\"display:none;\"><label>房价名称：</label><input style=\"width: 245px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.lodge.lodgename+"\" /></li>"+ 
		" <li><label>房间类型：</label><input style=\"width: 245px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.lodge.room+"\" /></li>"+ 
		"<input type=\"text\" style=\"display:none;\" id=\"id\" class=\"sure\" value=\""+data.id+"\" />"+
		 "<li><label>预定数量：</label> <input id=\"quantity\" style=\"width: 60px;border-style:none;\" readonly=\"true\" class=\"dfinput\" type=\"number\" min=\"0\" max=\"1000\" step=\"1\" value=\""+data.quantity+"\"  >&nbsp;&nbsp;&nbsp;间</li>"+ 
		
		
		"<li><label>总价格：</label><input id=\"minprice1\" style=\"width: 70px;\"  name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.minprice+"\" />&nbsp;&nbsp;元</li>";
	
	 html= html+"<li><label>添加入住人：</label>&nbsp;&nbsp;&nbsp;<input title=\"添加入住人\" style=\"width:24px;-webkit-border-radius: 8px;background: url(images/t01.png) repeat-x;\" type=\"button\" class=\"btn\" value=\"\" onclick=\"addInput()\"/></li>"+	 		
	 		" <li><label>入住时间：</label><input id=\"datebut\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+generatetime+"\" onclick=\"jeDate({dateCell:'#datebut',isTime:true,format:'YYYY-MM-DD 00:00'})\" readonly/></li>"+
	 		"<li><label>入住房间号：</label><input id=\"serviceroom\" name=\"serviceroom\" style=\"width: 245px;\"  type=\"text\" class=\"dfinput\" value=\""+data.serviceroom+"\" /></li>"+ 
   			" <li><label>入住人名称：</label><input id=\"indentName\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.indentname+"\" /></li>"+
       		"<li><label>入住人电话：</label><input id=\"telphone\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.telphone+"\" /></li>"+
       		"<li><label>身份证号码：</label><input id=\"identification\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.identification+"\" /></li>";
	 if(data.pay=="<font color=\"green\">已付款</font>"){
		 html= html+"<li><label>付款标识：</label><cite><input name=\"pay\" type=\"radio\" value=\"1\" checked=\"\" />已付款&nbsp;&nbsp;&nbsp;&nbsp;";
	 }else{
		 html= html+"<li><label>付款标识：</label><cite><input name=\"pay\" type=\"radio\" value=\"1\"  />已付款&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"pay\" type=\"radio\" value=\"0\" checked=\"\"/>未付款</cite></li>";
	 }
	 if(data.audit=="<font color=\"green\">已审核</font>"){
		 html= html+"<li><label>审核标识：</label><cite><input name=\"audit\" type=\"radio\" value=\"1\" checked=\"\" />已审核&nbsp;&nbsp;&nbsp;&nbsp;";
	 }else{
		 html= html+"<li><label>审核标识：</label><cite><input name=\"audit\" type=\"radio\" value=\"1\"  />已审核&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"audit\" type=\"radio\" value=\"0\" checked=\"\"/>未审核</cite></li>";
	 }	
	 $("#dingdan").html(html);
	 
}
function add10(m){return m<10?'0'+m:m }
function format1(shijianchuo){
	var time = new Date(shijianchuo);
	var y = time.getFullYear();
	var m = time.getMonth()+1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	return y+'-'+add10(m)+'-'+add10(d)+' '+add10(h)+':'+add10(mm)+':'+add10(s);
} 

//添加商城民宿订单
function updateLodgeAdd(){
	var audit = $('.tip1 input[name="audit"]:checked ').val();
	var pay = $('.tip1 input[name="pay"]:checked ').val();
	 var quantity = document.getElementById("quantity").value;
  	 var minprice = document.getElementById("minprice1").value;
  	var serviceroom = document.getElementById("serviceroom").value;
  	var begintime = document.getElementById("datebut").value;
    var type_flag = document.getElementById("id").value;
    var identification = document.getElementById("identification").value;
	var indentName = document.getElementById("indentName").value;
	var telphone = document.getElementById("telphone").value;
	if(quantity<1){
		Prompt1("数量不能为零！");
		return false;
	}
	if(begintime==""){
		Prompt1("使用时间不能为空！");
		return false;
	}
	if(serviceroom==""){
		Prompt1("房间号不能为空！");
		return false;
	}
	if(indentName==""){
		Prompt1("预定人名称不能为空！");
		return false;
	}
	if(telphone==""){
		Prompt1("预定人电话不能为空！");
		return false;
	}
	if(identification==""){
		Prompt1("预定人身份证不能为空！");
		return false;
	}
	var myreg = /^(13[0-9]|17[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/; 
	if(!myreg.test(telphone)){
		 Prompt1("请输入正确的手机号码!");
		 return false;
	}
	var sid=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
	if(!sid.test(identification)){
		 Prompt1("请输入正确的身份证号码!");
		return false;
	}
	var ticketOrder={
			pay:pay,
			audit:audit,
			id:type_flag,
			quantity:quantity,
			minprice:minprice,
			begintime:begintime,
			serviceroom:serviceroom,
			indentname:indentName,
			identification:identification,
			telphone:telphone
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "updateLodgeOrder.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        data:ticketOrder,
	        dataType: "json",
	        success: function (data) { 	   
	        	if(data.msg=="success"){
	        		Prompt1("订单修改成功！");
	        		var param={"pageNo":pageNo}
	        		selectLodgeOrder(param);
	        	}else{
	        		Prompt1("订单修改失败！");
	        	}
	        }		
		});	
}


//提示框
function Prompt1(type){
	if(type==1){
		document.getElementById("yin").style.display="none";
		return false;
	}
	if(type==2){
		$(".sure").click(function(){
		  $(".tip,.tip1").fadeOut(100);
		})
		return false;
	}
	var shu;
	if(type=="订单添加成功！"){
    	shu=2;
    }else{
    	shu=1;
    }
	//document.getElementById("Prompt1").style.display="block";
    var html="";
    html=html+"<div class=\"tip\" id=\"yin\" style=\"display:block;\">"+ 
	"<div class=\"tiptop\"><span>提示信息</span><a onclick='Prompt1("+shu+")'></a></div>"+ 	            
	"<div class=\"tipinfo\">"+ 
    "<span><img src=\"images/ticon.png\" /></span>"+ 
    "<div class=\"tipright\">"+ 
    "<p>"+type+"</p>"+ 
    "<cite>点击确定按钮 ，关闭提示信息弹出框。</cite>"+ 
    "</div>"+ 
    "</div>"+ 	            
    "<div class=\"tipbtn\">";	    	    
    html=html+"<input style=\"margin-left: 40%;\" type=\"button\" class=\"sure\" value=\"确定\" onclick=\"Prompt1("+shu+")\"/>"; 
    html=html+"</div>"+    
    "</div>";
    document.getElementById("prompt").innerHTML=html;
    
}