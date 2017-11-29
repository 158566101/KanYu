package com.mlxc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.PublicinformationMlxc;
import com.mlxc.service.PublicinformationMlxcService;
import com.mlxc.util.Page;

@Controller
public class PublicinformationMlxcController {
	@Resource
	private PublicinformationMlxcService publicinformationMlxcService;
	
	@ResponseBody
	@RequestMapping(value="getPublicinformationMlxcList.json",produces={"application/json;charset=utf-8"})
	public String getPublicinformationMlxcList(Page page,String name,String type){
		Map<String, Object> map=new HashMap<String, Object>();
		page.setTotalCount(publicinformationMlxcService.selectPublicinformationMlxcCount(type, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<PublicinformationMlxc> publicinformationMlxcs=publicinformationMlxcService.selectPublicinformationMlxcList(type, name, page);
		map.put("publicinformationMlxcs", publicinformationMlxcs);
		map.put("page", page);
		return JSONObject.toJSONString(map);
	}
	
	
}
