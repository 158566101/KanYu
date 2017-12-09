
var InsureMlxcData=[];
//商城保险列表
function InsureMlxcList(){
	var urltext = "getInsureMlxcList1.json";
	$.ajax({
	        type: "POST",
	        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
	        url: urltext, 
	        dataType: "json",
	        success: function (data) {
	        	InsureMlxcData=data;
				var html="";
				if(data.length==0){
			 	   	html=html+	    	
				    "<tr style=\"height:auto;text-align:center;\">"+ 
				    "<td colspan=\"2\" style=\"text-align: center;\">没有任何数据！</td>"
				    "</tr>"; 
				}
			    for(var i=0;i<data.length;i++){
			    	html=html+	    	
			    	"<li class=\"selected\">"+
			        "<span onclick=\"InsureMlxcID("+data[i].insureId+")\"><img style=\"height:126px;width:168px;\" src=\"http://localhost/"+data[i].photo1+"\" /></span>"+
			        "<h2><a>"+data[i].title+"</a></h2>"+
			        "<p><a onclick=\"InsureMlxcID("+data[i].insureId+")\">查看</a>&nbsp;&nbsp;&nbsp;&nbsp;<a  class=\"click1\">删除</a></p>"+			       
			        "</li>";	   	      
			        
			    };
		    	document.getElementById("imglist").innerHTML =html;
		    	tanchu();
	        }		
		});	
	
}

//保险根据id查询
function InsureMlxcID(id){

	 var data=[];
	 for(var i =0;i<InsureMlxcData.length;i++){
		 if(InsureMlxcData[i].insureId==id){
			 data=InsureMlxcData[i];
		 }		 
	 }
		var timestamp3 = data.publictime;
		var newDate = new Date('yyyy-MM-dd');
		newDate.setTime(timestamp3);
		// Wed Jun 18 2014 
	 var htmls=""+data.title+""
	var html="<li style=\"padding: 10px;padding-left: 0px;\"><div style=\"height: 200px;width: 100%;\"> <img id=\"lunbo\"  src=\"http://localhost/"+data.photo1+"\" style=\"height:100%;width:100%;-webkit-border-radius: 8px;\"/></div></li>"+
	"<li><label class=\"label1\">保险标题：</label><label class=\"label1\" style=\"width:200px;\">"+data.title+"</label></li>"+
	"<li><label class=\"label1\">发布时间：</label><label class=\"label1\" style=\"width:200px;\">"+newDate.toLocaleDateString()+"</label></li>"+
	"<li><label class=\"label1\" style=\"float: inherit;\">保险描述：</label><div class=\"div1\">&nbsp;&nbsp;&nbsp;&nbsp;"+data.content+"</div></li>";
	
	 document.getElementById("stname").innerHTML =htmls;
	document.getElementById("InsureMlxcforminfo").innerHTML =html;
	imglist();
	lunbotu(data.photo1,data.photo2,data.photo3,data.photo4,data.photo5);
}
