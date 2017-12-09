package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.LodgeCheckin;
import com.mlxc.util.Page;

public interface LodgeCheckinMapper {
    int deleteByPrimaryKey(Integer id);

  //添加身份证信息
    int insertSelective(LodgeCheckin record);

    LodgeCheckin selectByPrimaryKey(Integer id);
    
    int updateByPrimaryKeySelective(LodgeCheckin record); 
    
    //查询公安咨询列表 入住时间降序
        List<LodgeCheckin> selectLodgeCheckinList(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //查询数量
    int selectLodgeCheckinCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //根据订单id查询入住人信息
    List<LodgeCheckin> selectLodgeCheckById(Integer orderid); 
}