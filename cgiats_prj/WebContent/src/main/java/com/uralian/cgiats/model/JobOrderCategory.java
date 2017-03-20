package com.uralian.cgiats.model;

/**
 * 
 * @author skurapati
 *
 */
public enum JobOrderCategory {
	DirectCustomerRelationship("A-Direct Customer/ Relationship"), VMSPortal("B-VMS Portal"), ThirdParty(
			"C-Third Party"), NotSpecified("Not Specified");
	private String value;

	JobOrderCategory(String value) {
		this.value = value;
	}

	public String toString() {
		return this.value;
	}
}
