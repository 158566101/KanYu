package com.mlxc.util;

public class Page {
	private int totalCount;	//   总数量
	private int pageSize = 2;	//每页显示数量
	private int totalPageCount;	// 总页数
	private int pageNo = 1;		// 当前页码 默认为1
	private int beginIndex;	// 开始位置
	private int endIndex;	// 结束位置

	/*********set/get**********/
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getTotalPageCount() {

		if(this.totalCount % this.pageSize == 0){
			this.totalPageCount = this.totalCount/this.pageSize;
		}else if(this.totalCount % this.pageSize > 0){
			this.totalPageCount = this.totalCount/this.pageSize+1;
		}
		return totalPageCount;
	}

	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	// 开始位置
	public int getBeginIndex() {
		return (this.pageNo-1)*this.pageSize;
	}
	// 结束位置
	public int getEndIndex() {
		return  this.pageSize;
	}
	
	
}
