package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Gentry;
/**
 * 
 * @author tz
 *
 */
public interface GentryService {
	//����ID�����Ĵ�����
	 Gentry selectGentryById(Integer id);
	//��ѯ�Ĵ��б� id,ͼƬ���۸�����
	List<Gentry> selectGentryList();
	List<Gentry> selectGentryList1();
}
