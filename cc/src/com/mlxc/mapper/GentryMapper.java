package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Gentry;

public interface GentryMapper {
    int deleteByPrimaryKey(Integer id);


    int insertSelective(Gentry record);

    Gentry selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Gentry record);
    
    //查询文创列表 id,图片，价格，名称
    List<Gentry> selectGentryList();
    List<Gentry> selectGentryList1();

}