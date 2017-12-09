package com.mlxc.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.Goods;

public interface GoodsService {
	//查询推荐
	List<Goods> selectGoodsByRecommend();
	//根据商品名称查询列表
	List<Goods> selectGoodsListByName(@Param("name")String name);
}
