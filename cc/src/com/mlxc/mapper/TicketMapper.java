package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Ticket;

public interface TicketMapper {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(Ticket record);
    //根据id返回票务详情
    Ticket selectByPrimaryKey(Integer id);
    //查询票务列表 返回 id，价格，名称，图片
    List<Ticket> selectTicketList();
    List<Ticket> selectTicketList1();
    int updateByPrimaryKeySelective(Ticket record);

    
}