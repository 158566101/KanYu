package com.mlxc.test;

import static org.junit.Assert.*;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mlxc.pojo.LodgeOrder;
import com.mlxc.pojo.ServiceOrder;
import com.mlxc.pojo.TicketOrder;
import com.mlxc.service.LodgeOrderService;
import com.mlxc.service.ServiceOrderService;
import com.mlxc.service.TicketOrderService;
import com.mlxc.util.Page;

public class Test1 {

	@Test
	public void testSelectTicketAll() {
		ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
		
		LodgeOrderService ts=(LodgeOrderService)ac.getBean("lodgeOrderService");
		System.out.println(ts.selectLodgeOrders(null, null, null, null).size());
		for (LodgeOrder so : ts.selectLodgeOrders(null, null, null, null)) {
			System.out.println(so.getTypeFlag());
			System.out.println(so.getLodge().getRoom());
			System.out.println(so.getId());
		}
	
	}

}
