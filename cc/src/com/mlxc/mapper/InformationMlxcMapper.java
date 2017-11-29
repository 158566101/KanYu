package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.InformationMlxc;
import com.mlxc.util.Page;

public interface InformationMlxcMapper {
    int deleteByPrimaryKey(Integer informationId);

    int insertSelective(InformationMlxc record);

  

    int updateByPrimaryKeySelective(InformationMlxc record);
    //����id������Ϣ��Ѷ����
    InformationMlxc selectByPrimaryKey(Integer informationId);
    //��ѯ��Ϣ��Ѷ �������ͺ����ƹؼ��ֲ�ѯ --�ƶ��ӿ�
    List<InformationMlxc> selectInformationMlxcList(@Param("type")String type,@Param("name")String name);
   
    ////��ѯ��Ϣ��Ѷ �������ͺ����ƹؼ��ֲ�ѯ��ҳ��ʾ--web
    List<InformationMlxc> selectInformationMlxcListByPage(@Param("type")String type,@Param("name")String name,@Param("page")Page page );
    //��ѯ����
    int selectInformationCount(@Param("type")String type,@Param("name")String name);

}