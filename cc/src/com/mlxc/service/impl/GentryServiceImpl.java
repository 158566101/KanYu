package com.mlxc.service.impl;


import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.GentryMapper;
import com.mlxc.pojo.Gentry;
import com.mlxc.service.GentryService;
/**
 * 
 * @author tz
 *
 */
@Service("gentryService")
public class GentryServiceImpl implements GentryService {

	@Resource
	private GentryMapper gentryMapper;
	
	@Override
	public List<Gentry> selectGentryList() {
		// TODO Auto-generated method stub
		return gentryMapper.selectGentryList();
	}

	@Override
	public Gentry selectGentryById(Integer id) {
		// TODO Auto-generated method stub
		return gentryMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<Gentry> selectGentryList1() {
		// TODO Auto-generated method stub
		return gentryMapper.selectGentryList1();
	}

}
