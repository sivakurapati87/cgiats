/**
 * 
 */
package com.uralian.cgiats.dto;

/**
 * @author skurapati
 *
 */
public class CategoryReportDto {
	private Integer a_30_less;
	private Integer a_60_less;
	private Integer a_90_less;
	private Integer a_90_more;
	private Integer b_30_less;
	private Integer b_60_less;
	private Integer b_90_less;
	private Integer b_90_more;
	private Integer c_30_less;
	private Integer c_60_less;
	private Integer c_90_less;
	private Integer c_90_more;
	private Integer n_30_less;
	private Integer n_60_less;
	private Integer n_90_less;
	private Integer n_90_more;

	private Integer a_total;
	private Integer b_total;
	private Integer c_total;
	private Integer n_total;

	private Double a_30_less_ratio;
	private Double a_60_less_ratio;
	private Double a_90_less_ratio;
	private Double a_90_more_ratio;
	private Double b_30_less_ratio;
	private Double b_60_less_ratio;
	private Double b_90_less_ratio;
	private Double b_90_more_ratio;
	private Double c_30_less_ratio;
	private Double c_60_less_ratio;
	private Double c_90_less_ratio;
	private Double c_90_more_ratio;
	private Double n_30_less_ratio;
	private Double n_60_less_ratio;
	private Double n_90_less_ratio;
	private Double n_90_more_ratio;

	private Integer totalRecords;

	private String userId;

	private String dmName;
	private Integer a_count;
	private Integer b_count;
	private Integer c_count;
	private Integer n_count;
	
	private Double a_count_ratio;
	private Double b_count_ratio;
	private Double c_count_ratio;
	private Double n_count_ratio;
	
	private String strA_count_ratio;
	private String strB_count_ratio;
	private String strC_count_ratio;
	private String strN_count_ratio;

	private Double total_Count_ratio;
	
	private String strTotal_Count_ratio;
	
	private Integer less_30_total;
	private Integer less_60_total;
	private Integer less_90_total;
	private Integer more_90_total;
	private Integer all_period_total;

	private Double less_30_ratio_total;
	private Double less_60_ratio_total;
	private Double less_90_ratio_total;
	private Double more_90_ratio_total;
	private Double all_perio__ratio_total;

	
	
	
	public String getStrA_count_ratio() {
		return strA_count_ratio;
	}

	public void setStrA_count_ratio(String strA_count_ratio) {
		this.strA_count_ratio = strA_count_ratio;
	}

	public String getStrB_count_ratio() {
		return strB_count_ratio;
	}

	public void setStrB_count_ratio(String strB_count_ratio) {
		this.strB_count_ratio = strB_count_ratio;
	}

	public String getStrC_count_ratio() {
		return strC_count_ratio;
	}

	public void setStrC_count_ratio(String strC_count_ratio) {
		this.strC_count_ratio = strC_count_ratio;
	}

	public String getStrN_count_ratio() {
		return strN_count_ratio;
	}

	public void setStrN_count_ratio(String strN_count_ratio) {
		this.strN_count_ratio = strN_count_ratio;
	}

	public String getStrTotal_Count_ratio() {
		return strTotal_Count_ratio;
	}

	public void setStrTotal_Count_ratio(String strTotal_Count_ratio) {
		this.strTotal_Count_ratio = strTotal_Count_ratio;
	}

	public Double getA_count_ratio() {
		return a_count_ratio;
	}

	public void setA_count_ratio(Double a_count_ratio) {
		this.a_count_ratio = a_count_ratio;
	}

	public Double getB_count_ratio() {
		return b_count_ratio;
	}

	public void setB_count_ratio(Double b_count_ratio) {
		this.b_count_ratio = b_count_ratio;
	}

	public Double getC_count_ratio() {
		return c_count_ratio;
	}

	public void setC_count_ratio(Double c_count_ratio) {
		this.c_count_ratio = c_count_ratio;
	}

	public Double getN_count_ratio() {
		return n_count_ratio;
	}

	public void setN_count_ratio(Double n_count_ratio) {
		this.n_count_ratio = n_count_ratio;
	}


	public Double getTotal_Count_ratio() {
		return total_Count_ratio;
	}

	public void setTotal_Count_ratio(Double total_Count_ratio) {
		this.total_Count_ratio = total_Count_ratio;
	}

	public Integer getAll_period_total() {
		return all_period_total;
	}

	public void setAll_period_total(Integer all_period_total) {
		this.all_period_total = all_period_total;
	}

	public Double getAll_perio__ratio_total() {
		return all_perio__ratio_total;
	}

	public void setAll_perio__ratio_total(Double all_perio__ratio_total) {
		this.all_perio__ratio_total = all_perio__ratio_total;
	}

	public Integer getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(Integer totalRecords) {
		this.totalRecords = totalRecords;
	}

	public Integer getA_30_less() {
		return a_30_less;
	}

	public void setA_30_less(Integer a_30_less) {
		this.a_30_less = a_30_less;
	}

	public Integer getA_60_less() {
		return a_60_less;
	}

	public void setA_60_less(Integer a_60_less) {
		this.a_60_less = a_60_less;
	}

	public Integer getA_90_less() {
		return a_90_less;
	}

	public void setA_90_less(Integer a_90_less) {
		this.a_90_less = a_90_less;
	}

	public Integer getA_90_more() {
		return a_90_more;
	}

	public void setA_90_more(Integer a_90_more) {
		this.a_90_more = a_90_more;
	}

	public Integer getB_30_less() {
		return b_30_less;
	}

	public void setB_30_less(Integer b_30_less) {
		this.b_30_less = b_30_less;
	}

	public Integer getB_60_less() {
		return b_60_less;
	}

	public void setB_60_less(Integer b_60_less) {
		this.b_60_less = b_60_less;
	}

	public Integer getB_90_less() {
		return b_90_less;
	}

	public void setB_90_less(Integer b_90_less) {
		this.b_90_less = b_90_less;
	}

	public Integer getB_90_more() {
		return b_90_more;
	}

	public void setB_90_more(Integer b_90_more) {
		this.b_90_more = b_90_more;
	}

	public Integer getC_30_less() {
		return c_30_less;
	}

	public void setC_30_less(Integer c_30_less) {
		this.c_30_less = c_30_less;
	}

	public Integer getC_60_less() {
		return c_60_less;
	}

	public void setC_60_less(Integer c_60_less) {
		this.c_60_less = c_60_less;
	}

	public Integer getC_90_less() {
		return c_90_less;
	}

	public void setC_90_less(Integer c_90_less) {
		this.c_90_less = c_90_less;
	}

	public Integer getC_90_more() {
		return c_90_more;
	}

	public void setC_90_more(Integer c_90_more) {
		this.c_90_more = c_90_more;
	}

	public Integer getN_30_less() {
		return n_30_less;
	}

	public void setN_30_less(Integer n_30_less) {
		this.n_30_less = n_30_less;
	}

	public Integer getN_60_less() {
		return n_60_less;
	}

	public void setN_60_less(Integer n_60_less) {
		this.n_60_less = n_60_less;
	}

	public Integer getN_90_less() {
		return n_90_less;
	}

	public void setN_90_less(Integer n_90_less) {
		this.n_90_less = n_90_less;
	}

	public Integer getN_90_more() {
		return n_90_more;
	}

	public void setN_90_more(Integer n_90_more) {
		this.n_90_more = n_90_more;
	}

	public Double getA_30_less_ratio() {
		return a_30_less_ratio;
	}

	public void setA_30_less_ratio(Double a_30_less_ratio) {
		this.a_30_less_ratio = a_30_less_ratio;
	}

	public Double getA_60_less_ratio() {
		return a_60_less_ratio;
	}

	public void setA_60_less_ratio(Double a_60_less_ratio) {
		this.a_60_less_ratio = a_60_less_ratio;
	}

	public Double getA_90_less_ratio() {
		return a_90_less_ratio;
	}

	public void setA_90_less_ratio(Double a_90_less_ratio) {
		this.a_90_less_ratio = a_90_less_ratio;
	}

	public Double getA_90_more_ratio() {
		return a_90_more_ratio;
	}

	public void setA_90_more_ratio(Double a_90_more_ratio) {
		this.a_90_more_ratio = a_90_more_ratio;
	}

	public Double getB_30_less_ratio() {
		return b_30_less_ratio;
	}

	public void setB_30_less_ratio(Double b_30_less_ratio) {
		this.b_30_less_ratio = b_30_less_ratio;
	}

	public Double getB_60_less_ratio() {
		return b_60_less_ratio;
	}

	public void setB_60_less_ratio(Double b_60_less_ratio) {
		this.b_60_less_ratio = b_60_less_ratio;
	}

	public Double getB_90_less_ratio() {
		return b_90_less_ratio;
	}

	public void setB_90_less_ratio(Double b_90_less_ratio) {
		this.b_90_less_ratio = b_90_less_ratio;
	}

	public Double getB_90_more_ratio() {
		return b_90_more_ratio;
	}

	public void setB_90_more_ratio(Double b_90_more_ratio) {
		this.b_90_more_ratio = b_90_more_ratio;
	}

	public Double getC_30_less_ratio() {
		return c_30_less_ratio;
	}

	public void setC_30_less_ratio(Double c_30_less_ratio) {
		this.c_30_less_ratio = c_30_less_ratio;
	}

	public Double getC_60_less_ratio() {
		return c_60_less_ratio;
	}

	public void setC_60_less_ratio(Double c_60_less_ratio) {
		this.c_60_less_ratio = c_60_less_ratio;
	}

	public Double getC_90_less_ratio() {
		return c_90_less_ratio;
	}

	public void setC_90_less_ratio(Double c_90_less_ratio) {
		this.c_90_less_ratio = c_90_less_ratio;
	}

	public Double getC_90_more_ratio() {
		return c_90_more_ratio;
	}

	public void setC_90_more_ratio(Double c_90_more_ratio) {
		this.c_90_more_ratio = c_90_more_ratio;
	}

	public Double getN_30_less_ratio() {
		return n_30_less_ratio;
	}

	public void setN_30_less_ratio(Double n_30_less_ratio) {
		this.n_30_less_ratio = n_30_less_ratio;
	}

	public Double getN_60_less_ratio() {
		return n_60_less_ratio;
	}

	public void setN_60_less_ratio(Double n_60_less_ratio) {
		this.n_60_less_ratio = n_60_less_ratio;
	}

	public Double getN_90_less_ratio() {
		return n_90_less_ratio;
	}

	public void setN_90_less_ratio(Double n_90_less_ratio) {
		this.n_90_less_ratio = n_90_less_ratio;
	}

	public Double getN_90_more_ratio() {
		return n_90_more_ratio;
	}

	public void setN_90_more_ratio(Double n_90_more_ratio) {
		this.n_90_more_ratio = n_90_more_ratio;
	}

	public Integer getA_total() {
		return a_total;
	}

	public void setA_total(Integer a_total) {
		this.a_total = a_total;
	}

	public Integer getB_total() {
		return b_total;
	}

	public void setB_total(Integer b_total) {
		this.b_total = b_total;
	}

	public Integer getC_total() {
		return c_total;
	}

	public void setC_total(Integer c_total) {
		this.c_total = c_total;
	}

	public Integer getN_total() {
		return n_total;
	}

	public void setN_total(Integer n_total) {
		this.n_total = n_total;
	}

	public String getDmName() {
		return dmName;
	}

	public void setDmName(String dmName) {
		this.dmName = dmName;
	}

	public Integer getA_count() {
		return a_count;
	}

	public void setA_count(Integer a_count) {
		this.a_count = a_count;
	}

	public Integer getB_count() {
		return b_count;
	}

	public void setB_count(Integer b_count) {
		this.b_count = b_count;
	}

	public Integer getC_count() {
		return c_count;
	}

	public void setC_count(Integer c_count) {
		this.c_count = c_count;
	}

	public Integer getN_count() {
		return n_count;
	}

	public void setN_count(Integer n_count) {
		this.n_count = n_count;
	}

	/**
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Integer getLess_30_total() {
		return less_30_total;
	}

	public void setLess_30_total(Integer less_30_total) {
		this.less_30_total = less_30_total;
	}

	public Integer getLess_60_total() {
		return less_60_total;
	}

	public void setLess_60_total(Integer less_60_total) {
		this.less_60_total = less_60_total;
	}

	public Integer getLess_90_total() {
		return less_90_total;
	}

	public void setLess_90_total(Integer less_90_total) {
		this.less_90_total = less_90_total;
	}

	public Integer getMore_90_total() {
		return more_90_total;
	}

	public void setMore_90_total(Integer more_90_total) {
		this.more_90_total = more_90_total;
	}

	public Double getLess_30_ratio_total() {
		return less_30_ratio_total;
	}

	public void setLess_30_ratio_total(Double less_30_ratio_total) {
		this.less_30_ratio_total = less_30_ratio_total;
	}

	public Double getLess_60_ratio_total() {
		return less_60_ratio_total;
	}

	public void setLess_60_ratio_total(Double less_60_ratio_total) {
		this.less_60_ratio_total = less_60_ratio_total;
	}

	public Double getLess_90_ratio_total() {
		return less_90_ratio_total;
	}

	public void setLess_90_ratio_total(Double less_90_ratio_total) {
		this.less_90_ratio_total = less_90_ratio_total;
	}

	public Double getMore_90_ratio_total() {
		return more_90_ratio_total;
	}

	public void setMore_90_ratio_total(Double more_90_ratio_total) {
		this.more_90_ratio_total = more_90_ratio_total;
	}
}
