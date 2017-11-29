package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.LodgeCheckin;
import com.mlxc.util.Page;

public interface LodgeCheckinMapper {
    int deleteByPrimaryKey(Integer id);

  //������֤��Ϣ
    int insertSelective(LodgeCheckin record);

    LodgeCheckin selectByPrimaryKey(Integer id);
    
    int updateByPrimaryKeySelective(LodgeCheckin record); 
    
    //��ѯ������ѯ�б� ��סʱ�併��
        List<LodgeCheckin> selectLodgeCheckinList(@Param("page")Page page,@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //��ѯ����
    int selectLodgeCheckinCount(@Param("begintime")String begintime
    		,@Param("endtime")String endtime,@Param("name")String name);
    //���ݶ���id��ѯ��ס����Ϣ
    List<LodgeCheckin> selectLodgeCheckById(Integer orderid); 
}