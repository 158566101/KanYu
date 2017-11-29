package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.LodgeCheckinMapper;
import com.mlxc.pojo.LodgeCheckin;
import com.mlxc.service.LodgeCheckinService;
import com.mlxc.util.Page;
@Service("lodgeCheckinService")
public class LodgeCheckinServiceImpl implements LodgeCheckinService {

	@Resource
	private LodgeCheckinMapper lodgeCheckinMapper;
	@Override
	public int insertSelective(LodgeCheckin record) {
		// TODO Auto-generated method stub
		return lodgeCheckinMapper.insertSelective(record);
	}
	@Override
	public List<LodgeCheckin> selectLodgeCheckinList(Page page,
			String begintime, String endtime, String name) {
		// TODO Auto-generated method stub
		return lodgeCheckinMapper.selectLodgeCheckinList(page, begintime, endtime, name);
	}
	@Override
	public int selectLodgeCheckinCount(String begintime, String endtime,
			String name) {
		// TODO Auto-generated method stub
		return lodgeCheckinMapper.selectLodgeCheckinCount(begintime, endtime, name);
	}
	@Override
	public List<LodgeCheckin> selectLodgeCheckById(Integer orderid) {
		// TODO Auto-generated method stub
		return lodgeCheckinMapper.selectLodgeCheckById(orderid);
	}

}
