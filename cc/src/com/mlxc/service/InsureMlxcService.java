package com.mlxc.service;

import java.util.List;

import com.mlxc.pojo.InsureMlxc;

public interface InsureMlxcService {
    //����id���ر�������
    InsureMlxc selectInsureMlxcById(Integer insureId);
    //��ѯ�����б� id ͼƬ ����
    List<InsureMlxc> selectInsureMlxcList();
    List<InsureMlxc> selectInsureMlxcList1();
}
