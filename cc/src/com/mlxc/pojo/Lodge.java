package com.mlxc.pojo;

public class Lodge {
    private Integer id;

    private String lodgename;

    private Double minprice;

    private String content;

    private String photo1;

    private String photo2;

    private String photo3;

    private String photo4;

    private String photo5;

    private String manufacturer;

    private Double minprice1;

    private String recommend;

    private String room;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLodgename() {
        return lodgename;
    }

    public void setLodgename(String lodgename) {
        this.lodgename = lodgename == null ? null : lodgename.trim();
    }

    public Double getMinprice() {
        return minprice;
    }

    public void setMinprice(Double minprice) {
        this.minprice = minprice;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getPhoto1() {
        return photo1;
    }

    public void setPhoto1(String photo1) {
        this.photo1 = photo1 == null ? null : photo1.trim();
    }

    public String getPhoto2() {
        return photo2;
    }

    public void setPhoto2(String photo2) {
        this.photo2 = photo2 == null ? null : photo2.trim();
    }

    public String getPhoto3() {
        return photo3;
    }

    public void setPhoto3(String photo3) {
        this.photo3 = photo3 == null ? null : photo3.trim();
    }

    public String getPhoto4() {
        return photo4;
    }

    public void setPhoto4(String photo4) {
        this.photo4 = photo4 == null ? null : photo4.trim();
    }

    public String getPhoto5() {
        return photo5;
    }

    public void setPhoto5(String photo5) {
        this.photo5 = photo5 == null ? null : photo5.trim();
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer == null ? null : manufacturer.trim();
    }

    public Double getMinprice1() {
        return minprice1;
    }

    public void setMinprice1(Double minprice1) {
        this.minprice1 = minprice1;
    }

    public String getRecommend() {
        return recommend;
    }

    public void setRecommend(String recommend) {
        this.recommend = recommend == null ? null : recommend.trim();
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room == null ? null : room.trim();
    }
}