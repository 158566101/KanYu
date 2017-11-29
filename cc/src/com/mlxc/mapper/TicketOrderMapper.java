package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.TicketOrder;
import com.mlxc.util.Page;

public interface TicketOrderMapper {
   


    int insertSelective(TicketOrder record);

    TicketOrder selectByPrimaryKey(Integer id);
    //删除
    int deleteByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(TicketOrder record);
    //查询所有票务订单方法 动态组合条件查询page=null查询全部
    List<TicketOrder> selectTicketAll(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //查询数量
    int selectTicketCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);

}