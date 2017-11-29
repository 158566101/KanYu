package com.mlxc.mapper;

import java.util.List;

import com.mlxc.pojo.InsureMlxc;
/**
 * 
 * @author tz
 *
 */
public interface InsureMlxcMapper {
    int deleteByPrimaryKey(Integer insureId);

    int insertSelective(InsureMlxc record);
    

    int updateByPrimaryKeySelective(InsureMlxc record);
    //根据id返回保险详情
    InsureMlxc selectByPrimaryKey(Integer insureId);
    //查询保险列表 id 图片 名称
    List<InsureMlxc> selectInsureMlxcList();
    List<InsureMlxc> selectInsureMlxcList1();
   
}