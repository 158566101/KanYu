<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="js/jquery.js"></script>

<script type="text/javascript">
$(function(){	
	//导航切换
	$(".menuson li").click(function(){
		$(".menuson li.active").removeClass("active")
		$(this).addClass("active");
	});
	
	$('.title').click(function(){
		var $ul = $(this).next('ul');
		$('dd').find('ul').slideUp();
		if($ul.is(':visible')){
			$(this).next('ul').slideUp();
		}else{
			$(this).next('ul').slideDown();
		}
	});
})	
</script>


</head>

<body style="background:#f0f9fd;">
	<div class="lefttop"><span></span>信息列表</div>
    
    <dl class="leftmenu">
        
    <dd>
    <div class="title">
    <span><img src="images/leftico01.png" /></span>商城管理
    </div>
    	<ul class="menuson">
	        <li class="active"><cite></cite><a href="mallService.jsp" target="rightFrame">商城服务</a><i></i></li>
	        <li ><cite></cite><a href="imglist.jsp" target="rightFrame">商城票务</a><i></i></li>
	        <li><cite></cite><a href="products.jsp" target="rightFrame">商城产品</a><i></i></li>
	        <li><cite></cite><a href="insurance.jsp" target="rightFrame">保险</a><i></i></li>
        </ul>
    </dd>
        
    
    <dd>
	<a href="tab.jsp" target="rightFrame">
    <div class="title">
    <span><img src="images/leftico02.png" /></span>信息资讯
    </div>
       </a>
    </dd> 
    
    
    <dd>
	<div class="title"><span><img src="images/leftico03.png" /></span>第三方</div>
    	<ul class="menuson">
	        <li  class="active"><cite></cite><a href="imgtable.jsp" target="rightFrame">公共信息</a><i></i></li>
	        <li><cite></cite><a href="imgtable1.jsp" target="rightFrame">公安咨询</a><i></i></li>
	        <li><cite></cite><a href="imgtable2.jsp" target="rightFrame">税务结算</a><i></i></li>
        </ul>
     
    </dd>  
    
    
    <dd>
	<div class="title"><span><img src="images/leftico04.png" /></span>订单处理</div>
     <ul class="menuson">
	        <li class="active"><cite></cite><a href="service.jsp" target="rightFrame">服务订单</a><i></i></li>
	        <li><cite></cite><a href="ticket.jsp" target="rightFrame">票务订单</a><i></i></li>
	        <li><cite></cite><a href="homestay.jsp" target="rightFrame">民宿订单</a><i></i></li>
	        <li><cite></cite><a href="crafts.jsp" target="rightFrame">文创订单</a><i></i></li>
	        <li><cite></cite><a href="specialties.jsp" target="rightFrame">农特产订单</a><i></i></li>
        </ul>
    </dd>   
    
    </dl>
    
</body>
</html>
