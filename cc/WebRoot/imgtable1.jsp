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
<script type="text/javascript" src="js/jquery.js"></script>
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
<script type="text/javascript" src="js/js/LodgeCheckin.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="jiaoben/jedate/jedate.js"></script></head>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="#">第三方</a></li>
    <li><a href="#">公安咨询</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
     <div class="tools" >
	     <ul class="seachform">	    
		    <li><label>综合查询</label><input id="begintime" name="" type="text" placeholder="开始时间" class="scinput" onclick="jeDate({dateCell:'#begintime',isTime:true,format:'YYYY-MM-DD'})" readonly/></li>
		    <li><input name="" type="text" id="endtime" placeholder="结束时间" class="scinput" onclick="jeDate({dateCell:'#endtime',isTime:true,format:'YYYY-MM-DD'})" readonly/><label>至</label></li>
		    <li><input name="" type="text" id="name" placeholder="请输入客户名称" class="scinput" /></li>
		    <li><label>&nbsp;</label><input name="" type="button" class="scbtn" id="query" value="查询"/></li>	
		   <li>
	    </ul>
    </div>
    
    <table class="tablelist">
    
    <thead>
    <tr>
    <th >房间号</th>
    <th>入住人</th>
    <th>入住时间</th>
    <th>手机号码</th>
    <th>身份证号码</th>
    <th>房屋供应商</th>
    </tr>
    </thead>
    
    <tbody id="lodgeCheckins">
		
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
        	<!--提示框  -->
      <div id="prompt" style="z-index: 9999999"  >
	    	
	  </div>
    </div>
    
<script type="text/javascript">
	$('.imgtable tbody tr:odd').addClass('odd');
	</script>
</body>
</html>
