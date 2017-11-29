package com.mlxc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.Lodge;
import com.mlxc.service.LodgeService;

/**
 * 
 * @author tz
 *
 */
@Controller
public class LodgeController {
	@Resource
	private LodgeService lodgeService;
	/**
	 * 
	 * @return 票务列表转换后的Json字符串
	 */
	@ResponseBody
	@RequestMapping(value="getLodgeList.json",produces={"application/json;charset=utf-8"})
	public String getLodgeList(){
		List<Lodge> lodges=lodgeService.selectLodgeList();
		return JSONObject.toJSONString(lodges);
	}
	
	@ResponseBody
	@RequestMapping(value="getLodgeList1.json",produces={"application/json;charset=utf-8"})
	public String getLodgeList1(){
		List<Lodge> lodges=lodgeService.selectLodgeList1();
		return JSONObject.toJSONString(lodges);
	}
	
	@ResponseBody
	@RequestMapping(value="getLodgeInfo.json",produces={"application/json;charset=utf-8"})
	public String getLodgeInfo(Integer id){
		Lodge lodge=lodgeService.selectLodgeByID(id);
		return JSONObject.toJSONString(lodge);
	}

}
