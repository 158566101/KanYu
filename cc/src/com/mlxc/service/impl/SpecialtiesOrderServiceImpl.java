package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.SpecialtiesOrderMapper;
import com.mlxc.pojo.ServiceOrder;
import com.mlxc.pojo.SpecialtiesOrder;
import com.mlxc.service.SpecialtiesOrderService;
import com.mlxc.util.Page;
@Service("specialtiesOrderService")
public class SpecialtiesOrderServiceImpl implements SpecialtiesOrderService {
	@Resource
	private SpecialtiesOrderMapper specialtiesOrderMapper;
	@Override
	public List<SpecialtiesOrder> selectSpecialtiesOrderList(Page page,
			String begintime, String endtime, String name) {
		// TODO Auto-generated method stub
		return specialtiesOrderMapper.selectSpecialtiesOrderList(page, begintime, endtime, name);
	}

	@Override
	public int selectSpecialtiesCount(String begintime, String endtime,
			String name) {
		// TODO Auto-generated method stub
		return specialtiesOrderMapper.selectSpecialtiesCount(begintime, endtime, name);
	}

	@Override
	public int insertSpecialtiesOrder(SpecialtiesOrder record) {
		// TODO Auto-generated method stub
		return specialtiesOrderMapper.insertSelective(record);
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return specialtiesOrderMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKeySelective(SpecialtiesOrder record) {
		// TODO Auto-generated method stub
		return specialtiesOrderMapper.updateByPrimaryKeySelective(record);
	}


}
