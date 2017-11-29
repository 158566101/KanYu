<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
<title>无标题文档</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/select.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="css/zijian.css" type="text/css"></link>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/zijian.js"></script>


<script language="javascript">

$(function(){	
	//导航切换
	$(".imglist li").click(function(){
		$(".imglist li.selected").removeClass("selected")
		$(this).addClass("selected");
	})	
})	
</script>


<script src="js/jquery.min.js"></script>
<script type="text/javascript" src="jiaoben/jedate/jedate.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>	
<style type="text/css">
.label1 {
	font-weight: 700;
	font-size: 1.2em;
	color: #45545a;
}
.div1 {
	font-weight: 700;
	font-size: 1.25em;
	color: #45545a;
}
</style>	
</head>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
        <li><a>商城管理</a></li>
     <li><a >商城票务</a></li> 
    </ul>
     <ul class="toolbar1 placeul" style="margin-top: 2px;margin-right: 6%;">
        <li class="click"><span><img src="images/t01.png" /></span>添加</li>
        </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools" style="display:none;">
    
    	<ul class="toolbar">
        <li class="click"><span><img src="images/t01.png" /></span>添加</li>
        <li class="click"><span><img src="images/t02.png" /></span>修改</li>
        <li><span><img src="images/t03.png" /></span>删除</li>
        <li><span><img src="images/t04.png" /></span>统计</li>
        </ul>
        
        
        <ul class="toolbar1">
        <li><span><img src="images/t05.png" /></span>设置</li>
        </ul>
    
    </div>
    
    
    <ul class="imglist" id="imglist">
    
   
    </ul>
    
    

    
    <div class="tip" id="click"  >
    	<div class="tiptop"><span>提示信息</span><a onclick="click1(3)"></a></div>
        
      <div class="tipinfo">
        <span><img src="images/ticon.png" /></span>
        <div class="tipright">
        <p>是否确认对该景点的删除 ？</p>
        <cite>如果是请点击确定按钮 ，否则请点取消。</cite>
        </div>
        </div>
        
        <div class="tipbtn">
        <input name="" type="button"  class="sure" value="确定" onclick="click1(2)"/>&nbsp;
        <input name="" type="button"  class="cancel" onclick="click1(3)" value="取消" />
        </div>
    
    </div>
    
    
    
    
    </div>
     <div class="tip1">
    	<div class="tiptop"><span>填写订单</span><a></a></div>
        
      <div class="tipinfo1" style="overflow-y:auto;">
         <ul class="forminfo" style="margin-left: 0px;">
        	 <li><label>景点名称：</label><input id="name" style="width: 245px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="客房保洁" /></li>        	 
        	 <li><label>门票数量：</label> <input id="quantity" style="width: 60px;" class="dfinput" type="number" min="0" max="1000" step="1" value="0">&nbsp;&nbsp;&nbsp;张</li>
        	 <li><label>门票价格：</label><input id="minprice" style="width: 45px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="100" />元/张</li>
        	 <li><label>总价格：</label><input id="minprice1" style="width: 70px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="0" />元</li>
	        <li><label>付款标识：</label><cite><input name="pay" type="radio" value="1" checked="" />已付款&nbsp;&nbsp;&nbsp;&nbsp;<input name="pay" type="radio" value="0" />未付款</cite></li>
			<li><label>审核标识：</label><cite><input name="audit" type="radio" value="1" checked="" />已审核&nbsp;&nbsp;&nbsp;&nbsp;<input name="audit" type="radio" value="0" />未审核</cite></li>
   			 <li><label>使用时间：</label><input id="datebut" style="width: 245px;" name="" type="text" class="dfinput" onclick="jeDate({dateCell:'#datebut',isTime:true,format:'YYYY-MM-DD 00:00'})" readonly/></li>
   			  <input id="id" style="width: 245px;border-style:none;display: none;" readonly="true" name="" type="text" class="dfinput" value="" />
   			 <li><label>预定人名称：</label><input id="indentName" style="width: 245px;" name="" type="text" class="dfinput" value="程先生" /></li>
       		<li><label>预定人电话：</label><input id="telphone" style="width: 245px;" name="" type="text" class="dfinput" value="17778888999" /></li>
       		<li><label>身份证号码：</label><input id="identification" style="width: 245px;" name="" type="text" class="dfinput" value="4036" /></li>
       		
        	</ul>
        </div>
        
        <div class="tipbtn1">
        <input name="" type="button"  class="sure1" value="提交订单" onclick="OrderAdd()"/>&nbsp;
        <input name="" type="button"  class="cancel" value="取消订单" />
        </div>
    
    </div>
    	<form action="TreeUpSpec.do" method="post" onsubmit="return TreeUpCheck(this)" enctype="multipart/form-data" target="y1iframe">
		<div class="modal1" id="mymodal" style="height:582px;margin-top:80px;">
			<div class="modal1-dialog">
				<div class="modal1-content"
					style="width: 510px;height:515px;/* margin-top:100px;left:-40%; */">
					<div class="modal1-header ">
						<h4 class="modal1-title label1" id="stname">景点1</h4>
					</div>
					<div class="modal1-body" style=" height:400px;overflow-y:auto;padding: 10px;padding-top: 20px;padding-right: 20px;">
						<!-- <table	style="margin-left:20px;margin-bottom:25px;margin-top:25px;"> -->
						
						 <ul class="forminfo" id="Tickeforminfo">
						 	<li style="padding: 10px;padding-left: 0px;"><div style="height: 200px;width: 100%;"> <img id="lunbo" src="images/img-2.jpg" style="height:100%;width:100%;-webkit-border-radius: 8px;"/></div></li>
    						<li><label class="label1">景点名称：</label><label class="label1">景点1</label></li>
    						<li><label class="label1">门票价格：</label><label  class="label1">388￥</label></li>
    						<li><label class="label1" style="float: inherit;">景点描述：</label><div class="div1">&nbsp;&nbsp;&nbsp;&nbsp;景点西溪国家湿地公园坐落于浙江省杭州市区西部，离杭州主城区武林门只有6公里，距西湖仅5公里。西溪国家湿地公园总面积约为11.5平方公里，分为东部湿地生态保护培育区、中部湿地生态旅游休闲区和西部湿地生态景观封育区。</div></li>
    					
    					 </ul>
					</div>
					<div class="modal1-footer">
						<a onclick="click1(1)"><button type="button" class="btn btn-default "  style="width:60px;-webkit-border-radius: 8px;">删除</button></a>
						<button type="button" class="btn btn-default" data-dismiss="modal" style="width:60px;-webkit-border-radius: 8px;">关闭</button>
					</div>
				</div>
			
			</div>
		
		</div>
	
	</form> 
	   <div id="prompt" style="z-index: 9999999" >
	    	
	     </div>
<script type="text/javascript" src="js/js/ticket.js"></script>
	<script type="text/javascript">
		
		TicketList();
$(document).ready(function(){
  $("#quantity").blur(function(){
  	 var quantity = document.getElementById("quantity").value;
  	 var minprice = document.getElementById("minprice").value;
  	 document.getElementById("minprice1").value=quantity*minprice;
  });
 
});
	</script>
</body>
</html>
