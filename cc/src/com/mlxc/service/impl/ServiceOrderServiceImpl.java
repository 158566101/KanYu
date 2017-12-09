package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.ServiceOrderMapper;
import com.mlxc.pojo.ServiceOrder;
import com.mlxc.service.ServiceOrderService;
import com.mlxc.util.Page;
@Service("serviceOrderService")
public class ServiceOrderServiceImpl implements ServiceOrderService {
	@Resource
	private ServiceOrderMapper serviceOrderMapper;
	@Override
	public List<ServiceOrder> selectServiceOrderAll(Page page, String begintime,
			String endtime, String name) {
		// TODO Auto-generated method stub
		return serviceOrderMapper.selectServiceOrders(page, begintime, endtime, name);
	}
	@Override
	public int selectServiceOrderCount(String begintime, String endtime,
			String name) {
		// TODO Auto-generated method stub
		return serviceOrderMapper.selectServiceOrderCount(begintime, endtime, name);
	}
	@Override
	public int insertServiceOrder(ServiceOrder record) {
		// TODO Auto-generated method stub
		return serviceOrderMapper.insertSelective(record);
	}
	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return serviceOrderMapper.deleteByPrimaryKey(id);
	}
	@Override
	public int updateByPrimaryKeySelective(ServiceOrder record) {
		// TODO Auto-generated method stub
		return serviceOrderMapper.updateByPrimaryKeySelective(record);
	}
 
}
