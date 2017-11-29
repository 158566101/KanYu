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
<script type="text/javascript" src="js/select-ui.min.js"></script>
  
<script type="text/javascript">
$(document).ready(function(e) {
    $(".select1").uedSelect({
		width : 345			  
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
a {
	cursor: pointer;
}
.label1 {
	font-weight: 700;
	font-size: 1.3em;
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
    <li><a >第三方</a></li>
    <li><a >公共信息</a></li>
    </ul>
    </div>
    
    <div class="formbody">
    
    
    <div id="usual1" class="usual"> 
  
    
 
    
  	<div id="tab2" class="tabson">
    
    
    <ul class="seachform">
    
    <li><label>信息标题</label><input placeholder="请输入标题名称"  id="name" name="" type="text" class="scinput" /></li>
     <li><label>类型</label> 
    <div class="vocation">
	    <select id="type" class="select3">
	    <option value="">全部</option>
	    <option value="类型1">类型1</option>
	    <option value="类型2">类型2</option>
	    </select>
    </div>
    </li>

    </li>
    
    <li><label>&nbsp;</label><input id="query1"  name="" type="button" class="scbtn" value="查询"/></li>
    <li>
		   	 <ul class="toolbar1">
		   		 <li class="click toolbar"><span><img src="images/t01.png" /></span>添加</li>    
		  	  </ul>
		   </li>
    </ul>
    
    
    <table class="tablelist">
    	<thead>
    	<tr>  
    	<th>信息类型</th>
        <th>信息标题</th>        
        <th>发布时间</th>
        <th>操作</th>
        </tr>
        </thead>
        <tbody id="publicinformationMlxcs">
        <tr>        
        <td>20130908</td>
        <td>王金平幕僚：马英九声明字字见血 人活着没意思</td>
       
        <td>2013-09-09 15:05</td>
        <td><a  class="tablelink" onclick="imglist()">查看</a>    <a class="tablelink" style="margin-left: 15px;" onclick="click1(1)"> 删除</a></td>
        </tr> 
        
        </tbody>
    </table>
    </div>  
       
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
    
 	</div>
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
    	<form action="TreeUpSpec.do" method="post" onsubmit="return TreeUpCheck(this)" enctype="multipart/form-data" target="y1iframe">
		<div class="modal1" id="mymodal" style="height:582px;margin-top:80px;">
			<div class="modal1-dialog">
				<div class="modal1-content"
					style="width: 510px;height:550px;/* margin-top:100px;left:-40%; */">
					<div class="modal1-header ">
						<h4 class="modal1-title label1" id="stname">景点1</h4>
					</div>
					<div class="modal1-body" style=" height:400px;overflow-y:auto;padding: 10px;padding-top: 20px;padding-right: 20px;">
						<!-- <table	style="margin-left:20px;margin-bottom:25px;margin-top:25px;"> -->
						
						 <ul class="forminfo">
						 	<li style="padding: 10px;padding-left: 0px;"><div style="height: 200px;width: 100%;"> <img id="lunbo" src="images/img-2.jpg" style="height:100%;width:100%;-webkit-border-radius: 8px;"/></div></li>
    						<li><label class="label1">景点名称：</label><label class="label1"><span id="stname1"></span></label></li>
    						<li><label class="label1" style="float: inherit;">景点描述：</label><div class="div1">&nbsp;&nbsp;&nbsp;&nbsp;<span id="content1"></span></div></li>
    					
    					 </ul>
					</div>
					<div class="modal1-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" style="width:60px;-webkit-border-radius: 8px;">关闭</button>
					</div>
				</div>
			
			</div>
		
		</div>
	
	</form> 
	    	<!--提示框  -->
      <div id="prompt" style="z-index: 9999999"  >
	    	
	  </div>

	<script type="text/javascript"> 
      $("#usual1 ul").idTabs(); 
    </script>
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	</script>
    
    </div>

    	  <script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

	  
	<script type="text/javascript" src="js/js/publicInformation.js"></script>
</body>
</html>
