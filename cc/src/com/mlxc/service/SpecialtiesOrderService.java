package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.ServiceOrder;
import com.mlxc.pojo.SpecialtiesOrder;
import com.mlxc.util.Page;

public interface SpecialtiesOrderService {
	//��ѯ�б�
    List<SpecialtiesOrder> selectSpecialtiesOrderList(Page page,String begintime
    		,String endtime,String name);
    //��ѯ����
    int selectSpecialtiesCount(String begintime
    		,String endtime,String name);
    //��Ӷ���
    int insertSpecialtiesOrder(SpecialtiesOrder record);
    
    //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(SpecialtiesOrder record);
}
