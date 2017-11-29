<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/zijian.js"></script>

<script type="text/javascript" charset="UTF-8" src="js/js/ServiceProduct.js"></script>
<link rel="stylesheet" href="css/zijian.css" type="text/css"></link>
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
<script type="text/javascript" src="js/bootstrap.min.js"></script>	
<style type="text/css">
a{
	cursor: pointer;
}

</style>
<script type="text/javascript" src="jiaoben/jedate/jedate.js"></script>
</head>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a >商城管理</a></li>
    <li><a >商城服务</a></li>
    </ul>
     <ul class="toolbar1 placeul" style="margin-top: 2px;margin-right: 6%;">
        <a href="form.jsp"><li ><span><img src="images/t01.png" /></span>添加</li></a>
        </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools" style="display: none;">
    
    	<ul class="toolbar">
        <li class="click"><span><img src="images/t01.png" /></span>添加</li>
        <li class="" style="display: none;"><span><img src="images/t02.png" /></span>编辑</li>
        <li class="click" style="display: none;"><span><img src="images/t03.png" /></span>删除</li>
        <li class="click" style="display: none;"><span><img src="images/t04.png" /></span>统计</li>
        </ul>
        
        
        <ul class="toolbar1" style="display: none;">
        <li><span><img src="images/t05.png" /></span>设置</li>
        </ul>
    
    </div>
    
    
    <table class="imgtable">
    
    <thead>
    <tr>
    <th width="100px;">产品图片</th>
    <th>服务名称</th>
    <th>服务介绍</th>
    <th>价格</th>
    <th>提供商</th>
    <th>操作</th>
    <th>编辑</th>
    </tr>
    </thead>
    
    <tbody id="tbody">
  
   
    </tbody>
    
    </table>
    
    
    
    
    
   
    <div id="fenye" class="pagin">
    	<div class="message">共<i class="blue">1256</i>条记录，当前显示第&nbsp;<i class="blue">2&nbsp;</i>页</div>
        <ul class="paginList">
        <li class="paginItem"><a href="javascript:;"><span class="pagepre"></span></a></li>
        <li class="paginItem current" id="waterids1" value="1"><a href="javascript:;">1</a></li>
        <li class="paginItem" id="waterids2" value="2"><a href="javascript:;">2</a></li>
        <li class="paginItem" id="waterids3" value="3"><a href="javascript:;">3</a></li>
        <li class="paginItem" id="waterids4" value="4"><a href="javascript:;">4</a></li>

        <li class="paginItem"><a href="javascript:;"><span class="pagenxt"></span></a></li>
        </ul>
    </div>
 
    
    
    
    </div>
    
    <div class="tip1">
    	<div class="tiptop"><span>填写订单</span><a></a></div>
        
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
        <input name="" type="button"  class="sure1" value="提交订单" onclick="OrderAdd()" />&nbsp;
        <input name="" type="button"  class="cancel" value="取消订单" />
        </div>
    
    </div>
    <div id="prompt" style="z-index: 9999999"  >
	    	
	     </div>
<script type="text/javascript">
ServiceList();

  
</script>
</body>
</html>
