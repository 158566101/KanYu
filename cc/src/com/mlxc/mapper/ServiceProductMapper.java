package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.ServiceProduct;
/**
 * 
 * @author Administrator tz
 *
 */
public interface ServiceProductMapper {
    int deleteByPrimaryKey(Integer id);


    int insertSelective(ServiceProduct record);
    //����ID���ط�������
    ServiceProduct selectByPrimaryKey(Integer id);
    //��ѯ�����б� ���� id,���ƣ�ͼƬ���۸�
    List<ServiceProduct> selectServiceProductList();
    List<ServiceProduct> selectServiceProductList1();
    
    int updateByPrimaryKeySelective(ServiceProduct record);

  
}