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
    //����id���ر�������
    InsureMlxc selectByPrimaryKey(Integer insureId);
    //��ѯ�����б� id ͼƬ ����
    List<InsureMlxc> selectInsureMlxcList();
    List<InsureMlxc> selectInsureMlxcList1();
   
}