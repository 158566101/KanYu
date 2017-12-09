package com.mlxc.pojo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class ServiceOrder {
    private Integer id;

    private Integer typeFlag;

    private String serviceroom;

    private String indentname;

    private String telphone;

    private String audit;

    private String  generatetime;
   public String getGeneratetime() {
		return generatetime;
	}

	public void setGeneratetime(String generatetime) {
		this.generatetime = generatetime;
	}

	// @DateTimeFormat(pattern="yyyy-MM-dd HH:mm")
   // private Date begintime;
    private String begintime;
    
    public String getBegintime() {
		return begintime;
	}

	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}

	private String pay;

    private String identification;

    //∫Ûº” Ù–‘
    private String manufacturer;
    private String productname;
    private String typename;
    private Double minprice;
    
    
	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getTypename() {
		return typename;
	}

	public void setTypename(String typename) {
		this.typename = typename;
	}

	public Double getMinprice() {
		return minprice;
	}

	public void setMinprice(Double minprice) {
		this.minprice = minprice;
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
}