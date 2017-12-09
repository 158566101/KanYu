package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;


import com.mlxc.pojo.LodgeOrder;
import com.mlxc.util.Page;

public interface LodgeOrderService {
	//��ѯ�б�
	List<LodgeOrder> selectLodgeOrders(Page page,String begintime
    		,String endtime,String name);
	//�������޶���
	int insertLodgeOrder(LodgeOrder record);
	
    //��ѯ����
    int selectLodgeOrderCount(String begintime,String endtime,String name);
    //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(LodgeOrder record);
}
