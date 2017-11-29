package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.SpecialtiesOrder;
import com.mlxc.util.Page;

public interface SpecialtiesOrderMapper {
   

    int insertSelective(SpecialtiesOrder record);

    SpecialtiesOrder selectByPrimaryKey(Integer id);
    //ɾ��
    int deleteByPrimaryKey(Integer id);
    //�޸�
    int updateByPrimaryKeySelective(SpecialtiesOrder record);
    
    //��ѯ�б�
    List<SpecialtiesOrder> selectSpecialtiesOrderList(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //��ѯ����
    int selectSpecialtiesCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);

}