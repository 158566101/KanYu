package com.mlxc.mapper;

import com.mlxc.pojo.MlxcUserpermission;

public interface MlxcUserpermissionMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MlxcUserpermission record);

    int insertSelective(MlxcUserpermission record);

    MlxcUserpermission selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MlxcUserpermission record);

    int updateByPrimaryKey(MlxcUserpermission record);
}