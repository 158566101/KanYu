package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Ticket;

public interface TicketService {
	 //����id����Ʊ������
    Ticket selectTicketByID(Integer id);
    //��ѯƱ���б� ���� id���۸����ƣ�ͼƬ
    List<Ticket> selectTicketList();
    List<Ticket> selectTicketList1();
}
