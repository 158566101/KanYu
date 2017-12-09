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
import com.mlxc.pojo.TicketOrder;
import com.mlxc.service.TicketOrderService;
import com.mlxc.util.Page;
/**
 * 
 * @author tz
 *
 */

@Controller
public class TicketOrderController  {
	@Resource
	private TicketOrderService ticketOrderService;
	/**
	 * ��ѯƱ�񶩵�����
	 * @param begintime
	 * @param endtime
	 * @param name
	 * @return json��ʽ�ַ���
	 */
	@ResponseBody
	@RequestMapping(value="toticketorder.json",produces={"application/json;charset=utf-8"})
	public String findTicketOrderList( String begintime,String endtime,String name,Page page){
		
		Map<String , Object> map=new HashMap<String, Object>();

		//����������
		page.setTotalCount(ticketOrderService.selectTicketCount(begintime, endtime, name));
		if(page.getPageNo()>page.getTotalPageCount()){
			page.setPageNo(page.getTotalPageCount());
			if(page.getTotalPageCount()<1){
				page.setPageNo(1);
			}
		}
		List<TicketOrder> ticketOrders=ticketOrderService.selectTicketAll(page,begintime, endtime,name);
		
		map.put("page",page);
		map.put("ticketOrders", ticketOrders);
		return JSONObject.toJSONString(map);
	}
	//��Ӷ���
	@ResponseBody
	@RequestMapping(value="addTicketOrder.json")
	public String addTicketOrder(TicketOrder ticketOrder){
		Map<String, Object> map=new HashMap<String ,Object>();
		
		try {
			if(ticketOrder.getTypeFlag()==null||"".equals(ticketOrder.getTypeFlag())){
				map.put("msg","error");
				return  JSONObject.toJSONString(map);
			}
			//�ܼ۸�
			ticketOrder.setMinprice(ticketOrder.getMinpriceone()*ticketOrder.getQuantity());
			int rowCount =ticketOrderService.insertTicketOrder(ticketOrder);
			 if(rowCount>0){
				 map.put("msg","success");
			 }else{
				 map.put("msg","error");
			 }
		} catch (Exception e) {
			e.printStackTrace();
			 map.put("msg","error");;
		}
		
		return JSONObject.toJSONString(map);
	}
	
	//�޸Ķ���
	@ResponseBody
	@RequestMapping(value="updateTicketOrder.json")
	public String updateGentryOrder(TicketOrder ticketOrder){
		Map< String, Object> map=new HashMap<String, Object>();
		int rowCount=ticketOrderService.updateByPrimaryKeySelective(ticketOrder);
		if(rowCount>0){
			map.put("msg", "success");
		}else{
			map.put("msg", "error");
		}
		return JSONObject.toJSONString(map);
	}
}
