package com.uralian.cgiats.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.uralian.cgiats.dto.CategoryReportDto;
import com.uralian.cgiats.dto.JobOrderDto;
import com.uralian.cgiats.dto.ReportwiseDto;
import com.uralian.cgiats.model.JobOrderStatus;
import com.uralian.cgiats.service.JobOrderService;
import com.uralian.cgiats.service.SubmittalService;
import com.uralian.cgiats.util.Constants;
import com.uralian.cgiats.util.Utils;

@Controller
@RequestMapping("customReports")
public class CustomReportsController {
	protected final org.slf4j.Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private SubmittalService subService;
	@Autowired
	private JobOrderService jobOrderService;

	@RequestMapping(value = "/getDmCustomReportData", method = RequestMethod.POST)
	public ResponseEntity<?> getDmsCustomReport(HttpServletRequest request, @RequestBody Map<String, String> map) {
		if (Utils.getLoginUserId(request) != null) {
			String status = map.get("status");
			if (status != null && status.trim().equalsIgnoreCase(Constants.ALL)) {
				status = null;
			}
			if (map.get("startDate") != null && map.get("endDate") != null) {
				Object dto = subService.getdmsDetailsReport(Utils.convertStringToDate(map.get("startDate")),
						Utils.getEndDate(map.get("endDate")), map.get("dmName"), status);
				return new ResponseEntity<>(dto, HttpStatus.OK);
			}
			return new ResponseEntity<>(null, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getJobOrdersCustomReportData", method = RequestMethod.POST)
	public ResponseEntity<?> getRecruiterCustomReport(HttpServletRequest request,
			@RequestBody Map<String, String> map) {
		if (Utils.getLoginUserId(request) != null) {
			Map<String, Object> dto = new HashMap<String, Object>();
			if (map.get("startDate") != null && map.get("endDate") != null) {
				dto = subService.getJobOrdersCustomReport(Utils.convertStringToDate(map.get("startDate")),
						Utils.getEndDate(map.get("endDate")), map.get("dmName"));
			}

			return new ResponseEntity<>(dto, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getDMClientWiseSubmittals", method = RequestMethod.POST)
	public ResponseEntity<?> getDMClientWiseSubmittals(HttpServletRequest request,
			@RequestBody Map<String, String> map) {
		if (Utils.getLoginUserId(request) != null) {
			Map<String, Object> list = new HashMap<String, Object>();
			if (map.get("startDate") != null && map.get("endDate") != null && map.get("dmName") != null
					&& map.get("clients") != null) {
				Date srtDate = Utils.convertStringToDate(map.get("startDate"));
				Date endDate = Utils.getEndDate(map.get("endDate"));
				String dmName = map.get("dmName");
				String clients = map.get("clients");
				List<String> clientList = new ArrayList<String>();
				clientList = Utils.getStrList_FromStr(clients);
				String clientsWithSingleQuote = Utils.getListWithSingleQuote(clientList);
				list = subService.getDMClientWiseSubmittals(srtDate, endDate, dmName, clientsWithSingleQuote);
				return new ResponseEntity<>(list, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(list, HttpStatus.OK);
			}

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getClientReportData", method = RequestMethod.POST)
	public ResponseEntity<?> getClientReportData(HttpServletRequest request, @RequestBody Map<String, String> map) {
		if (Utils.getLoginUserId(request) != null) {
			Map<String, Object> dto = new HashMap<String, Object>();
			if (map.get("startDate") != null && map.get("endDate") != null) {
				dto = subService.getClientReportData(Utils.convertStringToDate(map.get("startDate")),
						Utils.getEndDate(map.get("endDate")));
			}

			return new ResponseEntity<>(dto, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getClientDetailsReportData", method = RequestMethod.POST)
	public ResponseEntity<?> getClientDetialsReportData(HttpServletRequest request,
			@RequestBody Map<String, String> map) {
		if (Utils.getLoginUserId(request) != null) {
			Map<String, Object> dto = new HashMap<String, Object>();
			if (map.get("startDate") != null && map.get("endDate") != null) {
				dto = subService.getClientDetialsReportData(Utils.convertStringToDate(map.get("startDate")),
						Utils.getEndDate(map.get("endDate")), map.get("client"));
			}

			return new ResponseEntity<>(dto, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getCategoryReportData", method = RequestMethod.POST)
	public ResponseEntity<?> getCategoryReportData(HttpServletRequest request,
			@RequestBody ReportwiseDto reportwiseDto) {
		if (Utils.getLoginUserId(request) != null) {
			CategoryReportDto dto = null;
			if (reportwiseDto != null) {
				if (reportwiseDto.getStatus() != null && (!(reportwiseDto.getStatus().trim().length() > 0)
						|| reportwiseDto.getStatus().equalsIgnoreCase(Constants.ALL))) {
					reportwiseDto.setStatus(null);
				}
				dto = jobOrderService.getCategoryReportData(reportwiseDto);
			}

			return new ResponseEntity<>(dto, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getJobOrdersByCategoryWithTime", method = RequestMethod.POST)
	public ResponseEntity<?> getJobOrdersByCategoryWithTime(HttpServletRequest request,
			@RequestBody ReportwiseDto reportwiseDto) {
		if (Utils.getLoginUserId(request) != null) {
			List<JobOrderDto> list = null;
			if (reportwiseDto != null) {
				if (reportwiseDto.getStatus() != null && (!(reportwiseDto.getStatus().trim().length() > 0)
						|| reportwiseDto.getStatus().equalsIgnoreCase(Constants.ALL))) {
					reportwiseDto.setStatus(null);
				}
				if (reportwiseDto.getCategory() != null && (reportwiseDto.getCategory().trim().length() == 0
						|| reportwiseDto.getCategory().equalsIgnoreCase(Constants.TOTAL))) {
					reportwiseDto.setCategory(null);
				}
				list = jobOrderService.getJobOrdersByCategoryWithTime(reportwiseDto);
			}

			return new ResponseEntity<>(list, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@RequestMapping(value = "/getCategoryReportByDMsData", method = RequestMethod.POST)
	public ResponseEntity<?> getCategoryReportByDMsData(HttpServletRequest request,
			@RequestBody ReportwiseDto reportwiseDto) {
		if (Utils.getLoginUserId(request) != null) {
			List<CategoryReportDto> categoryList = null;
			if (reportwiseDto != null) {
				if (reportwiseDto.getStatus() != null && (!(reportwiseDto.getStatus().trim().length() > 0)
						|| reportwiseDto.getStatus().equalsIgnoreCase(Constants.ALL))) {
					reportwiseDto.setStatus(null);
				}
				categoryList = jobOrderService.getCategoryReportByDMsData(reportwiseDto);
			}

			return new ResponseEntity<>(categoryList, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}
	@RequestMapping(value = "/getJobOrdersByCategoryAndDM", method = RequestMethod.POST)
	public ResponseEntity<?> getJobOrdersByCategoryAndDM(HttpServletRequest request,
			@RequestBody ReportwiseDto reportwiseDto) {
		if (Utils.getLoginUserId(request) != null) {
			List<JobOrderDto> list = null;
			if (reportwiseDto != null) {
				if (reportwiseDto.getStatus() != null && (!(reportwiseDto.getStatus().trim().length() > 0)
						|| reportwiseDto.getStatus().equalsIgnoreCase(Constants.ALL))) {
					reportwiseDto.setStatus(null);
				}
				if (reportwiseDto.getCategory() != null && (reportwiseDto.getCategory().trim().length() == 0
						|| reportwiseDto.getCategory().equalsIgnoreCase(Constants.TOTAL))) {
					reportwiseDto.setCategory(null);
				}
				list = jobOrderService.getJobOrdersByCategoryAndDM(reportwiseDto);
			}

			return new ResponseEntity<>(list, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}
	@RequestMapping(value = "/getLocationReportData", method = RequestMethod.POST)
	public ResponseEntity<?> getLocationReportData(HttpServletRequest request,
			@RequestBody ReportwiseDto reportwiseDto) {
		if (Utils.getLoginUserId(request) != null) {
			if (reportwiseDto.getStartDate() != null && reportwiseDto.getEndDate() != null) {

				if (reportwiseDto.getLocation() != null && reportwiseDto.getLocation().trim().length() > 0) {
					reportwiseDto.setLocation(reportwiseDto.getLocation().trim().replaceAll("^,|,$", ""));
					reportwiseDto.setLocations(Utils.getStrList_FromStr(reportwiseDto.getLocation()));
					reportwiseDto.setLocation(Utils.getListWithSingleQuote(reportwiseDto.getLocations()));
				}

				Object dto = subService.getLocationReportData(Utils.convertStringToDate(reportwiseDto.getStartDate()),
						Utils.getEndDate(reportwiseDto.getEndDate()), reportwiseDto.getLocation());
				return new ResponseEntity<>(dto, HttpStatus.OK);
			}
			return new ResponseEntity<>(null, HttpStatus.OK);

		} else {
			log.error("User must login");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}
}
