package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.TicketOrder;
import com.mlxc.util.Page;

public interface TicketOrderService {
	//根据id删除
    int deleteByPrimaryKey(Integer id);
    
    //新增
    int insertTicketOrder(TicketOrder record);
    //根据id查询
    TicketOrder selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TicketOrder record);
    //查询所有票务方法 page=null查询全部
    List<TicketOrder> selectTicketAll(Page page,String begintime,String endtime,String name);
    //查询数量
    int selectTicketCount(String begintime,String endtime,String name);
    
}
