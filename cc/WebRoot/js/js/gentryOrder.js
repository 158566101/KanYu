var dataGentry=[];
var pageNo=1;
//加载文档
//$(function(){
	
	
	var param=null;
	$("#query").click(function(){
		 param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val()};
		 selectGentryOrders(param);
	});
	
	$(".paginItem").click(function(){
		var pageNo=$(this).attr("pageNo");
		if(pageNo<1){
			pageNo=1;
		}
		param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val(),"pageNo":pageNo};
		selectGentryOrders(param);
	});
	

	selectGentryOrders(param);

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
   function selectGentryOrders(param){
	   
	   $.ajax({
			url: 'getGentryOrderList.json',
			type: 'POST',
			data:param,
			dataType: 'json',
			//timeout: 1000,
			error: function(){
				alert("加载列表失败，请重试");
			},
			success: function(result){
				pageNo=result.page.pageNo;
					dataGentry=result.gentryOrders;
				var data="";
				for(var i=0;i<result.gentryOrders.length;i++){
					if(result.gentryOrders[i].audit==1){
						result.gentryOrders[i].audit='<font color=\"green\">已审核</font>';
					}else{
						result.gentryOrders[i].audit='<font color=\"red\">未审核</font>';
					}
					if(result.gentryOrders[i].pay==1){
						result.gentryOrders[i].pay='<font color=\"green\">已付款</font>';
					}else{
						result.gentryOrders[i].pay='<font color=\"red\">未付款</font>';
					}
					data+=" <tr>     " +
							"  <td>"+result.gentryOrders[i].id+"</td>" +
							"<td>"+result.gentryOrders[i].gentryname+"</td>" +
							" <td>"+result.gentryOrders[i].quantity+"</td>" +
							"<td>"+result.gentryOrders[i].minpriceone+"</td>" +
							" <td>"+result.gentryOrders[i].minprice+"</td>" +
							" <td>"+result.gentryOrders[i].indentname+"</td>" +
							"<td>"+result.gentryOrders[i].telphone+"</td>" +
							" <td>"+result.gentryOrders[i].mode+"</td>" +
							" <td>"+result.gentryOrders[i].address+"</td>" +
							" <td>"+format(result.gentryOrders[i].generatetime)+"</td>" +
							" <td>"+result.gentryOrders[i].audit+"</td>" +
							" <td>"+result.gentryOrders[i].pay+"</td>" +
							" <td>"+result.gentryOrders[i].manufacturer+"</td>" +
							"<td><a onclick='updateGentry("+result.gentryOrders[i].id+")' class='tablelink'>修改</a> " +
							"    <a href='#' class='tablelink'>删除</a></td>" +
							"</tr> "
				}
				$("#gentryorders").html(data);
				if(result.gentryOrders.length<=0){
					 Prompt1("很抱歉！暂无数据...");
				}
			
				var pagehtml="<div  class='message' >共<i class='blue'>"+result.page.totalCount+"</i>条记录，当前显示第&nbsp;<i class='blue'>"+result.page.pageNo+"&nbsp;</i>页</div>";
				var page1,page2,page3,page4;
				if(result.page.pageNo<=1){
					page1=1;
					page2=2;
					page3=3;
					page4=4;
				}else if(result.page.totalPageCount=result.page.pageNo){
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




//修改文创订单
function updateGentry(id){	
	$(".tip1").fadeIn(200);
	var data=[];
	 for(var i =0;i<dataGentry.length;i++){
		 if(dataGentry[i].id==id){
			 data=dataGentry[i];
		 }		 
	 }
	 var generatetime=format1(data.generatetime);
	 var html="<li><label>订单编号：</label><input id=\"id\" style=\"width: 90px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.id+"\" /></li>"+ 
	 "<li><label>商品名称：</label><input style=\"width: 245px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.gentryname+"\" /></li>"+ 
		 "<li><label>预定数量：</label> <input id=\"quantity\" style=\"width: 60px;\" class=\"dfinput\" type=\"number\" min=\"0\" max=\"1000\" step=\"1\" value=\""+data.quantity+"\" onblur=\"chkvalue()\">&nbsp;&nbsp;&nbsp;</li>"+ 
		 "<li><label>文创价格：</label><input id=\"minprice\" style=\"width: 45px;border-style:none;\" readonly=\"true\"  type=\"text\" class=\"dfinput\" value=\""+data.minpriceone+"\" />元</li>"+ 	
		 "<li><label>总价格：</label><input id=\"minprice1\" style=\"width: 70px;\"  name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.minprice+"\" />&nbsp;&nbsp;元</li>";
		
	 
	 
	 html= html+" <li><label>创建时间：</label><input id=\"datebut\" style=\"width: 245px;border-style:none;\" readonly=\"true\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+generatetime+"\" /></li>"+
   			" <li><label>预定人名称：</label><input id=\"indentName\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.indentname+"\" /></li>"+
       		"<li><label>预定人电话：</label><input id=\"telphone\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.telphone+"\" /></li>";
       		if(data.mode=="货到付款"){
       		 html= html+ "<li><label>收货方式：</label><cite><input name=\"mode\" type=\"radio\" value=\"货到付款\" checked=\"\" />货到付款&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"mode\" type=\"radio\" value=\"中心自取\" />中心自取</cite></li>";
       		}else{
       		 html= html+"<li><label>收货方式：</label><cite><input name=\"mode\" type=\"radio\" value=\"货到付款\" />货到付款&nbsp;&nbsp;&nbsp;&nbsp;<input name=\"mode\" type=\"radio\" value=\"中心自取\" checked=\"\" />中心自取</cite></li>";
       		}
	 html= html+"<li><label>收货地址：</label><textarea id=\"address\" style=\"width: 245px;\" placeholder=\"选择中心自取，地址栏可不填\" cols=\"\" rows=\"\" class=\"textinput\" value=\""+data.address+"\"></textarea></li>";
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


function updateGentryadd(){
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
			Prompt1("数量不能为零！");
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
		var myreg = /^(13[0-9]|17[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/; 
		if(!myreg.test(telphone)){
			 Prompt1("请输入正确的手机号码!");
			 return false;
		}
		if(mode=="货到付款" && address==""){
			Prompt1("收货地址不能为空！");
			return false;
		}
		var ticketOrder={
				pay:pay,
				audit:audit,
				id:type_flag,
				quantity:quantity,
				mode:mode,
				minprice:minprice,
				minpriceone:minpriceone,
				address:address,
				indentname:indentName,
				telphone:telphone
		}
		//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
		var urltext = "updateGentryOrder.json";
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
		        		selectGentryOrders(param);
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