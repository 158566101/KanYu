package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Gentry;

public interface GentryMapper {
    int deleteByPrimaryKey(Integer id);


    int insertSelective(Gentry record);

    Gentry selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Gentry record);
    
    //��ѯ�Ĵ��б� id,ͼƬ���۸�����
    List<Gentry> selectGentryList();
    List<Gentry> selectGentryList1();

}