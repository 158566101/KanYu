package com.mlxc.service;

import java.util.List;



import com.mlxc.pojo.Gentry;
import com.mlxc.pojo.GentryOrder;
import com.mlxc.util.Page;

public interface GentryOrderService {
	 //��ѯ�б�
    List<GentryOrder> selectGentryOrderList(Page page,String begintime
    		,String endtime,String name);
    //��ѯ����
    int selectGentryCount(String begintime,String endtime,String name);
    
    int insertGentryOrder(GentryOrder record);
    //�޸�
    int updateByPrimaryKeySelective(GentryOrder record);
	//ɾ��
    int deleteByPrimaryKey(Integer id);
    
    
}
