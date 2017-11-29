package com.mlxc.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.SpecialtiesOrder;
import com.mlxc.service.SpecialtiesOrderService;
import com.mlxc.util.Page;

@Controller
public class SpecialtiesOrderController {
	@Resource
	private SpecialtiesOrderService specialtiesOrderService;
	
	
	@ResponseBody
	@RequestMapping(value="getSpecialtiesOrderList.json",produces={"application/json;charset=utf-8"})
	public String getSpecialtiesOrderList(String begintime,String endtime,String name,Page page){
		Map<String , Object> map=new HashMap<String, Object>();

		//����������
		page.setTotalCount(specialtiesOrderService.selectSpecialtiesCount(begintime, endtime, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<SpecialtiesOrder> specialtiesOrders=specialtiesOrderService.selectSpecialtiesOrderList(page, begintime, endtime, name);
		map.put("specialtiesOrders", specialtiesOrders);
		map.put("page",page);
		return JSONObject.toJSONString(map);
	}
	//��Ӷ���
	@ResponseBody
	@RequestMapping(value="addSpecialtiesOrder.json")
	public String addSpecialtiesOrder(SpecialtiesOrder specialtiesOrder){
		Map<String, Object> map=new HashMap<String ,Object>();
		try {
			if(specialtiesOrder.getTypeFlag()==null||"".equals(specialtiesOrder.getTypeFlag())){
				map.put("msg","error");
				return  JSONObject.toJSONString(map);
			}
			//�жϸ��ʽ
			if(specialtiesOrder.getAddress()==null||"".equals(specialtiesOrder.getAddress())){
				specialtiesOrder.setMode("������ȡ");
			}else{
				specialtiesOrder.setMode("��������");
			}
			//�ܼ۸�
			specialtiesOrder.setMinprice(specialtiesOrder.getMinpriceone()*specialtiesOrder.getQuantity());
			int rowCount =specialtiesOrderService.insertSpecialtiesOrder(specialtiesOrder);
			 if(rowCount>0){
				 map.put("msg","success");
			 }else{
				 map.put("msg","error");
			 }
		} catch (Exception e) {
			e.printStackTrace();
			map.put("msg","error");
		}
		return JSONObject.toJSONString(map);
	}
	//�޸Ķ���
	@ResponseBody
	@RequestMapping(value="updateSpecialtiesOrder.json")
	public String updateGentryOrder(SpecialtiesOrder specialtiesOrder){
		Map< String, Object> map=new HashMap<String, Object>();
		int rowCount=specialtiesOrderService.updateByPrimaryKeySelective(specialtiesOrder);
		if(rowCount>0){
			map.put("msg", "success");
		}else{
			map.put("msg", "error");
		}
		return JSONObject.toJSONString(map);
	}
}
