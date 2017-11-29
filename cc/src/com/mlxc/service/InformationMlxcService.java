package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.InformationMlxc;
import com.mlxc.util.Page;

public interface InformationMlxcService {
	 //����id������Ϣ��Ѷ����
    InformationMlxc selectByPrimaryKey(Integer informationId);
    //��ѯ��Ϣ��Ѷ �������ͺ����ƹؼ��ֲ�ѯ 
    List<InformationMlxc> selectInformationMlxcList(String type,String name);
    
    
    //��ѯ��Ϣ��Ѷ �������ͺ����ƹؼ��ֲ�ѯ��ҳ��ʾ--web
    List<InformationMlxc> selectInformationMlxcListByPage(String type,String name,Page page );
    //��ѯ��ҳ����
    int selectInformationCount(String type,String name);
}
