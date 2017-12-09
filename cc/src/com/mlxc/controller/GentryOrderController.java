package com.mlxc.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.GentryOrder;
import com.mlxc.service.GentryOrderService;
import com.mlxc.util.Page;

@Controller
public class GentryOrderController {
	
	@Resource
	private GentryOrderService gentryOrderService;
	
	
	//��ѯ�����б�
	@ResponseBody
	@RequestMapping(value="getGentryOrderList.json",produces={"application/json;charset=utf-8"})
	public String getGentryOrderList(Page page,String begintime,String endtime,String name){
		
		Map<String , Object> map=new HashMap<String, Object>();
		//����������
		page.setTotalCount(gentryOrderService.selectGentryCount(begintime, endtime, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<GentryOrder> gentryOrders=gentryOrderService.selectGentryOrderList(page, begintime, endtime, name);
		map.put("gentryOrders", gentryOrders);
		map.put("page", page);
		return JSONObject.toJSONString(map);
	}
	//��Ӷ���
	@ResponseBody
	@RequestMapping(value="addGentryOrder.json")
	public String addGentryOrder(GentryOrder gentryOrder){
		Map<String, Object> map=new HashMap<String ,Object>();
		try {
			if(gentryOrder.getTypeFlag()==null||"".equals(gentryOrder.getTypeFlag())){
				map.put("msg","error");
				return  JSONObject.toJSONString(map);
			}
			//�жϸ��ʽ
			if(gentryOrder.getAddress()==null||"".equals(gentryOrder.getAddress())){
				gentryOrder.setMode("������ȡ");
			}else{
				gentryOrder.setMode("��������");
			}
			//�ܼ۸�
			gentryOrder.setMinprice(gentryOrder.getMinpriceone()*gentryOrder.getQuantity());
			int rowCount =gentryOrderService.insertGentryOrder(gentryOrder);
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
	@RequestMapping(value="updateGentryOrder.json")
	public String updateGentryOrder(GentryOrder gentryOrder){
		Map< String, Object> map=new HashMap<String, Object>();
		int rowCount=gentryOrderService.updateByPrimaryKeySelective(gentryOrder);
		if(rowCount>0){
			map.put("msg", "success");
		}else{
			map.put("msg", "error");
		}
		return JSONObject.toJSONString(map);
	}
	
}
