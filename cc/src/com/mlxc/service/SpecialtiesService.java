package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Specialties;

public interface SpecialtiesService {
	 Specialties selectByPrimaryKey(Integer id);
	  //��ѯũ�ز��б� ���� id,ͼƬ�����ƣ��۸�
	 List<Specialties> selectSpecialtiesList();
	 List<Specialties> selectSpecialtiesList1();
}
