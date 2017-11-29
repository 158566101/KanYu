package com.mlxc.service;

import java.util.List;
import com.mlxc.pojo.ServiceOrder;
import com.mlxc.util.Page;

public interface ServiceOrderService {
	//查询订单列表
	 List<ServiceOrder> selectServiceOrderAll(Page page,String begintime,String endtime,String name);
	 //查询数量
	 int selectServiceOrderCount(String begintime,String endtime,String name);
	 
	 //添加订单
	 int insertServiceOrder(ServiceOrder record);
	 //删除
    int deleteByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(ServiceOrder record);
}
