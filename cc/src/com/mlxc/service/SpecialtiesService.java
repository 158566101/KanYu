package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Specialties;

public interface SpecialtiesService {
	 Specialties selectByPrimaryKey(Integer id);
	  //查询农特产列表 返回 id,图片，名称，价格
	 List<Specialties> selectSpecialtiesList();
	 List<Specialties> selectSpecialtiesList1();
}
