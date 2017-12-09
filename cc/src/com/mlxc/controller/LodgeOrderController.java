package com.mlxc.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.LodgeOrder;
import com.mlxc.service.LodgeOrderService;
import com.mlxc.util.Page;

@Controller
public class LodgeOrderController {
	
	
	@Resource
	private LodgeOrderService  lodgeOrderService;
	
	@ResponseBody
	@RequestMapping(value="addLodgeOrder.json")
	public String addLodgeOrder(LodgeOrder lodgeOrder){
		Map<String, Object> map=new HashMap<String ,Object>();
		if(lodgeOrder.getTypeFlag()==null||"".equals(lodgeOrder.getTypeFlag())){
			map.put("msg","error");
			return  JSONObject.toJSONString(map);
		}
		int rowCount =lodgeOrderService.insertLodgeOrder(lodgeOrder);
		 if(rowCount>0){
			 map.put("msg","success");
		 }else{
			 map.put("msg","error");
		 }
		return JSONObject.toJSONString(map);

	}
	@ResponseBody
	@RequestMapping(value="getLodgeOrderList.json",produces={"application/json;charset=utf-8"})
	public String getLodgeOrderList(String begintime,String endtime,String name,Page page){
		Map<String , Object> map=new HashMap<String, Object>();
		page.setTotalCount(lodgeOrderService.selectLodgeOrderCount(begintime, endtime, name));
		System.out.println(page.getTotalCount());
		System.out.println(page.getPageNo());
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<LodgeOrder> lodgeOrders=lodgeOrderService.selectLodgeOrders(page, begintime, endtime, name);
		map.put("page", page);
		map.put("lodgeOrders", lodgeOrders);
		return JSONObject.toJSONString(map);
	}
	
	//ÐÞ¸Ä¶©µ¥
	@ResponseBody
	@RequestMapping(value="updateLodgeOrder.json")
	public String updateGentryOrder(LodgeOrder lodgeOrder){
		Map< String, Object> map=new HashMap<String, Object>();
		int rowCount=lodgeOrderService.updateByPrimaryKeySelective(lodgeOrder);
		if(rowCount>0){
			map.put("msg", "success");
		}else{
			map.put("msg", "error");
		}
		return JSONObject.toJSONString(map);
	}
}
