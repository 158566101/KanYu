package com.mlxc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.InsureMlxc;
import com.mlxc.service.InsureMlxcService;
/**
 * 
 * @author tz
 *
 */
@Controller
public class InsureMlxcController {
		@Resource
		private InsureMlxcService insureMlxcService;
		/**
		 * 
		 * @return
		 */
		@ResponseBody
		@RequestMapping(value="getInsureMlxcList.json",produces={"application/json;charset=utf-8"})
		public String getInsureMlxcList(){
			List<InsureMlxc> insureMlxcs=insureMlxcService.selectInsureMlxcList();
			return JSONObject.toJSONString(insureMlxcs);
		}
		@ResponseBody
		@RequestMapping(value="getInsureMlxcList1.json",produces={"application/json;charset=utf-8"})
		public String getInsureMlxcList1(){
			List<InsureMlxc> insureMlxcs=insureMlxcService.selectInsureMlxcList1();
			return JSONObject.toJSONString(insureMlxcs);
		}
		@ResponseBody
		@RequestMapping(value="getInsureMlxcInfo.json",produces={"application/json;charset=utf-8"})
		public String getInsureMlxcInfo(Integer id){
			InsureMlxc insureMlxc=insureMlxcService.selectInsureMlxcById(id);
			return JSONObject.toJSONString(insureMlxc);
			
		}
}
