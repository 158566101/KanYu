package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Ticket;

public interface TicketMapper {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(Ticket record);
    //����id����Ʊ������
    Ticket selectByPrimaryKey(Integer id);
    //��ѯƱ���б� ���� id���۸����ƣ�ͼƬ
    List<Ticket> selectTicketList();
    List<Ticket> selectTicketList1();
    int updateByPrimaryKeySelective(Ticket record);

    
}