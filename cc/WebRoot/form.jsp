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
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.idTabs.min.js"></script>
<script type="text/javascript" src="js/select-ui.min.js"></script>
<script type="text/javascript" src="editor/kindeditor.js"></script>
<script type="text/javascript">
    KE.show({
        id : 'content7',
        cssPath : './index.css'
    });
  </script>
  
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
.btn-file { /*  上传按钮*/
	position: relative;
	overflow: hidden;
}

.btn-file input[type=file] {
	position: absolute;
	top: 0;
	right: 0;
	min-width: 100%;
	min-height: 100%;
	font-size: 100px;
	text-align: right;
	filter: alpha(opacity =   0);
	opacity: 0;
	outline: none;
	background: white;
	cursor: inherit;
	display: block;
}

</style>
<script type="text/javascript" src="js/zijian.js"></script></head>

<body>

	<div class="place">
    <span>位置：</span>
    <ul class="placeul">
    <li><a >商城管理</a></li>
    <li><a href="mallService.jsp">商城服务</a></li>
    <li><a >添加</a></li>
    </ul>
    </div>
    
    <div id="usual1" class="usual">
    
   	<div id="tab1" class="formbody tabson">
    
    <div class="formtitle"><span>基本信息</span></div>
    
    <ul class="forminfo">
    <li><label>服务名称</label><input name="" type="text" class="dfinput" value="资讯标题" /></li>
   
    <li><label>服务类型</label>  
    <div class="vocation">
    <select class="select1">
    <option>客服保洁</option>
    <option>厨房清洁</option>
    <option>客房布草</option>
    </select>
    </div>
    
    </li>
    
    <li><label>服务价格</label><input name="" type="text" class="dfinput" value="资讯标题" /></li>
    
    <li><label>图片1</label><input id="value1" name="" type="text" class="dfinput" /><i><input id="picture1" style="width:60px;-webkit-border-radius: 8px;" type="button" class="btn" value="浏览.."/></i></li>
    <input id="file1" type="file" style="display: none;" onchange="indexloadImageFile();"/>
    <li><label>图片2</label><input id="value2" name="" type="text" class="dfinput" /><i><input id="picture2" name="" style="width:60px;-webkit-border-radius: 8px;" type="button" class="btn" value="浏览.."/></i></li>
    <input id="file2" type="file" style="display: none;" onchange="indexloadImageFile();"/>
    <li><label>图片3</label><input id="value3" name="" type="text" class="dfinput" /><i><input id="picture3" name="" style="width:60px;-webkit-border-radius: 8px;" type="button" class="btn" value="浏览.."/></i></li>
     <input id="file3" type="file" style="display: none;" onchange="indexloadImageFile();"/>
    <li><label>图片4</label><input id="value4" name="" type="text" class="dfinput" /><i><input id="picture4" name="" style="width:60px;-webkit-border-radius: 8px;" type="button" class="btn" value="浏览.."/></i></li>
     <input id="file4" type="file" style="display: none;" onchange="indexloadImageFile();"/>
    <li><label>图片5</label><input id="value5" name="" type="text" class="dfinput" /><i><input id="picture5" name="" style="width:60px;-webkit-border-radius: 8px;" type="button" class="btn" value="浏览.."/></i></li>
     <input id="file5" type="file" style="display: none;" onchange="indexloadImageFile();"/>
    <li><label>提供商</label><input name="" type="text" class="dfinput" value="资讯标题" /></li>
    <li><label>内容描述</label><textarea name="" cols="" rows="" class="textinput"></textarea></li>

    <li><label>&nbsp;</label><input name="" type="button" class="btn" value="马上发布" onclick="Prompt('此功能暂未开放！');"/></li>
    </ul>
    
    </div> 
    
    
    </div>
    	<script type="text/javascript"> 
      $("#usual1 ul").idTabs(); 
      var picture="";
      var file="";
      var indexloadImageFile = (function () { 
		if (window.FileReader){ 
		var oPreviewImg = null, oFReader = new window.FileReader(), 
		rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i; 
		
		oFReader.onload = function (oFREvent) { 
	/* 	var newPreview = document.getElementById("y3imagePreview");
		
		newPreview.src = oFREvent.target.result;  */
		
		}; 
		
		return function () { 
		var aFiles = document.getElementById("file1").files; 
		document.getElementById("value1").value=document.getElementById("file1").value;
		document.getElementById("value2").value=document.getElementById("file2").value;
		document.getElementById("value3").value=document.getElementById("file3").value;
		document.getElementById("value4").value=document.getElementById("file4").value;
		document.getElementById("value5").value=document.getElementById("file5").value;
		if (aFiles.length === 0) { return; } 
		if (!rFilter.test(aFiles[0].type)) { alert("你必须选择一个有效的图像文件!"); return; } 
		oFReader.readAsDataURL(aFiles[0]); 
		} 
		
		} 
		if (navigator.appName === "Microsoft Internet Explorer") { 
		return function () { 
		alert(document.getElementById("file1").value); 
		document.getElementById("y3imagePreview").filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = document.getElementById("file1").value; 
		
		} 
		} 
		})(); 
       $("#picture1").click(function(){
	      	$("#file1").trigger('click');
	   });
	   $("#picture2").click(function(){
	      	$("#file2").trigger('click');
	   });
	   $("#picture3").click(function(){
	      	$("#file3").trigger('click');
	   });
	   $("#picture4").click(function(){
	      	$("#file4").trigger('click');
	   });   
       $("#picture5").click(function(){
	      	$("#file5").trigger('click');
	   });
    </script>
    
    <script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	</script>
</body>
</html>
