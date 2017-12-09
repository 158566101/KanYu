package com.mlxc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mlxc.pojo.Goods;
import com.mlxc.service.GoodsService;

@Controller
public class GoodsController {
	
	@Resource
	private GoodsService goodsService;
	
	@ResponseBody
	@RequestMapping(value="getGoodsListByName.json",produces={"application/json;charset=utf-8"})
	public String getGoodsListByName(String name){
		System.out.println(name);
		List<Goods> goods=goodsService.selectGoodsListByName(name);
		return JSONObject.toJSONString(goods);
	}
	
	@ResponseBody
	@RequestMapping(value="getGoodsListByRecommend.json",produces={"application/json;charset=utf-8"})
	public String getGoodsListByRecommend(){
		List<Goods> goods=goodsService.selectGoodsByRecommend();
		return JSONObject.toJSONString(goods);
	}
	
}
