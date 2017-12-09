package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.LodgeOrder;
import com.mlxc.util.Page;

public interface LodgeOrderMapper {



    int insertSelective(LodgeOrder record);

    LodgeOrder selectByPrimaryKey(Integer id);
    //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(LodgeOrder record);

    List<LodgeOrder> selectLodgeOrders(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    
    int selectLodgeOrderCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    
}