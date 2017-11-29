package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.PublicinformationMlxc;
import com.mlxc.util.Page;

public interface PublicinformationMlxcService {
    //查询列表
    List<PublicinformationMlxc> selectPublicinformationMlxcList(String type,String name,Page page );
    //查询数量
    int selectPublicinformationMlxcCount(String type,String name);
}
