package com.mlxc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.ServiceProduct;
import com.mlxc.service.ServiceProductService;

@Controller
public class ServiceProductController {
	@Resource
	private ServiceProductService serviceProductService;
	
	@ResponseBody
	@RequestMapping(value="getServiceProductList.json",produces={"application/json;charset=utf-8"})
	public String getServiceProductList(){
		List<ServiceProduct> ServiceProducts=serviceProductService.selectServiceProductList();
		return JSONObject.toJSONString(ServiceProducts);
	}
	
	@ResponseBody
	@RequestMapping(value="getServiceProductList1.json",produces={"application/json;charset=utf-8"})
	public String getServiceProductList1(){
		List<ServiceProduct> ServiceProducts=serviceProductService.selectServiceProductList1();
		return JSONObject.toJSONString(ServiceProducts);
	}
	
	@ResponseBody
	@RequestMapping(value="getServiceProductInfo.json",produces={"application/json;charset=utf-8"})
	public String getServiceProductInfo(Integer id){
		ServiceProduct serviceProduct=serviceProductService.selectServiceProductByID(id);
		return JSONObject.toJSONString(serviceProduct);
	}
}
