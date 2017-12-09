package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.InformationMlxc;
import com.mlxc.util.Page;

public interface InformationMlxcService {
	 //根据id返回信息资讯详情
    InformationMlxc selectByPrimaryKey(Integer informationId);
    //查询信息资讯 根据类型和名称关键字查询 
    List<InformationMlxc> selectInformationMlxcList(String type,String name);
    
    
    //查询信息资讯 根据类型和名称关键字查询分页显示--web
    List<InformationMlxc> selectInformationMlxcListByPage(String type,String name,Page page );
    //查询分页数量
    int selectInformationCount(String type,String name);
}
