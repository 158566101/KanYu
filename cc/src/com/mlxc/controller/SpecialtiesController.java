package com.mlxc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.Specialties;
import com.mlxc.service.SpecialtiesService;

@Controller
public class SpecialtiesController {
	
	@Resource
	private SpecialtiesService specialtiesService;
	
	@ResponseBody
	@RequestMapping(value="getSpecialtiesList.json",produces={"application/json;charset=utf-8"})
	public String getSpecialtiesList(){
		List<Specialties> specialtiess=specialtiesService.selectSpecialtiesList();
		return JSONObject.toJSONString(specialtiess);
	}
	
	@ResponseBody
	@RequestMapping(value="getSpecialtiesList1.json",produces={"application/json;charset=utf-8"})
	public String getSpecialtiesList1(){
		List<Specialties> specialtiess=specialtiesService.selectSpecialtiesList1();
		return JSONObject.toJSONString(specialtiess);
	}
	
	@ResponseBody
	@RequestMapping(value="getSpecialtiesInfo.json",produces={"application/json;charset=utf-8"})
	public String getSpecialtiesInfo(Integer id){
		Specialties specialties=specialtiesService.selectByPrimaryKey(id);
		return JSONObject.toJSONString(specialties);
	}
}
