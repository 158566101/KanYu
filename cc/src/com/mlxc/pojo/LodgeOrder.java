package com.mlxc.pojo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class LodgeOrder {
    private Integer id;

    private Integer typeFlag;

    private String serviceroom;

    private String indentname;

    private String telphone;

    private String audit;

    private String generatetime;

    private Integer quantity;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date begintime;

    private Double minprice;

    private String pay;

    private String identification;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date endtime;

    private String password;
    
    private Lodge lodge;
    
    public Lodge getLodge() {
		return lodge;
	}

	public void setLodge(Lodge lodge) {
		this.lodge = lodge;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTypeFlag() {
        return typeFlag;
    }

    public void setTypeFlag(Integer typeFlag) {
        this.typeFlag = typeFlag;
    }

    public String getServiceroom() {
        return serviceroom;
    }

    public void setServiceroom(String serviceroom) {
        this.serviceroom = serviceroom == null ? null : serviceroom.trim();
    }

    public String getIndentname() {
        return indentname;
    }

    public void setIndentname(String indentname) {
        this.indentname = indentname == null ? null : indentname.trim();
    }

    public String getTelphone() {
        return telphone;
    }

    public void setTelphone(String telphone) {
        this.telphone = telphone == null ? null : telphone.trim();
    }

    public String getAudit() {
        return audit;
    }

    public void setAudit(String audit) {
        this.audit = audit == null ? null : audit.trim();
    }



    public String getGeneratetime() {
		return generatetime;
	}

	public void setGeneratetime(String generatetime) {
		this.generatetime = generatetime;
	}

	public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Date getBegintime() {
        return begintime;
    }

    public void setBegintime(Date begintime) {
        this.begintime = begintime;
    }

    public Double getMinprice() {
        return minprice;
    }

    public void setMinprice(Double minprice) {
        this.minprice = minprice;
    }

    public String getPay() {
        return pay;
    }

    public void setPay(String pay) {
        this.pay = pay == null ? null : pay.trim();
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification == null ? null : identification.trim();
    }

    public Date getEndtime() {
        return endtime;
    }

    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }
}