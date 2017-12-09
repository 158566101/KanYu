package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.PublicinformationMlxcMapper;
import com.mlxc.pojo.PublicinformationMlxc;
import com.mlxc.service.PublicinformationMlxcService;
import com.mlxc.util.Page;
@Service("publicinformationMlxcService")
public class PublicinformationMlxcServiceImpl implements
		PublicinformationMlxcService {
	@Resource
	private PublicinformationMlxcMapper publicinformationMlxcMapper;
	@Override
	public List<PublicinformationMlxc> selectPublicinformationMlxcList(
			String type, String name, Page page) {
		// TODO Auto-generated method stub
		return publicinformationMlxcMapper.selectPublicinformationMlxcList(type, name, page);
	}

	@Override
	public int selectPublicinformationMlxcCount(String type, String name) {
		// TODO Auto-generated method stub
		return publicinformationMlxcMapper.selectPublicinformationMlxcCount(type, name);
	}

}
