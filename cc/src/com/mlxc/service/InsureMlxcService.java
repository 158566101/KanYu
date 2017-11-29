package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.InsureMlxc;

public interface InsureMlxcService {
    //根据id返回保险详情
    InsureMlxc selectInsureMlxcById(Integer insureId);
    //查询保险列表 id 图片 名称
    List<InsureMlxc> selectInsureMlxcList();
    List<InsureMlxc> selectInsureMlxcList1();
}
