package com.mlxc.service;

import java.util.List;



import com.mlxc.pojo.Gentry;
import com.mlxc.pojo.GentryOrder;
import com.mlxc.util.Page;

public interface GentryOrderService {
	 //查询列表
    List<GentryOrder> selectGentryOrderList(Page page,String begintime
    		,String endtime,String name);
    //查询数量
    int selectGentryCount(String begintime,String endtime,String name);
    
    int insertGentryOrder(GentryOrder record);
    //修改
    int updateByPrimaryKeySelective(GentryOrder record);
	//删除
    int deleteByPrimaryKey(Integer id);
    
    
}
