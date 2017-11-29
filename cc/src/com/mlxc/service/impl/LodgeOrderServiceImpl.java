package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.LodgeOrderMapper;
import com.mlxc.pojo.LodgeOrder;
import com.mlxc.service.LodgeOrderService;
import com.mlxc.util.Page;
@Service("lodgeOrderService")
public class LodgeOrderServiceImpl implements LodgeOrderService {

	@Resource
	private LodgeOrderMapper lodgeOrderMapper; 
	@Override
	public List<LodgeOrder> selectLodgeOrders(Page page, String begintime,
			String endtime, String name) {
		// TODO Auto-generated method stub
		return lodgeOrderMapper.selectLodgeOrders(page, begintime, endtime, name);
	}

	@Override
	public int insertLodgeOrder(LodgeOrder record) {
		// TODO Auto-generated method stub
		return lodgeOrderMapper.insertSelective(record);
	}

	@Override
	public int selectLodgeOrderCount(String begintime, String endtime,
			String name) {
		// TODO Auto-generated method stub
		return lodgeOrderMapper.selectLodgeOrderCount(begintime, endtime, name);
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return lodgeOrderMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKeySelective(LodgeOrder record) {
		// TODO Auto-generated method stub
		return lodgeOrderMapper.updateByPrimaryKeySelective(record);
	}

}
