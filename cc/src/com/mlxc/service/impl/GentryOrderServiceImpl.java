package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.GentryOrderMapper;
import com.mlxc.pojo.Gentry;
import com.mlxc.pojo.GentryOrder;
import com.mlxc.service.GentryOrderService;
import com.mlxc.util.Page;
/**
 * 
 * @author tz
 *
 */
@Service("gentryOrderService")
public class GentryOrderServiceImpl implements GentryOrderService {
	@Resource
	private GentryOrderMapper gentryOrderMapper;
	
	@Override
	public List<GentryOrder> selectGentryOrderList(Page page, String begintime,
			String endtime, String name) {
		// TODO Auto-generated method stub
		return gentryOrderMapper.selectGentryOrderList(page, begintime, endtime, name);
	}

	@Override
	public int selectGentryCount(String begintime, String endtime, String name) {
		// TODO Auto-generated method stub
		return gentryOrderMapper.selectGentryCount(begintime, endtime, name);
	}

	@Override
	public int insertGentryOrder(GentryOrder record) {
		// TODO Auto-generated method stub
		return gentryOrderMapper.insertSelective(record);
	}

	@Override
	public int updateByPrimaryKeySelective(GentryOrder record) {
		// TODO Auto-generated method stub
		return gentryOrderMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return gentryOrderMapper.deleteByPrimaryKey(id);
	}



}
