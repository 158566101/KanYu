package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Lodge;
/**
 * 
 * @author tz
 *
 */
public interface LodgeService {
	  //根据id返回民宿详情
    Lodge selectLodgeByID(Integer id);

    //查询民宿列表返回 id,价格，名称，图片
    List<Lodge> selectLodgeList();
    List<Lodge> selectLodgeList1();
}
