package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.ServiceProductMapper;
import com.mlxc.pojo.ServiceProduct;
import com.mlxc.service.ServiceProductService;
/**
 * 
 * @author tz
 *
 */
@Service("serviceProductService")
public class ServiceProductServiceImpl implements ServiceProductService {

	@Resource
	private ServiceProductMapper serviceProductMapper;
	@Override
	public ServiceProduct selectServiceProductByID(Integer id) {
		// TODO Auto-generated method stub
		return serviceProductMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<ServiceProduct> selectServiceProductList() {
		// TODO Auto-generated method stub
		return serviceProductMapper.selectServiceProductList();
	}

	@Override
	public List<ServiceProduct> selectServiceProductList1() {
		// TODO Auto-generated method stub
		return serviceProductMapper.selectServiceProductList1();
	}

}
