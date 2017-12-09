
//加载文档
var info=null;
$(function(){

	var param=null;
	
	$("#query1").click(function(){
		 param={"name":$("#name").val(),"type":$("#type").val()};
		 selectPublicInformationList(param);
	});
	
	$(".paginItem").click(function(){
		var pageNo=$(this).attr("pageNo");
		if(pageNo<1){
			pageNo=1;
		}
		param={"name":$("#name").val(),"type":$("#type").val(),"pageNo":pageNo};
		selectPublicInformationList(param);
	});
	selectPublicInformationList(param);
	
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

   function selectPublicInformationList(param){

	   $.ajax({
			url: 'getPublicinformationMlxcList.json',
			type: 'POST',
			data:param,
			dataType: 'json',
			//timeout: 1000,
			error: function(){
				alert("加载列表失败，请重试");
			},
			success: function(result){
				info=result.publicinformationMlxcs;
				var data="";
				
				for(var i=0;i<result.publicinformationMlxcs.length;i++){
					data+=" <tr>     " +
							"  <td>"+result.publicinformationMlxcs[i].type+"</td>" +
							"<td>"+result.publicinformationMlxcs[i].title+"</td>" +
							" <td>"+format(result.publicinformationMlxcs[i].publishtime)+"</td>" +
							"<td><a class='tablelink' onclick='showInformationInfo("+result.publicinformationMlxcs[i].publicinformationId+")'>查看</a>" +
									"<a class='tablelink' style='margin-left: 15px;' onclick='click1(1)'> 删除</a></td>" +
							"</tr> "
				}
				$("#publicinformationMlxcs").html(data);
				if(result.publicinformationMlxcs.length<=0){
					Prompt("很抱歉！暂无数据...");
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


  function showInformationInfo(id){
		for(var i=0;i<info.length;i++){

			if(info[i].publicinformationId==id){
				imglist();
				lunbotu(info[i].photo1,info[i].photo2,info[i].photo3,info[i].photo4,info[i].photo5);
				
				$("#stname1").html(info[i].title);
				$("#stname").html(info[i].title);
				$("#content1").html(info[i].content);
			}
		}
   		
   }

 function imglist(){	
	$("#mymodal").modal("toggle");
	lunbo1();
}
function click1(type){
	if(type==1){
		var click = document.getElementById("click");
		click.style.display="block";
		var mymodal = document.getElementById("mymodal");
		mymodal.style.zIndex="9";
	}
	if(type==2){
		var click = document.getElementById("click");
		click.style.display="none";
		var mymodal = document.getElementById("mymodal");
		mymodal.style.zIndex="9999";
		$("#mymodal").modal("toggle");
	}
	if(type==3){
		var click = document.getElementById("click");
		click.style.display="none";
		var mymodal = document.getElementById("mymodal");
		mymodal.style.zIndex="9999";
	}
	
}
function lunbotu(img1,img2,img3,img4,img5){
	
	var list = [];
	var imgs;
	if(img1!=""){
		imgs=img1;
		list.push(imgs);
	}
	if(img2!=""){
		imgs=img2;
		list.push(imgs);
	}
	if(img3!=""){
		imgs=img3;
		list.push(imgs);
	}
	if(img4!=""){
		imgs=img4;
		list.push(imgs);
	}
	if(img5!=""){
		imgs=img5;
		list.push(imgs);
	}
	lunbo1(list);
}
	var img = [];
	function lunbo1(list){
		if(list!=undefined){
			img=list;
		}	
		
		var lb = document.getElementById("lunbo");
		lb.src="http://localhost/"+img[0]+"";
		 if(img.length==1){
			 lunbo2(img[0].imgs);
			 return false;
		 }
		 if(img.length==2){
			setTimeout('lunbo2()',1000); 
			setTimeout('lunbo1()',2000); 
		 }
		 if(img.length==3){
			setTimeout('lunbo2()',1000); 
			setTimeout('lunbo3()',2000); 
			setTimeout('lunbo1()',3000);
		 }
		 if(img.length==4){
			 setTimeout('lunbo2()',1000); 
			 setTimeout('lunbo3()',2000); 
			 setTimeout('lunbo4()',3000); 
			 setTimeout('lunbo1()',4000); 
		 }
		if(img.length==5){
			setTimeout('lunbo2()',1000); 
			setTimeout('lunbo3()',2000); 
			setTimeout('lunbo4()',3000); 
			setTimeout('lunbo5()',4000); 
			setTimeout('lunbo1()',5000); 
		}
		
	}
	function lunbo2(){
		var lb = document.getElementById("lunbo");
		lb.src="http://localhost:8080/"+img[1]+"";
	}
	function lunbo3(){
		var lb = document.getElementById("lunbo");
		lb.src="http://localhost:8080/"+img[2]+"";
	}
	function lunbo4(){
		var lb = document.getElementById("lunbo");
		lb.src="http://localhost:8080/"+img[3]+"";
	}
	function lunbo5(){
		var lb = document.getElementById("lunbo");
		lb.src="http://localhost:8080/"+img[4]+"";
	}
	
	

	function yin(can){
		var div1 = document.getElementById("div1");
		var div2 = document.getElementById("div2");
		var div3 = document.getElementById("div3");
		if(can==1){
			div1.style.display="block";
			div2.style.display="none";
			div3.style.display="none"; 
		}
		if(can==2){
			div1.style.display="none";
			div2.style.display="block";
			div3.style.display="none"; 
		}
		if(can==3){
			div1.style.display="none";
			div2.style.display="none";
			div3.style.display="block"; 
		}
	}
	
	//弹出框
	function tanchu(){
		$(".click").click(function(){
		  $(".tip").fadeIn(200);
		  });
		  $(".click1").click(function(){
		  $(".tip1").fadeIn(200);
		  });
		  $(".tiptop a").click(function(){
		  $(".tip,.tip1").fadeOut(200);
		});
		
		  $(".sure").click(function(){
		  $(".tip,.tip1").fadeOut(100);
		});
		
		  $(".cancel").click(function(){
		  $(".tip,.tip1").fadeOut(100);
		});
	}
	

	//提示框
	function Prompt(type){
		if(type==1){
			document.getElementById("yin").style.display="none";
			return false;
		}
		if(type==2){
			$(".sure").click(function(){
			  $(".tip,.tip1").fadeOut(100);
			})
			return false;
		}
		var shu;
		if(type=="订单添加成功！"){
	    	shu=2;
	    }else{
	    	shu=1;
	    }
		//document.getElementById("prompt").style.display="block";
	    var html="";
	    html=html+"<div class=\"tip\" id=\"yin\" style=\"display:block;\">"+ 
		"<div class=\"tiptop\"><span>提示信息</span><a onclick='Prompt("+shu+")'></a></div>"+ 	            
		"<div class=\"tipinfo\">"+ 
	    "<span><img src=\"images/ticon.png\" /></span>"+ 
	    "<div class=\"tipright\">"+ 
	    "<p>"+type+"</p>"+ 
	    "<cite>点击确定按钮 ，关闭提示信息弹出框。</cite>"+ 
	    "</div>"+ 
	    "</div>"+ 	            
	    "<div class=\"tipbtn\">";	    	    
	    html=html+"<input style=\"margin-left: 40%;\" type=\"button\" class=\"sure\" value=\"确定\" onclick=\"Prompt("+shu+")\"/>"; 
	    html=html+"</div>"+    
	    "</div>";
	    document.getElementById("prompt").innerHTML=html;
	    
	}