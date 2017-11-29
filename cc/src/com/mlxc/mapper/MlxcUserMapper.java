package com.mlxc.mapper;

import com.mlxc.pojo.MlxcUser;

public interface MlxcUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MlxcUser record);

    int insertSelective(MlxcUser record);

    MlxcUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MlxcUser record);

    int updateByPrimaryKey(MlxcUser record);
}