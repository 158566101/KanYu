package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.LodgeCheckin;
import com.mlxc.util.Page;

public interface LodgeCheckinService {

	
	   //������֤��Ϣ
   public int insertSelective(LodgeCheckin record);
	
   //��ѯ������ѯ�б� ��סʱ�併��
   List<LodgeCheckin> selectLodgeCheckinList(Page page,String begintime
		,String endtime,String name);
	//��ѯ����
	int selectLodgeCheckinCount(String begintime
			,String endtime,String name);
    //���ݶ���id��ѯ��ס����Ϣ
    List<LodgeCheckin> selectLodgeCheckById(Integer orderid); 
}
