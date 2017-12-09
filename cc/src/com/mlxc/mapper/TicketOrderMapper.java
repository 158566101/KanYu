package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.TicketOrder;
import com.mlxc.util.Page;

public interface TicketOrderMapper {
   


    int insertSelective(TicketOrder record);

    TicketOrder selectByPrimaryKey(Integer id);
    //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(TicketOrder record);
    //��ѯ����Ʊ�񶩵����� ��̬���������ѯpage=null��ѯȫ��
    List<TicketOrder> selectTicketAll(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //��ѯ����
    int selectTicketCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);

}