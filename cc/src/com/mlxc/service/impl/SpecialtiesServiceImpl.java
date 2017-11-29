package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.SpecialtiesMapper;
import com.mlxc.pojo.Specialties;
import com.mlxc.service.SpecialtiesService;
/**
 * 
 * @author tz
 *
 */
@Service("SpecialtiesService")
public class SpecialtiesServiceImpl implements SpecialtiesService {
	@Resource
	private SpecialtiesMapper specialtiesMapper;
	
	@Override
	public List<Specialties> selectSpecialtiesList() {
		// TODO Auto-generated method stub
		return specialtiesMapper.selectSpecialtiesList();
	}

	@Override
	public Specialties selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return specialtiesMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<Specialties> selectSpecialtiesList1() {
		// TODO Auto-generated method stub
		return specialtiesMapper.selectSpecialtiesList1();
	}
	
}
