
//加载文档
$(function(){
	
	
	var param=null;
	$("#query").click(function(){
		 param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val()};
		 selectlodgeCheckins(param);
	});
	
	$(".paginItem").click(function(){
		var pageNo=$(this).attr("pageNo");
		if(pageNo<1){
			pageNo=1;
		}
		param={"begintime":$("#begintime").val(),"endtime":$("#endtime").val(),"name":$("#name").val(),"pageNo":pageNo};
		selectlodgeCheckins(param);
	});
	

	selectlodgeCheckins(param);

	//时间戳转换成日期

	function add0(m){return m<10?'0'+m:m }
	function format(shijianchuo){
		var time = new Date(shijianchuo);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		var mm = time.getMinutes();
		var s = time.getSeconds();
		return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
	} 
   function selectlodgeCheckins(param){
	   
	   $.ajax({
			url: 'getLodgeCheckinList.json',
			type: 'POST',
			data:param,
			dataType: 'json',
			//timeout: 1000,
			error: function(){
				alert("加载列表失败，请重试");
			},
			success: function(result){
				var data="";
				for(var i=0;i<result.lodgeCheckins.length;i++){
					if(result.lodgeCheckins[i].audit==1){
						result.lodgeCheckins[i].audit='<font color=\"green\">已审核</font>';
					}else{
						result.lodgeCheckins[i].audit='<font color=\"red\">未审核</font>';
					}
					if(result.lodgeCheckins[i].pay==1){
						result.lodgeCheckins[i].pay='<font color=\"green\">已付款</font>';
					}else{
						result.lodgeCheckins[i].pay='<font color=\"red\">未付款</font>';
					}
					data+=" <tr>     " +
							"  <td>"+result.lodgeCheckins[i].serviceroom+"</td>" +
							"<td>"+result.lodgeCheckins[i].name1+"</td>" +
							" <td>"+format(result.lodgeCheckins[i].begintime)+"</td>" +
							"<td>"+result.lodgeCheckins[i].telphone1+"</td>" +
							" <td>"+result.lodgeCheckins[i].identification1+"</td>" +
							" <td>"+result.lodgeCheckins[i].manufacturer+"</td>" 
				}
				$("#lodgeCheckins").html(data);
				if(result.lodgeCheckins.length<=0){
					alert("很抱歉！暂无数据...");
				}
			
				var pagehtml="<div  class='message' >共<i class='blue'>"+result.page.totalCount+"</i>条记录，当前显示第&nbsp;<i class='blue'>"+result.page.pageNo+"&nbsp;</i>页</div>";
				var page1,page2,page3,page4;
				if(result.page.pageNo<=1){
					page1=1;
					page2=2;
					page3=3;
					page4=4;
				}else if(result.page.totalPageCount=result.page.pageNo){
					page1=result.page.pageNo-3;
					page2=result.page.pageNo-2;
					page3=result.page.pageNo-1;
					page4=result.page.pageNo;
					if(result.page.totalPageCount<4){
						page1=1;
						page2=2;
						page3=3;
						page4=4;
					}
				}else{
					page1=result.page.pageNo;
					page2=result.page.pageNo+1;
					page3=result.page.pageNo+2;
					page4=result.page.pageNo+3;
					if(result.page.totalPageCount<4){
						page1=1;
						page2=2;
						page3=3;
						page4=4;
					}
				}
				$("#page1").html(page1);
				$("#page2").html(page2);
				$("#page3").html(page3);
				$("#page4").html(page4);
				
				$("#paginItem1").attr("pageNo",page1);
				$("#paginItem2").attr("pageNo",page2);
				$("#paginItem3").attr("pageNo",page3);
				$("#paginItem4").attr("pageNo",page4);
				$("#paginItemjian").attr("pageNo",result.page.pageNo-1);
				$("#paginItemjia").attr("pageNo",result.page.pageNo+1);
			
				//当前页码添加背景颜色
				$(".paginItem").each(function(){
					$(this).removeClass("current");
					if($(this).attr("pageNo")==result.page.pageNo){
						$(this).attr("class","paginItem current");
					}
				});
				
		    	$("#page").html(pagehtml);
			}
		});
		
   };
});
