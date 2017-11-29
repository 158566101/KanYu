package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.PublicinformationMlxc;
import com.mlxc.util.Page;

public interface PublicinformationMlxcMapper {
    int deleteByPrimaryKey(Integer publicinformationId);

    int insertSelective(PublicinformationMlxc record);

    PublicinformationMlxc selectByPrimaryKey(Integer publicinformationId);

    int updateByPrimaryKeySelective(PublicinformationMlxc record);
    //��ѯ�б�
    List<PublicinformationMlxc> selectPublicinformationMlxcList(@Param("type")String type,@Param("name")String name,@Param("page")Page page );
    //��ѯ����
    int selectPublicinformationMlxcCount(@Param("type")String type,@Param("name")String name);
}