package com.mlxc.mapper;

import com.mlxc.pojo.FlagChecklist;

public interface FlagChecklistMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FlagChecklist record);

    int insertSelective(FlagChecklist record);

    FlagChecklist selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FlagChecklist record);

    int updateByPrimaryKey(FlagChecklist record);
}