package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.Lodge;

public interface LodgeMapper {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(Lodge record);
    //����id������������
    Lodge selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Lodge record);
    //��ѯ�����б��� id,�۸����ƣ�ͼƬ
    List<Lodge> selectLodgeList();
    List<Lodge> selectLodgeList1();
}