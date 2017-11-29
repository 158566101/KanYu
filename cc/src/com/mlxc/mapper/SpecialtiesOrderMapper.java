package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.SpecialtiesOrder;
import com.mlxc.util.Page;

public interface SpecialtiesOrderMapper {
   

    int insertSelective(SpecialtiesOrder record);

    SpecialtiesOrder selectByPrimaryKey(Integer id);
    //删除
    int deleteByPrimaryKey(Integer id);
    //修改
    int updateByPrimaryKeySelective(SpecialtiesOrder record);
    
    //查询列表
    List<SpecialtiesOrder> selectSpecialtiesOrderList(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //查询数量
    int selectSpecialtiesCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);

}