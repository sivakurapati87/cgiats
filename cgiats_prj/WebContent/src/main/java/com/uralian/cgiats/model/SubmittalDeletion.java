package com.uralian.cgiats.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * @author Radhika Bharatha
 *
 */

@Entity
@Table(name = "submittal_deletion")
public class SubmittalDeletion extends AuditableEntity<Integer> implements Serializable{
	private static final long serialVersionUID = 1537337264767793979L;

	@Id
	@SequenceGenerator(name = "generator", sequenceName = "submittal_deletion_seq")
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator = "generator")
	@Column(name = "submittal_deletion_id")
	private Integer id;

	@Column(name = "status")
	private String status;

	@Column(name = "submittal_id")
	private String submittalId;

	public String getSubmittalId() {
		return submittalId;
	}

	public void setSubmittalId(String submittalId) {
		this.submittalId = submittalId;
	}
	@Column(name = "reason")
	private String reason;

	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return id;
	}

	@Override
	protected Object getBusinessKey() {
		// TODO Auto-generated method stub
		return id;
	}

	/**
	 */
	public SubmittalDeletion() {
		// TODO Auto-generated constructor stub


		// TODO Auto-generated constructor stub
		//	 setSubmittal(submittal);	
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	@Override
	public String toString() {
		return "SubmittalDeletion [id=" + id + ", status=" + status
				+ ", submittalId=" + submittalId + ", reason=" + reason + "]";
	}
}


