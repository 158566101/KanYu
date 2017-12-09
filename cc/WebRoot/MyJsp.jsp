<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'MyJsp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery.js"></script></head>
  
  <body>
    

<script type="text/javascript">
 ss();
/* function  ss(){
	var urltext = "http://120.55.98.170:8008/MLXCPro/getGoodsListByName.json";
	var param={
		"name":"房"
		}
	$.ajax({
	        type: "POST",
	        url: urltext, 
	        dataType: "json",
	        data:param,
	        success: function (data) { 	  
	        	alert(data.length); 
	        	alert(data[0].name);
	        }
	 });
} */

 function  ss(){
	var urltext = "http://120.55.98.170:8008/MLXCPro/addServiceOrder.json";
	var param={
		"typeFlag":"25",
		"serviceroom":"1002",
		"begintime":"2017-12-12 14:40",
		"indentname":"Test1"
		
		}
	$.ajax({
	        type: "POST",
	        url: urltext, 
	        dataType: "json",
	        data:param,
	        success: function (data) { 	   
	        	alert(data.msg);
	        }
	 });
} 
</script>
  </body>
</html>
