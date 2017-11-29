package com.mlxc.pojo;

import java.util.Date;

public class LodgeCheckin {
    private Integer id;

    private Integer typeCheckin;

    private String serviceroom;

    private String roompassword;

    private String roomstate;

    private String name1;

    private String identification1;

    private String telphone1;

    
    //∫Ûº” Ù–‘
    private String manufacturer;
    private Date begintime;
    
    public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public Date getBegintime() {
		return begintime;
	}

	public void setBegintime(Date begintime) {
		this.begintime = begintime;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTypeCheckin() {
        return typeCheckin;
    }

    public void setTypeCheckin(Integer typeCheckin) {
        this.typeCheckin = typeCheckin;
    }

    public String getServiceroom() {
        return serviceroom;
    }

    public void setServiceroom(String serviceroom) {
        this.serviceroom = serviceroom == null ? null : serviceroom.trim();
    }

    public String getRoompassword() {
        return roompassword;
    }

    public void setRoompassword(String roompassword) {
        this.roompassword = roompassword == null ? null : roompassword.trim();
    }

    public String getRoomstate() {
        return roomstate;
    }

    public void setRoomstate(String roomstate) {
        this.roomstate = roomstate == null ? null : roomstate.trim();
    }

    public String getName1() {
        return name1;
    }

    public void setName1(String name1) {
        this.name1 = name1 == null ? null : name1.trim();
    }

    public String getIdentification1() {
        return identification1;
    }

    public void setIdentification1(String identification1) {
        this.identification1 = identification1 == null ? null : identification1.trim();
    }

    public String getTelphone1() {
        return telphone1;
    }

    public void setTelphone1(String telphone1) {
        this.telphone1 = telphone1 == null ? null : telphone1.trim();
    }
}