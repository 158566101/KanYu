package com.mlxc.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.LodgeOrder;
import com.mlxc.pojo.ServiceOrder;
import com.mlxc.service.ServiceOrderService;
import com.mlxc.util.Page;


@Controller
public class ServiceOrderController {
	@Resource
	private ServiceOrderService serviceOrderService;
	@ResponseBody
	@RequestMapping(value="toserviceorders.json",produces={"application/json;charset=utf-8"})
	public String selectServiceOrders(String begintime,String endtime,String name,Page page){
		//设置分页总数量
		page.setTotalCount(serviceOrderService.selectServiceOrderCount(begintime, endtime, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		Map<String , Object> map=new HashMap<String, Object>();
		List<ServiceOrder> serviceOrders=serviceOrderService.selectServiceOrderAll(page, begintime, endtime, name);
		
		map.put("page", page);
		map.put("serviceOrders", serviceOrders);
		return JSONObject.toJSONString(map);
	}
	
	@ResponseBody
	@RequestMapping(value="addServiceOrder.json")
	public String addServiceOrder( ServiceOrder serviceOrder){
		Map<String, Object> map=new HashMap<String ,Object>();
		if(serviceOrder.getTypeFlag()==null||"".equals(serviceOrder.getTypeFlag())){
			map.put("msg","error");
			return  JSONObject.toJSONString(map);
		}
		int rowCount =serviceOrderService.insertServiceOrder(serviceOrder);
		 if(rowCount>0){
			 map.put("msg","success");
		 }else{
			 map.put("msg","error");
		 }
		return JSONObject.toJSONString(map);
	}
	
	//修改订单
	@ResponseBody
	@RequestMapping(value="updateServiceOrder.json")
	public String updateGentryOrder(ServiceOrder serviceOrder){
		Map< String, Object> map=new HashMap<String, Object>();
		int rowCount=serviceOrderService.updateByPrimaryKeySelective(serviceOrder);
		if(rowCount>0){
			map.put("msg", "success");
		}else{
			map.put("msg", "error");
		}
		return JSONObject.toJSONString(map);
	}
}
