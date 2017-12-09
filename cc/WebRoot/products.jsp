<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'products.jsp' starting page</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link href="css/select.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<link rel="stylesheet" href="css/zijian.css" type="text/css"></link>
<script type="text/javascript" src="js/zijian.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>	
<script type="text/javascript" src="jiaoben/jedate/jedate.js"></script>
<script type="text/javascript" src="js/select-ui.min.js"></script>

<script type="text/javascript" src="js/json2.js"></script>
<script language="javascript">
$(function(){	
	//导航切换
	$(".imglist li").click(function(){
		$(".imglist li.selected").removeClass("selected")
		$(this).addClass("selected");
	})	
})	
</script>
<script type="text/javascript">
$(document).ready(function(e) {
    $(".select1").uedSelect({
		width : 145			  
	});
	$(".select2").uedSelect({
		width : 167  
	});
	$(".select3").uedSelect({
		width : 100
	});
});
</script>
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
a{
	cursor: pointer;
}
</style>	
</head>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a>商城管理</a></li>
    <li><a>商城产品</a></li>
    </ul>
    <span>||</span>
    <span>&nbsp;</span>
    <ul class="placeul">
    <li><a onclick="LodgeList()">民宿</a></li>
    <li><a onclick="GentryList()">文创</a></li>
    <li><a onclick="SpecialtiesList()">农产品</a></li>
    </ul>
     <ul class="toolbar1 placeul" style="margin-top: 2px;margin-right: 6%;">
        <li class="click"><span><img src="images/t01.png"  /></span>添加</li>
        </ul>
    </div>
    
    <div class="rightinfo">
    
       <div id="prompt"  style="z-index: 9999999" >
	    	
	     </div>
    
    <div id="div1" style="display:block;">
    	 <ul class="imglist" id="LogdeID">    
	    	
	    </ul>  
	    <div class="pagin" id="fenye">
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

    
    
     <div class="tip" id="click" >
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
    
    
     <div class="tip1" style="z-index: 9999;">
    	<div class="tiptop"><span>填写订单</span><a></a></div>
        
      <div class="tipinfo1" style="overflow-y:auto;">
         <ul id="LodgeOrder" class="forminfo" style="margin-left: 0px;">
        	 
       		
        	</ul>
        	<ul class="forminfo" style="margin-left: 0px;display: none;">
        	 <li><label>房价名称：</label><input style="width: 245px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="客房保洁" /></li> 
        	 <li><label>房间类型：</label><input style="width: 245px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="客房保洁" /></li>
			 <li><label>房间类型：</label>  
			    <div class="vocation">
			    <select class="select1">
			    <option>大房</option>
			    <option>标间</option>
			    <option>单间</option>
			    </select>
			    </div>
			    
			    </li>       	 
        	 <li><label>预定数量：</label> <input style="width: 60px;" class="dfinput" type="number" min="0" max="1000" step="2" value="1">&nbsp;&nbsp;&nbsp;间</li>
        	 <li><label>房间价格：</label><input style="width: 45px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="100" />元/张</li>
        	 <li><label>总价格：</label><input style="width: 45px;border-style:none;" readonly="true" name="" type="text" class="dfinput" value="1000" />元</li>
	        <li><label>付款标识：</label><cite><input name="radio1" type="radio" value="" checked="" />已付款&nbsp;&nbsp;&nbsp;&nbsp;<input name="radio1" type="radio" value="" />未付款</cite></li>
			<li><label>审核标识：</label><cite><input name="radio2" type="radio" value="" checked="" />已审核&nbsp;&nbsp;&nbsp;&nbsp;<input name="radio2" type="radio" value="" />未审核</cite></li>
   			 <li><label>入住时间：</label><input id="datebut" style="width: 245px;" name="" type="text" class="dfinput" onclick="jeDate({dateCell:'#datebut',isTime:true,format:'YYYY-MM-DD'})" readonly/></li>
   			 <li><label>入住房间号：</label><input style="width: 245px;" name="" type="text" class="dfinput" value="程先生" /></li>
   			 <li><label>预定人名称：</label><input style="width: 245px;" name="" type="text" class="dfinput" value="程先生" /></li>
       		<li><label>预定人电话：</label><input style="width: 245px;" name="" type="text" class="dfinput" value="110" /></li>
       		<li><label>身份证号码：</label><input style="width: 245px;" name="" type="text" class="dfinput" value="4036" /></li>
       		
        	</ul>
        </div>
        <div class="tipbtn1">
        <a id="tijiao"> <input  name="" type="button"  class="sure1" value="提交订单" onclick=""/></a>&nbsp;
        <input name="" type="button"  class="cancel" value="取消订单" />
        </div>
    
    </div>
    
    </div>
    	<form action="TreeUpSpec.do" method="post" onsubmit="return TreeUpCheck(this)" enctype="multipart/form-data" target="y1iframe">
		<div class="modal1" id="mymodal" style="height:582px;margin-top:80px;">
			<div class="modal1-dialog">
				<div class="modal1-content"
					style="width: 510px;height:515px;/* margin-top:100px;left:-40%; */">
					<div class="modal1-header ">
						<h4 class="modal1-title label1" id="stname"></h4>
					</div>
					<div class="modal1-body" style=" height:400px;overflow-y:auto;padding: 10px;padding-top: 20px;padding-right: 20px;">
						<!-- <table	style="margin-left:20px;margin-bottom:25px;margin-top:25px;"> -->
						
						 <ul  id="Lodgeforminfo" class="forminfo">
						 
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
<script type="text/javascript" src="js/js/lodge.js"></script>
<script type="text/javascript" src="js/js/gentry.js"></script>
<script type="text/javascript" src="js/js/specialties.js"></script>
	<script type="text/javascript">
	LodgeList();
   function chkvalue(type){
  	if(type==1){
  		var minprice = $('.tip1 input[name="minprice"]:checked ').val();
  	}else{
  		var minprice = document.getElementById("minprice").value;
  	}
  	 var quantity = document.getElementById("quantity").value;
  	 
  	 document.getElementById("minprice1").value=quantity*minprice;
  };
 
 

    </script>
</body>
</html>
