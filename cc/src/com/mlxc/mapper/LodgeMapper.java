package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Lodge;

public interface LodgeMapper {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(Lodge record);
    //根据id返回民宿详情
    Lodge selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Lodge record);
    //查询民宿列表返回 id,价格，名称，图片
    List<Lodge> selectLodgeList();
    List<Lodge> selectLodgeList1();
}