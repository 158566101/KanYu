package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.ServiceOrder;
import com.mlxc.util.Page;

public interface ServiceOrderMapper {
   
    
    int insertSelective(ServiceOrder record);

    ServiceOrder selectByPrimaryKey(Integer id);
    //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(ServiceOrder record);
    
    //��ѯ���з��񶩵����� ��̬���������ѯpage=null��ѯȫ��
    List<ServiceOrder> selectServiceOrders(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //��ѯ������
    int selectServiceOrderCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
}
