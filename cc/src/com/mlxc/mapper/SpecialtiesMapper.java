package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Specialties;

public interface SpecialtiesMapper {
    int deleteByPrimaryKey(Integer id);

    

    int insertSelective(Specialties record);

    Specialties selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Specialties record);

    //��ѯũ�ز��б� ���� id,ͼƬ�����ƣ��۸�
    List<Specialties> selectSpecialtiesList();
    List<Specialties> selectSpecialtiesList1();
    
}