package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.LodgeMapper;
import com.mlxc.pojo.Lodge;
import com.mlxc.service.LodgeService;
/**
 * 
 * @author tz
 *
 */
@Service("lodgeService")
public class LodgeServiceImpl implements LodgeService {
	@Resource
	private LodgeMapper lodgeMapper;
	@Override
	public Lodge selectLodgeByID(Integer id) {
		// TODO Auto-generated method stub
		return lodgeMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<Lodge> selectLodgeList() {
		// TODO Auto-generated method stub
		return lodgeMapper.selectLodgeList();
	}

	@Override
	public List<Lodge> selectLodgeList1() {
		// TODO Auto-generated method stub
		return lodgeMapper.selectLodgeList1();
	}

}
