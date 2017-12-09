package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.TicketOrderMapper;
import com.mlxc.pojo.TicketOrder;
import com.mlxc.service.TicketOrderService;
import com.mlxc.util.Page;
@Service("ticketOrderService")
public class TicketOrderServiceImpl implements TicketOrderService {

	@Resource
	private TicketOrderMapper ticketOrderMapper;
	
	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return ticketOrderMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int insertTicketOrder(TicketOrder record) {
		// TODO Auto-generated method stub
		return ticketOrderMapper.insertSelective(record);
	}

	@Override
	public TicketOrder selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return ticketOrderMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKeySelective(TicketOrder record) {
		// TODO Auto-generated method stub
		return ticketOrderMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public List<TicketOrder> selectTicketAll(Page page,String begintime,String endtime,String name) {
		// TODO Auto-generated method stub
		return ticketOrderMapper.selectTicketAll(page,begintime,endtime, name);
	}

	@Override
	public int selectTicketCount(String begintime, String endtime, String name) {
		// TODO Auto-generated method stub
		return ticketOrderMapper.selectTicketCount(begintime, endtime, name);
	}

}
