package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.LodgeCheckin;
import com.mlxc.util.Page;

public interface LodgeCheckinService {

	
	   //添加身份证信息
   public int insertSelective(LodgeCheckin record);
	
   //查询公安咨询列表 入住时间降序
   List<LodgeCheckin> selectLodgeCheckinList(Page page,String begintime
		,String endtime,String name);
	//查询数量
	int selectLodgeCheckinCount(String begintime
			,String endtime,String name);
    //根据订单id查询入住人信息
    List<LodgeCheckin> selectLodgeCheckById(Integer orderid); 
}
