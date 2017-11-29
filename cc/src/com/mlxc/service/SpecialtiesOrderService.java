package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.ServiceOrder;
import com.mlxc.pojo.SpecialtiesOrder;
import com.mlxc.util.Page;

public interface SpecialtiesOrderService {
	//查询列表
    List<SpecialtiesOrder> selectSpecialtiesOrderList(Page page,String begintime
    		,String endtime,String name);
    //查询数量
    int selectSpecialtiesCount(String begintime
    		,String endtime,String name);
    //添加订单
    int insertSpecialtiesOrder(SpecialtiesOrder record);
    
    //删除
    int deleteByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(SpecialtiesOrder record);
}
