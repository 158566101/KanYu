package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.PublicinformationMlxc;
import com.mlxc.util.Page;

public interface PublicinformationMlxcService {
    //��ѯ�б�
    List<PublicinformationMlxc> selectPublicinformationMlxcList(String type,String name,Page page );
    //��ѯ����
    int selectPublicinformationMlxcCount(String type,String name);
}
