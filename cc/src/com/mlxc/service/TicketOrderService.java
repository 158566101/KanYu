package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.TicketOrder;
import com.mlxc.util.Page;

public interface TicketOrderService {
	//����idɾ��
    int deleteByPrimaryKey(Integer id);
    
    //����
    int insertTicketOrder(TicketOrder record);
    //����id��ѯ
    TicketOrder selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TicketOrder record);
    //��ѯ����Ʊ�񷽷� page=null��ѯȫ��
    List<TicketOrder> selectTicketAll(Page page,String begintime,String endtime,String name);
    //��ѯ����
    int selectTicketCount(String begintime,String endtime,String name);
    
}
