package com.mlxc.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.Gentry;
import com.mlxc.service.GentryService;
/**
 * 
 * @author tz
 *
 */
@Controller
public class GentryController {
	@Resource
	private GentryService gentryService;
	@ResponseBody
	@RequestMapping(value="getGentryList.json",produces={"application/json;charset=utf-8"})
	public String getGentryList(){
		List<Gentry> gentrys=gentryService.selectGentryList();
	
		return JSONObject.toJSONString(gentrys);
	}
	
	@ResponseBody
	@RequestMapping(value="getGentryList1.json",produces={"application/json;charset=utf-8"})
	public String getGentryList1(){
		List<Gentry> gentrys=gentryService.selectGentryList1();
	
		return JSONObject.toJSONString(gentrys);
	}
	
	@ResponseBody
	@RequestMapping(value="getGentryInfo.json",produces={"application/json;charset=utf-8"})
	public String getGentryInfo(Integer id){
		
		Gentry gentry=gentryService.selectGentryById(id);

		return JSONObject.toJSONString(gentry);
	}

}
