package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.Gentry;
/**
 * 
 * @author tz
 *
 */
public interface GentryService {
	//根据ID返回文创详情
	 Gentry selectGentryById(Integer id);
	//查询文创列表 id,图片，价格，名称
	List<Gentry> selectGentryList();
	List<Gentry> selectGentryList1();
}
