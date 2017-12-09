package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.ServiceOrder;
import com.mlxc.util.Page;

public interface ServiceOrderMapper {
   
    
    int insertSelective(ServiceOrder record);

    ServiceOrder selectByPrimaryKey(Integer id);
    //删除
    int deleteByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(ServiceOrder record);
    
    //查询所有服务订单方法 动态组合条件查询page=null查询全部
    List<ServiceOrder> selectServiceOrders(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //查询总数量
    int selectServiceOrderCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
}
