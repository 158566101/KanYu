var dataService=[];
var pageNo=1;

//加载文档
//$(function(){
	
	var param=null;
	
	$("#query1").click(function(){
		 param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val()};
		 selectServiceOrders(param);
	});
/*	$(document.getElementById("query1")).click(function(){
		 param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val()};
		 selectServiceOrders(param);
	});*/
	
	
	$(".paginItem").click(function(){
		var pageNo=$(this).attr("pageNo");
		if(pageNo<1){
			pageNo=1;
		}
		param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val(),"pageNo":pageNo};
		selectServiceOrders(param);
	});

	selectServiceOrders(param);
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
	//查询票务
   function selectServiceOrders(param){

	   $.ajax({
			url: 'toserviceorders.json',
			type: 'POST',
			data:param,
			dataType: 'json',
			//timeout: 1000,
			error: function(){
				alert("加载列表失败，请重试");
			},
			success: function(result){
				dataService=result.serviceOrders;
				pageNo=result.page.pageNo;
				var data="";
				for(var i=0;i<result.serviceOrders.length;i++){
					if(result.serviceOrders[i].audit==1){
						result.serviceOrders[i].audit='<font color=\"green\">已审核</font>';
					}else{
						result.serviceOrders[i].audit='<font color=\"red\">未审核</font>';
					}
					if(result.serviceOrders[i].pay==1){
						result.serviceOrders[i].pay='<font color=\"green\">已付款</font>';
					}else{
						result.serviceOrders[i].pay='<font color=\"red\">未付款</font>';
					}
					data+=" <tr>  " +
							" <td>"+result.serviceOrders[i].id+"</td>" +
							" <td>"+result.serviceOrders[i].serviceroom+"</td>" +							
							" <td>"+result.serviceOrders[i].productname+"</td>" +
							" <td>"+result.serviceOrders[i].typename+"</td>" +
							"<td>"+result.serviceOrders[i].minprice+"</td>" +
							" <td>"+result.serviceOrders[i].indentname+"</td>" +
							"<td>"+result.serviceOrders[i].telphone+"</td>" +
							"<td>"+format(result.serviceOrders[i].begintime)+"</td>" +
							"<td>"+format(result.serviceOrders[i].generatetime)+"</td>";				
							 if(result.serviceOrders[i].audit=="<font color=\"green\">已审核</font>"){
								 data= data+"<td>"+result.serviceOrders[i].audit+"</td>";
							 }else{
								 data= data+"<td><a onclick=\"updateServicePA("+result.serviceOrders[i].id+",0,1)\">"+result.serviceOrders[i].audit+"</a></td>";
							 }	
							 if(result.serviceOrders[i].pay=="<font color=\"green\">已付款</font>"){
								 data= data+"<td>"+result.serviceOrders[i].pay+"</td>";
							 }else{
								 data= data+"<td><a onclick=\"updateServicePA("+result.serviceOrders[i].id+",1,0)\">"+result.serviceOrders[i].pay+"</a></td>";
							 }
							 data= data+"<td><a onclick='updateService("+result.serviceOrders[i].id+")' class='tablelink'>修改</a> " +
							"    <a href='#' class='tablelink'>删除</a></td>" +
							"</tr> ";
				}
				
				$("#serviceorders").html(data);
				
				if(result.serviceOrders.length<=0){
					Prompt1("很抱歉！暂无数据...");
				}
				//分页代码
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


//修改服务订单
function updateService(id){	
	$(".tip1").fadeIn(200);
	var data=[];
	 for(var i =0;i<dataService.length;i++){
		 if(dataService[i].id==id){
			 data=dataService[i];
		 }		 
	 }
	 var generatetime=format1(data.begintime);
	 var html= "<li><label>订单编号：</label><input id=\"id\" style=\"width: 80px;border-style:none;\" readonly=\"true\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.id+"\" />&nbsp;&nbsp;</li>"+
		 "<li><label>服务名称：</label><input id=\"name\" style=\"width: 245px;border-style:none;\" readonly=\"true\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.productname+"\" /></li>"+
	" <li><label>服务次数</label> <input style=\"width: 30px;border-style:none;\" readonly=\"true\" class=\"dfinput\" type=\"number\" min=\"0\" max=\"10\" step=\"2\" value=\"1\">次</li>"+
	 "<li><label>服务价格：</label><input id=\"minprice\" style=\"width: 45px;border-style:none;\" readonly=\"true\"  name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.minprice+"\" />&nbsp;&nbsp;元</li>"+
	 "<li><label>服务类型：</label><input id=\"type\" style=\"width: 145px;border-style:none;\" readonly=\"true\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.typename+"\" /></li>";
	
	 html= html+"<li><label>提供商：</label><input id=\"manufacturer\" style=\"width: 245px;border-style:none;\" readonly=\"true\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.productname+"\" /></li>"+
		" <li><label>服务时间：</label><input id=\"begintimea\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\"  value=\""+data.begintime+"\" onclick=\"jeDate({dateCell:'#begintimea',isTime:true,format:'YYYY-MM-DD hh:00:00'})\" readonly/></li>"+
		" <li><label>服务房间号：</label><input id=\"serviceRoom\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.serviceroom+"\" /></li>"+
		" <li><label>预定人名称：</label><input id=\"indentName\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.indentname+"\" /></li>"+
		"<li><label>预定人电话：</label><input id=\"telphone\" style=\"width: 245px;\" name=\"\" type=\"text\" class=\"dfinput\" value=\""+data.telphone+"\" /></li>";
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

function updateServiceAdd(){
	var audit = $('#dingdan input[name="audit"]:checked ').val();
	var pay = $('#dingdan input[name="pay"]:checked ').val();
    
    var id = document.getElementById("id").value;
    var begintime = document.getElementById("begintimea").value;
	var serviceRoom = document.getElementById("serviceRoom").value;
	var indentName = document.getElementById("indentName").value;
	var telphone = document.getElementById("telphone").value;
	if(begintime==""){
		Prompt1("服务时间不能为空！");
		return false;
	}
	if(serviceRoom==""){
		Prompt1("服务房间号不能为空！");
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
	var specialtiesOrder={
			pay:pay,
			audit:audit,
			id:id,
			begintime:begintime,
			serviceroom:serviceRoom,
			indentname:indentName,
			telphone:telphone
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "updateServiceOrder.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        data:specialtiesOrder,
	        dataType: "json",
	        success: function (data) { 	   
	        	if(data.msg=="success"){
	        		Prompt1("订单修改成功！");
	        		var param={"pageNo":pageNo}
	        		selectServiceOrders(param);
	        	}else{
	        		Prompt1("订单修改失败！");
	        	}
	        }		
		});	
}
function updateServicePA(id,pay,audit){	
	if(pay==1){
		Prompt1("订单修改失败！");
	}
	var specialtiesOrder={
			pay:pay,
			audit:audit,
			id:id,
	}
	//var urltext = "addServiceOrder.json?pay="+pay+"&audit="+audit+"&typeFlag="+type_flag+"&begintime="+begintime+"&serviceroom="+serviceRoom+"&indentname="+indentName+"&telphone="+telphone;
	var urltext = "updateServiceOrder.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        data:specialtiesOrder,
	        dataType: "json",
	        success: function (data) { 	   
	        	if(data.msg=="success"){
	        		var param={"pageNo":pageNo}
	        		selectServiceOrders(param);
	        	}else{
	        		
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

