package com.mlxc.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mlxc.mapper.GoodsMapper;
import com.mlxc.pojo.Goods;
import com.mlxc.service.GoodsService;
@Service("goodsService")
public class GoodsServiceImpl implements GoodsService {
	@Resource
	private GoodsMapper goodsMapper;
	
	@Override
	public List<Goods> selectGoodsByRecommend() {
		// TODO Auto-generated method stub
		return goodsMapper.selectGoodsByRecommend();
	}

	@Override
	public List<Goods> selectGoodsListByName(String name) {
		// TODO Auto-generated method stub
		return goodsMapper.selectGoodsListByName(name);
	}

}
