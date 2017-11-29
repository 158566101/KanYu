package com.mlxc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.Ticket;
import com.mlxc.service.TicketService;
/**
 * 
 * @author tz
 *
 */
@Controller
public class TicketController {
	@Resource
	private TicketService ticketService;
	
	@ResponseBody
	@RequestMapping(value="getTicketList.json",produces={"application/json;charset=utf-8"})
	public String getTicketList(){
		
		List<Ticket> tickets=ticketService.selectTicketList();
		return JSONObject.toJSONString(tickets);
	}
	
	@ResponseBody
	@RequestMapping(value="getTicketList1.json",produces={"application/json;charset=utf-8"})
	public String getTicketList1(){
		
		List<Ticket> tickets=ticketService.selectTicketList1();
		return JSONObject.toJSONString(tickets);
	}
	
	@ResponseBody
	@RequestMapping(value="getTicketInfo.json",produces={"application/json;charset=utf-8"})
	public String getTicketInfo(Integer id){
		Ticket ticket=ticketService.selectTicketByID(id);
		return JSONObject.toJSONString(ticket);
	}


}
