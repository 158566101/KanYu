<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'right.jsp' starting page</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
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


</head>


<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a href="#">数据表</a></li>
    </ul>
    </div>
    
    <div class="rightinfo">
    
    <div class="tools" >
    
    	<ul class="toolbar">
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
        <th>消费类型</th>
        <th>产品名称</th>   
        <th>创建时间</th>   
        <th>客户名称</th>
        <th>客户联系方式</th>
        <th>客户身份证号码</th>
        <th>提供商</th>
        <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>       
        <td>20130908</td>
        <td>客房保洁</td>
        <td>优宿5号民宿</td>
      	<td>2013-09-09 15:05</td>
        <td>程先生</td>
        <td>18862549872</td>
        <td>463598199208038521</td>
        <td>优宿商家</td>
        <td><a href="#" class="tablelink">查看</a>     <a href="#" class="tablelink"> 删除</a></td>
        </tr> 
        <tr>       
        <td>20130908</td>
        <td>客房保洁</td>
        <td>优宿5号民宿</td>
      	<td>2013-09-09 15:05</td>
        <td>程先生</td>
        <td>18862549872</td>
        <td>463598199208038521</td>
        <td>优宿商家</td>
        <td><a href="#" class="tablelink">查看</a>     <a href="#" class="tablelink"> 删除</a></td>
        </tr> 
        <tr>       
        <td>20130908</td>
        <td>客房保洁</td>
        <td>优宿5号民宿</td>
      	<td>2013-09-09 15:05</td>
        <td>程先生</td>
        <td>18862549872</td>
        <td>463598199208038521</td>
        <td>优宿商家</td>
        <td><a href="#" class="tablelink">查看</a>     <a href="#" class="tablelink"> 删除</a></td>
        </tr> 
        <tr>       
        <td>20130908</td>
        <td>客房保洁</td>
        <td>优宿5号民宿</td>
      	<td>2013-09-09 15:05</td>
        <td>程先生</td>
        <td>18862549872</td>
        <td>463598199208038521</td>
        <td>优宿商家</td>
        <td><a href="#" class="tablelink">查看</a>     <a href="#" class="tablelink"> 删除</a></td>
        </tr> 
        </tbody>
    </table>
    
   
    <div class="pagin">
    	<div class="message">共<i class="blue">1256</i>条记录，当前显示第&nbsp;<i class="blue">2&nbsp;</i>页</div>
        <ul class="paginList">
        <li class="paginItem"><a href="javascript:;"><span class="pagepre"></span></a></li>
        <li class="paginItem"><a href="javascript:;">1</a></li>
        <li class="paginItem current"><a href="javascript:;">2</a></li>
        <li class="paginItem"><a href="javascript:;">3</a></li>
        <li class="paginItem"><a href="javascript:;">4</a></li>
        <li class="paginItem"><a href="javascript:;">5</a></li>
        <li class="paginItem more"><a href="javascript:;">...</a></li>
        <li class="paginItem"><a href="javascript:;">10</a></li>
        <li class="paginItem"><a href="javascript:;"><span class="pagenxt"></span></a></li>
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
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	</script>
</body>
</html>