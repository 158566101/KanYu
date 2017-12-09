package com.mlxc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.InformationMlxc;
import com.mlxc.service.InformationMlxcService;
import com.mlxc.util.Page;

@Controller
public class InformationMlxcController {
		
	
	@Resource 
	private InformationMlxcService  informationMlxcService;
	
	@ResponseBody
	@RequestMapping(value="getInformationList.json",produces={"application/json;charset=utf-8"})
	public String getInformationList(String type ,String name){
		System.out.println(type+"   "+name);
		List<InformationMlxc> informationMlxcs=informationMlxcService.selectInformationMlxcList(type,name);
		System.out.println(informationMlxcs.size());
		return JSONObject.toJSONString(informationMlxcs);
	}
	
	@ResponseBody
	@RequestMapping(value="getInformationInfo.json",produces={"application/json;charset=utf-8"})
	public String getInformationInfo(Integer id){
		
		InformationMlxc informationMlxc=informationMlxcService.selectByPrimaryKey(id);
		
		return JSONObject.toJSONString(informationMlxc);
	}
	
	@ResponseBody
	@RequestMapping(value="getInformationListByPage.json",produces={"application/json;charset=utf-8"})
	public String getInformationList(String type ,String name,Page page){
		Map<String, Object> map=new HashMap<String, Object>();
		page.setTotalCount(informationMlxcService.selectInformationCount(type, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<InformationMlxc> informationMlxcs=informationMlxcService.selectInformationMlxcListByPage(type, name, page);
		map.put("informationMlxcs", informationMlxcs);
		map.put("page", page);
		return JSONObject.toJSONString(map);
	}
}
