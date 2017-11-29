<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'service.jsp' starting page</title>
    
<link rel="stylesheet" href="css/zijian.css" type="text/css"></link></head>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/select.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>

<script type="text/javascript">
$(document).ready(function(){
  $(".click").click(function(){
  $(".tip").fadeIn(200);
  });
  
  $(".tiptop a").click(function(){
  $(".tip").fadeOut(200);
});

  $(".sure").click(function(){
  $(".tip").fadeOut(100);
});

  $(".cancel").click(function(){
  $(".tip").fadeOut(100);
});

});
</script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="jiaoben/jedate/jedate.js"></script>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="#">票务账单</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    
   <div class="tools" >
	     <ul class="seachform">	    
		    <li><label>综合查询</label><input id="begintime" name="" type="text" placeholder="开始时间" class="scinput" onclick="jeDate({dateCell:'#begintime',isTime:true,format:'YYYY-MM-DD'})" readonly/></li>
		    <li><input name="" type="text" id="endtime" placeholder="结束时间" class="scinput" onclick="jeDate({dateCell:'#endtime',isTime:true,format:'YYYY-MM-DD'})" readonly/><label>至</label></li>
		    <li><input name="" type="text" id="name" placeholder="请输入客户名称" class="scinput" /></li>
		    <li><label>&nbsp;</label><input name="" type="button" class="scbtn" id="query" value="查询"/></li>	

    
	    </ul>
    	<ul class="toolbar1" style="display:none;">
        <li class="click"><span><img src="images/t01.png" /></span>添加</li>
        <li class="click"><span><img src="images/t02.png" /></span>修改</li>
        <li style="display:none;"><span><img src="images/t03.png" /></span>删除</li>
        <li style="display:none;"><span><img src="images/t04.png" /></span>统计</li>
        </ul>
        
        
        <ul class="toolbar1" style="display:none;">
        <li><span><img src="images/t05.png" /></span>设置</li>
        </ul>
    
    </div>
    
    
    <table class="tablelist">
    	<thead>
    	<tr>
        <th>订单编号<i class="sort"><img src="images/px.gif" /></i></th>        
        <th>景点名称</th>      
        <th>预定数量</th> 
        <th>单价</th>   
        <th>总价格</th>    
        <th>客户名称</th>
        <th>客户联系方式</th>
        <th>客户身份证号码</th>
        <th>创建时间</th>
        <th>审核标识</th>
        <th>付款标识</th>
        <th>提供商</th>
        <th>操作</th>
        </tr>
        </thead>
        <tbody id="ticketorders">
				
        </tbody>
    </table>
    
   
    <div class="pagin">
    	<span id="page"></span>
        <ul class="paginList">
        <li id="paginItemjian" class="paginItem" ><a  href="javascript:;"><span class="pagepre"></span></a></li>
        <li id="paginItem1" class="paginItem"><a id="page1" href="javascript:;">1</a></li>
        <li id="paginItem2" class="paginItem current "><a id="page2" href="javascript:;">2</a></li>
        <li id="paginItem3" class="paginItem"><a id="page3" href="javascript:;">3</a></li>
        <li  id="paginItem4" class="paginItem"><a id="page4" href="javascript:;">4</a></li>
        <li id="paginItemjia" class="paginItem"><a  href="javascript:;"><span class="pagenxt"></span></a></li>
        </ul>
    </div>
    
    
    <div class="tip">
    	<div class="tiptop"><span>提示信息</span><a></a></div>
        
      <div class="tipinfo">
        <span><img src="images/ticon.png" /></span>
        <div class="tipright">
        <p>是否确认对信息的修改 ？</p>
        <cite>如果是请点击确定按钮 ，否则请点取消。</cite>
        </div>
        </div>
        
        <div class="tipbtn">
        <input name="" type="button"  class="sure" value="确定" />&nbsp;
        <input name="" type="button"  class="cancel" value="取消" />
        </div>
    
    </div>
    	
    	<!--提示框  -->
      <div id="prompt" style="z-index: 9999999"  >
	    	
	  </div>
    
    
    
    </div>
    <div class="tip1" style="z-index: 9;">
    	<div class="tiptop"><span>填写订单</span><a onclick="tanchu()"></a></div>
        
      <div class="tipinfo1" style="overflow-y:auto;">
         <ul id="dingdan" class="forminfo" style="margin-left: 0px;">
        	 <li><label>服务名称：</label><input id="name" style="width: 245px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="客房保洁" /></li>
        	 <input id="id" style="width: 245px;border-style:none;display: none;" readonly="true" name="" type="text" class="dfinput" value="" />
        	 <li><label>服务次数</label> <input style="width: 30px;border-style:none;" readonly="true" class="dfinput" type="number" min="0" max="10" step="2" value="1">次</li>
        	 <li><label>服务价格：</label><input id="minprice" style="width: 45px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="100" />元</li>
        	 <li><label>服务类型：</label><input id="type" style="width: 145px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="客房保洁" /></li>
	        <li><label>付款标识：</label><cite><input name="pay" type="radio" value="1" checked="" />已付款&nbsp;&nbsp;&nbsp;&nbsp;<input name="pay" type="radio" value="0" />未付款</cite></li>
			<li><label>审核标识：</label><cite><input name="audit" type="radio" value="1" checked="" />已审核&nbsp;&nbsp;&nbsp;&nbsp;<input name="audit" type="radio" value="0" />未审核</cite></li>
			 <li><label>提供商：</label><input id="manufacturer" style="width: 245px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="优宿服务有限公司" /></li>
   			 <li><label>服务时间：</label><input id="begintime" style="width: 245px;" name="" type="text" class="dfinput" onclick="jeDate({dateCell:'#begintime',isTime:true,format:'YYYY-MM-DD hh:00:00'})" readonly/></li>
   			 <li><label>服务房间号：</label><input id="serviceRoom" style="width: 245px;" name="" type="text" class="dfinput" value="" /></li>
   			 <li><label>预定人名称：</label><input id="indentName" style="width: 245px;" name="" type="text" class="dfinput" value="" /></li>
       		<li><label>预定人电话：</label><input id="telphone" style="width: 245px;" name="" type="text" class="dfinput" value="" /></li>
        	</ul>
        </div>
        
        <div class="tipbtn1">
        <input name="" type="button"  class="sure1" value="修改订单" onclick="updateTicketAdd()" />&nbsp;
        <input name="" type="button"  class="cancel" value="取消修改" onclick="tanchu()" />
        </div>
    
    </div>
    <script type="text/javascript" src="js/zijian.js"></script>

<script type="text/javascript" src="js/js/ticketOrder.js"></script>
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
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
