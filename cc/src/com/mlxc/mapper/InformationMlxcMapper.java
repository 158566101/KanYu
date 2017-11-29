package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.InformationMlxc;
import com.mlxc.util.Page;

public interface InformationMlxcMapper {
    int deleteByPrimaryKey(Integer informationId);

    int insertSelective(InformationMlxc record);

  

    int updateByPrimaryKeySelective(InformationMlxc record);
    //根据id返回信息资讯详情
    InformationMlxc selectByPrimaryKey(Integer informationId);
    //查询信息资讯 根据类型和名称关键字查询 --移动接口
    List<InformationMlxc> selectInformationMlxcList(@Param("type")String type,@Param("name")String name);
   
    ////查询信息资讯 根据类型和名称关键字查询分页显示--web
    List<InformationMlxc> selectInformationMlxcListByPage(@Param("type")String type,@Param("name")String name,@Param("page")Page page );
    //查询数量
    int selectInformationCount(@Param("type")String type,@Param("name")String name);

}