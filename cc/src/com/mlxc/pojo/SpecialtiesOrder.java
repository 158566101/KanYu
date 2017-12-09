package com.mlxc.pojo;

import java.util.Date;

public class SpecialtiesOrder {
    private Integer id;

    private Integer typeFlag;

    private String indentname;

    private String telphone;

    private String audit;

    private String  generatetime;

    private Integer quantity;

    private Double minprice;

    private String pay;

    private String mode;

    private String address;

    private String identification;

    private String specialtiesname;
    private Double minpriceone;
    private String manufacturer;
    
    public String getSpecialtiesname() {
		return specialtiesname;
	}

	public void setSpecialtiesname(String specialtiesname) {
		this.specialtiesname = specialtiesname;
	}



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

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode == null ? null : mode.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification == null ? null : identification.trim();
    }
}