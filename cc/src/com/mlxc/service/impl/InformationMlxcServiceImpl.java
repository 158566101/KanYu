package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.InformationMlxcMapper;
import com.mlxc.pojo.InformationMlxc;
import com.mlxc.service.InformationMlxcService;
import com.mlxc.util.Page;
@Service("InformationMlxcService")
public class InformationMlxcServiceImpl implements InformationMlxcService {

	@Resource
	private InformationMlxcMapper informationMlxcMapper;
	@Override
	public InformationMlxc selectByPrimaryKey(Integer informationId) {
		return informationMlxcMapper.selectByPrimaryKey(informationId);
	}

	@Override
	public List<InformationMlxc> selectInformationMlxcList(String type,
			String name) {
		return informationMlxcMapper.selectInformationMlxcList(type, name);
	}

	@Override
	public List<InformationMlxc> selectInformationMlxcListByPage(String type,
			String name, Page page) {

		return informationMlxcMapper.selectInformationMlxcListByPage(type, name, page);
	}

	@Override
	public int selectInformationCount(String type, String name) {
		// TODO Auto-generated method stub
		return informationMlxcMapper.selectInformationCount(type, name);
	}

}
