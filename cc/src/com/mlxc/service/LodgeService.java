package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Lodge;
/**
 * 
 * @author tz
 *
 */
public interface LodgeService {
	  //����id������������
    Lodge selectLodgeByID(Integer id);

    //��ѯ�����б��� id,�۸����ƣ�ͼƬ
    List<Lodge> selectLodgeList();
    List<Lodge> selectLodgeList1();
}
