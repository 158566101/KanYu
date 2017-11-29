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
	 * 查询票务订单方法
	 * @param begintime
	 * @param endtime
	 * @param name
	 * @return json格式字符串
	 */
	@ResponseBody
	@RequestMapping(value="toticketorder.json",produces={"application/json;charset=utf-8"})
	public String findTicketOrderList( String begintime,String endtime,String name,Page page){
		
		Map<String , Object> map=new HashMap<String, Object>();

		//设置总数量
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
	//添加订单
	@ResponseBody
	@RequestMapping(value="addTicketOrder.json")
	public String addTicketOrder(TicketOrder ticketOrder){
		Map<String, Object> map=new HashMap<String ,Object>();
		
		try {
			if(ticketOrder.getTypeFlag()==null||"".equals(ticketOrder.getTypeFlag())){
				map.put("msg","error");
				return  JSONObject.toJSONString(map);
			}
			//总价格
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
	
	//修改订单
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
