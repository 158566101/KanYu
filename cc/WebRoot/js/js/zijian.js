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
				lb.src="http://120.55.98.170:8008/"+img[0]+"";
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
				lb.src="http://120.55.98.170:8008/"+img[1]+"";
			}
			function lunbo3(){
				var lb = document.getElementById("lunbo");
				lb.src="http://120.55.98.170:8008/"+img[2]+"";
			}
			function lunbo4(){
				var lb = document.getElementById("lunbo");
				lb.src="http://120.55.98.170:8008/"+img[3]+"";
			}
			function lunbo5(){
				var lb = document.getElementById("lunbo");
				lb.src="http://120.55.98.170:8008/"+img[4]+"";
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
	    	
	    	
	    	//分页
	    	var MEpage=1;
	    	var ts=10;
	    	function fenye(num,type,tiaoshu){
	    		if(tiaoshu!=undefined){
	    			ts=tiaoshu;
	    		}
	    		MEpage=num;
	    		var data=[];
	    		data = datas;
	    		var pageNo=num;
	    		var page;
	    		var count = data.length;
	    		var t = Math.ceil(count/ts);
	    		 if(pageNo>t){
	    				page=1;
	    				pageNo=1;
	    			}
	    			if(MEpage<1){
	    				page=t;
	    				pageNo=t;
	    			}
	    		var firstResult = (MEpage-1)*ts;
	    		var MaxResults = ts;
	    		var list=[];
	    		for(var i =firstResult;i<firstResult+MaxResults;i++){
	    			if(i>count-1)
	    				break;
	    			list.push(data[i]);
	    		}
	    		if(pageNo<4){
	    			page=4;
	    		}else{
	    			page=pageNo;
	    		}
	    		
	    		
	    		if(list==""){
	    			t=0;
	    		}
	    		if(MEpage>t && t!=0){
	    			 
	    		}
	    		
	    			var pd1=document.getElementById("waterids1").value;
	    			var pd2=document.getElementById("waterids2").value;
	    			var pd3=document.getElementById("waterids3").value;
	    			var pd4=document.getElementById("waterids4").value;	
	    		
	    		
	    		if(MEpage>pd4){
	    			if(MEpage>t){
	    				pd4=4;
	    				pd3=3;
	    				pd2=2;
	    				pd1=1;
	    			}else{
	    				pd4=MEpage;
	    				pd3=MEpage-1;
	    				pd2=MEpage-2;
	    				pd1=MEpage-3;
	    			}	    			
	    		}
	    		if(MEpage<pd4){
	    			if(MEpage<=4){
	    				pd4=4;
	    				pd3=3;
	    				pd2=2;
	    				pd1=1;
	    			}
	    			if(MEpage<=pd1){
	    				pd4=MEpage+3;
	    				pd3=MEpage+2;
	    				pd2=MEpage+1;
	    				pd1=MEpage;
	    			}
	    			if(MEpage==0){
	    				if(t<4){
	    					pd4=4;
	    	    			pd3=3;
	    	    			pd2=2;
	    	    			pd1=1;
	    				}else{
	    					pd4=t;
	    	    			pd3=t-1;
	    	    			pd2=t-2;
	    	    			pd1=t-3;
	    				}
	    				
	    			}
	    		}

	    		if(pd1==undefined){
	    			pd1=1;pd2=2;pd3=3;pd4=4;;
	    		}
	    		var html=" <tbody id=\"waterTbody\">";
	    		if(list.length==0){
	    			t=0;
	    		    page=4;
	    		}
	    		if(type=="商城服务"){
	    			ServiceList(list);
	    		}
	    		if(type=="商城民宿"){
	    			LodgeList(list);
	    		}
	    		if(type=="商城文创"){
	    			GentryList(list);
	    		}
	    		if(type=="商城农特产"){
	    			SpecialtiesList(list);
	    		}
	    	    if(pageNo==undefined){
	    			pageNo=0;	
	    		   }
	    		    
	    	    var htmls="<div class=\"message\">共<i class=\"blue\">"+t+"</i>页记录，当前显示第&nbsp;<i class=\"blue\">"+pageNo+"&nbsp;</i>页</div>"+
	    	    "<ul class=\"paginList\">"+ 
	    	    "<li class=\"paginItem\" onclick=\"fenye("+(pageNo-1)+",'"+type+"')\"><a href=\"javascript:;\"><span class=\"pagepre\"></span></a></li>";
	    		    
	    		  if(pageNo == pd1){
	    			  	htmls=htmls+  " <li class=\"paginItem current\" id=\"waterids1\"value=\""+(pd1)+"\" onclick=\"fenye("+(pd1)+",'"+type+"')\"><a href=\"javascript:;\">"+(pd1)+"</a></li>"; 
	    	    	    //htmls=htmls+  " <li class=\"paginItem current\" id=\"waterids1\" value=\""+(pd1)+"\" onclick=\"fenye("+(pd1)+")\"><a href=\"javascript:;\">"+(pd1)+"</a></li>"; 
	    	     }else{
	    	    	 	htmls=htmls+"<li class=\"paginItem\" id=\"waterids1\" value=\""+(pd1)+"\" onclick=\"fenye("+(pd1)+",'"+type+"')\"><a href=\"javascript:;\">"+(pd1)+"</a></li>";
	    	     }
	    	    if(pageNo==pd2){
	    	    		htmls=htmls+ " <li class=\"paginItem current\" id=\"waterids2\" value=\""+(pd2)+"\" onclick=\"fenye("+(pd2)+",'"+type+"')\"><a href=\"javascript:;\">"+(pd2)+"</a></li>";
	    		}else{
	    				htmls=htmls+ " <li class=\"paginItem\" id=\"waterids2\" value=\""+(pd2)+"\" onclick=\"fenye("+(pd2)+",'"+type+"')\"><a href=\"javascript:;\" >"+(pd2)+"</a></li>";
	    		}
	    		if(pageNo==pd3){
	    				htmls=htmls+" <li class=\"paginItem current\" id=\"waterids3\" value=\""+(pd3)+"\" onclick=\"fenye("+(pd3)+",'"+type+"')\"><a href=\"javascript:;\">"+(pd3)+"</a></li>"; 
	    		}else{
	    				htmls=htmls+" <li class=\"paginItem\" id=\"waterids3\" value=\""+(pd3)+"\" onclick=\"fenye("+(pd3)+",'"+type+"')\"><a href=\"javascript:;\">"+(pd3)+"</a></li>";
	    		}
	    		if(pageNo==pd4){                  
	    				htmls=htmls+ "<li class=\"paginItem current\" id=\"waterids4\" value=\""+(pd4)+"\"onclick=\"fenye("+(pd4)+",'"+type+"')\"><a href=\"javascript:;\">"+pd4+"</a></li>";
	    		}else{
	    				htmls=htmls+ "<li class=\"paginItem\" id=\"waterids4\" value=\""+(pd4)+"\"onclick=\"fenye("+(pd4)+",'"+type+"')\"><a  href=\"javascript:;\">"+pd4+"</a></li>"; 
	    		}  
	    			htmls=htmls+    "<li class=\"paginItem\" onclick=\"fenye("+(pageNo+1)+",'"+type+"')\"><a href=\"javascript:;\"><span class=\"pagenxt\"></span></a></li>"+ 
	    	       "</ul>";	            	
	    		document.getElementById("fenye").innerHTML =htmls;  
	    		tanchu();
	    	}
	    	
	    	//获取当前时间
	    	function getNowFormatDate(){
	    	    var date = new Date();
	    	    var seperator1 = "-";
	    	    var seperator2 = ":";
	    	    var month = date.getMonth() + 1;
	    	    var strDate = date.getDate();
	    	    if (month >= 1 && month <= 9) {
	    	        month = "0" + month;
	    	    }
	    	    if (strDate >= 0 && strDate <= 9) {
	    	        strDate = "0" + strDate;
	    	    }
	    	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	    	            + " " + date.getHours() + seperator2 + date.getMinutes()
	    	            + seperator2 + date.getSeconds();
	    	    return currentdate;
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
	    		"<div class=\"tiptop\"><span>提示信息</span><a></a></div>"+ 	            
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