package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Ticket;

public interface TicketService {
	 //根据id返回票务详情
    Ticket selectTicketByID(Integer id);
    //查询票务列表 返回 id，价格，名称，图片
    List<Ticket> selectTicketList();
    List<Ticket> selectTicketList1();
}
