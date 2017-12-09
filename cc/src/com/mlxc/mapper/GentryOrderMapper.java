package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.GentryOrder;
import com.mlxc.util.Page;

public interface GentryOrderMapper {

    int insertSelective(GentryOrder record);

    GentryOrder selectByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(GentryOrder record);
	//ɾ��
    int deleteByPrimaryKey(Integer id);

    //��ѯ�б�
    List<GentryOrder> selectGentryOrderList(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //��ѯ����
    int selectGentryCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);

}