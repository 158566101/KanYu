package com.mlxc.pojo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class TicketOrder {
    private Integer id;

    private Integer typeFlag;

    private String indentname;

    private String telphone;

    private String audit;

    private String generatetime;

    private Integer quantity;

    private Double minprice;

    private String pay;


    
    private String identification;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date usetime;

    private Double minpriceone;
    private String manufacturer;
    private String name;
    
	public Double getMinpriceone() {
		return minpriceone;
	}

	public void setMinpriceone(Double minpriceone) {
		this.minpriceone = minpriceone;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

    public Date getUsetime() {
        return usetime;
    }

    public void setUsetime(Date usetime) {
        this.usetime = usetime;
    }
}