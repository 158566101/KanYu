package com.mlxc.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mlxc.pojo.Goods;

public interface GoodsMapper {
	//��ѯ�Ƽ�
	List<Goods> selectGoodsByRecommend();
	//������Ʒ���Ʋ�ѯ�б�
	List<Goods> selectGoodsListByName(@Param("name")String name);
}
