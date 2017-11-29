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
    //根据ID返回服务详情
    ServiceProduct selectByPrimaryKey(Integer id);
    //查询服务列表 返回 id,名称，图片，价格
    List<ServiceProduct> selectServiceProductList();
    List<ServiceProduct> selectServiceProductList1();
    
    int updateByPrimaryKeySelective(ServiceProduct record);

  
}