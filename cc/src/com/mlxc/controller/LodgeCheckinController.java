package com.mlxc.controller;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.LodgeCheckin;
import com.mlxc.pojo.LodgeOrder;
import com.mlxc.service.LodgeCheckinService;
import com.mlxc.util.Page;
/**
 * 
 * @author tz
 *
 */
@Controller
public class LodgeCheckinController {

	@Resource
	private LodgeCheckinService lodgeCheckinService;
	
	@ResponseBody
	@RequestMapping(value="addLodgeCheckinOrder.json")
	public String addLodgeCheckinOrder(LodgeCheckin lodgeCheckin){
		//String list1 = new String(request.getParameter("list").getBytes("iso-8859-1"),"utf-8");
		
		Map<String, Object> map=new HashMap<String ,Object>();
		int rowCount =lodgeCheckinService.insertSelective(lodgeCheckin);
		System.out.println(rowCount);
		 if(rowCount>0){
			 map.put("msg","success");
		 }else{
			 map.put("msg","error");
		 }
		return JSONObject.toJSONString(map);

	}
	
	@ResponseBody
	@RequestMapping(value="getLodgeCheckinList.json",produces={"application/json;charset=utf-8"})
	public String getLodgeCheckinList(Page page,String begintime,String endtime,String name){
		Map<String, Object> map=new HashMap<String, Object>();
		page.setTotalCount(lodgeCheckinService.selectLodgeCheckinCount(begintime, endtime, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<LodgeCheckin> lodgeCheckins=lodgeCheckinService.selectLodgeCheckinList(page, begintime, endtime, name);
		map.put("lodgeCheckins", lodgeCheckins);
		map.put("page", page);
		return JSONObject.toJSONString(map);
	}
	
	@ResponseBody
	@RequestMapping(value="getLodgeCheckinById.json",produces={"application/json;charset=utf-8"})
	public String getLodgeCheckinById(Integer id){
		List<LodgeCheckin> lodgeCheckins=lodgeCheckinService.selectLodgeCheckById(id);
		return JSONObject.toJSONString(lodgeCheckins);
	}
}
