package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.ServiceProduct;

public interface ServiceProductService {
    //����ID���ط�������
    ServiceProduct selectServiceProductByID(Integer id);
    //��ѯ�����б� ���� id,���ƣ�ͼƬ���۸�
    List<ServiceProduct> selectServiceProductList();
    List<ServiceProduct> selectServiceProductList1();
}
