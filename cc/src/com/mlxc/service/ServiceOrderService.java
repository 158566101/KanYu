package com.mlxc.service;

import java.util.List;
import com.mlxc.pojo.ServiceOrder;
import com.mlxc.util.Page;

public interface ServiceOrderService {
	//��ѯ�����б�
	 List<ServiceOrder> selectServiceOrderAll(Page page,String begintime,String endtime,String name);
	 //��ѯ����
	 int selectServiceOrderCount(String begintime,String endtime,String name);
	 
	 //��Ӷ���
	 int insertServiceOrder(ServiceOrder record);
	 //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(ServiceOrder record);
}
