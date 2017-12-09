package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Specialties;

public interface SpecialtiesMapper {
    int deleteByPrimaryKey(Integer id);

    

    int insertSelective(Specialties record);

    Specialties selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Specialties record);

    //查询农特产列表 返回 id,图片，名称，价格
    List<Specialties> selectSpecialtiesList();
    List<Specialties> selectSpecialtiesList1();
    
}