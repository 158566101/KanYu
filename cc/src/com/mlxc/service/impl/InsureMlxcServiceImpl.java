package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.InsureMlxcMapper;
import com.mlxc.pojo.InsureMlxc;
import com.mlxc.service.InsureMlxcService;
@Service("insureMlxcService")
public class InsureMlxcServiceImpl implements InsureMlxcService {

	@Resource
	private InsureMlxcMapper insureMlxcMapper;
	@Override
	public InsureMlxc selectInsureMlxcById(Integer insureId) {
		// TODO Auto-generated method stub
		return insureMlxcMapper.selectByPrimaryKey(insureId);
	}

	@Override
	public List<InsureMlxc> selectInsureMlxcList() {
		// TODO Auto-generated method stub
		return insureMlxcMapper.selectInsureMlxcList();
	}

	@Override
	public List<InsureMlxc> selectInsureMlxcList1() {
		// TODO Auto-generated method stub
		return insureMlxcMapper.selectInsureMlxcList1();
	}

}
