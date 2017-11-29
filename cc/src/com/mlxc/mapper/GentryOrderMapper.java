package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.GentryOrder;
import com.mlxc.util.Page;

public interface GentryOrderMapper {

    int insertSelective(GentryOrder record);

    GentryOrder selectByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(GentryOrder record);
	//删除
    int deleteByPrimaryKey(Integer id);

    //查询列表
    List<GentryOrder> selectGentryOrderList(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //查询数量
    int selectGentryCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);

}