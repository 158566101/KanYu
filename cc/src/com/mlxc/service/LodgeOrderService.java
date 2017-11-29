package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;


import com.mlxc.pojo.LodgeOrder;
import com.mlxc.util.Page;

public interface LodgeOrderService {
	//查询列表
	List<LodgeOrder> selectLodgeOrders(Page page,String begintime
    		,String endtime,String name);
	//新增民宿订单
	int insertLodgeOrder(LodgeOrder record);
	
    //查询数量
    int selectLodgeOrderCount(String begintime,String endtime,String name);
    //删除
    int deleteByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(LodgeOrder record);
}
