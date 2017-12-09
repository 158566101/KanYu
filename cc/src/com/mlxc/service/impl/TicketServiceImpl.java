package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.TicketMapper;
import com.mlxc.pojo.Ticket;
import com.mlxc.service.TicketService;
/**
 * 
 * @author tz
 *
 */
@Service("ticketService")
public class TicketServiceImpl implements TicketService {
	@Resource
	private TicketMapper ticketMapper;
	@Override
	public Ticket selectTicketByID(Integer id) {
		// TODO Auto-generated method stub
		return ticketMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<Ticket> selectTicketList() {
		// TODO Auto-generated method stub
		return ticketMapper.selectTicketList();
	}

	@Override
	public List<Ticket> selectTicketList1() {
		// TODO Auto-generated method stub
		return ticketMapper.selectTicketList1();
	}

}
