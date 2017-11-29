package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.ServiceProduct;

public interface ServiceProductService {
    //根据ID返回服务详情
    ServiceProduct selectServiceProductByID(Integer id);
    //查询服务列表 返回 id,名称，图片，价格
    List<ServiceProduct> selectServiceProductList();
    List<ServiceProduct> selectServiceProductList1();
}
