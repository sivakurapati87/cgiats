;(function(angular){
	"use strict";
	
	angular.module("dmjobordersreport",[])
    .controller("dmjoborderscontroller",function($rootScope, $scope, blockUI, $http, $timeout, $filter, $mdDialog, $mdMedia, $window, $state,dateRangeService, $stateParams) {
    	
    	$scope.currentDateWithTime = new Date();
    	$scope.candidates = [];
		$scope.candidates.push({});
    	var candidateData = [];
    	var expansionData = [];
    	$scope.jobOrderTable = false;
        var	strStatuses = null;
    	//var obj = {dmname : $stateParams.dmname, startdate : $stateParams.startDate, enddate : $stateParams.endDate, strStatuses : strStatuses};
    	$scope.onload = function(){
    		$scope.searchjoborder();
    	}
    	
    	$scope.searchjoborder = function()
		{
    		$scope.pageNumber = 1;
			candidateData = [];
			dispalyTable();
    		dmjoborders();
		}
    	
    	function dmjoborders() {
    		strStatuses = $("#status").val().toUpperCase();
    		var obj = {dmname : $stateParams.dmname, startdate : $stateParams.startDate, enddate : $stateParams.endDate, strStatuses : strStatuses};
    		//alert("obj::"+JSON.stringify(obj));
    		var response = $http.post("jobOrder/getDMJobOrdersReport",obj);
			response.success(function(data, status,headers, config) 
					{
				$scope.allJobOrdersList = data;
				candidateData = [];
				$scope.exportAllJobOrdersList = [];
				for (var i = 0; i < data.length; i++) {
					var candidateObj = data[i];
					candidateData.push(candidateObj);
					
					var obj = {jobOrderId:data[i].jobOrderId,
							category: data[i].category,
							priority: data[i].priority,status: data[i].status,
							type: data[i].type,title:data[i].title,client: data[i].client,location: data[i].location,dm: data[i].dm,assignedTo: data[i].assignedTo,
							updatedDate: data[i].updatedDate,sbm: data[i].sbm,activeDays: data[i].activeDays};
					$scope.exportAllJobOrdersList.push(obj);
				}
				dispalyTable();
					 });
			response.error(function(data, status, headers, config){
	  			  if(status == constants.FORBIDDEN){
	  				location.href = 'login.html';
	  			  }else{  			  
	  				$state.transitionTo("ErrorPage",{statusvalue  : status});
	  			  }
	  		  });
    		
		}
    	
    
$scope.jobOrderTable = true;
		
		function dispalyTable() {
			$scope.candidates
					.forEach(function(candidate, index) {
						candidate.allJobOrderBsTableControl = {
							options : {
								data : candidateData || {},
								striped : true,
								pagination : true,
								paginationVAlign : "both",
								pageSize : 10,
								pageList : [ 10, 20, 50 ],
								search : false,
								showColumns : false,
								pageNumber:  ($scope.pageNumber? $scope.pageNumber:1),
								showRefresh : false,
								clickToSelect : false,
								showToggle : false,
								detailView : true,
								maintainSelected : true,
								columns : [
										{
											field : 'jobOrderId',
											title : 'ID',
											align : 'left',
											
											sortable : true
										},{
											field : 'category',
											title : 'Category',
											align : 'left',
											formatter : categoryWithImage,
											sortable : true
										},
										{
											field : 'priority',
											title : 'Priority',
											align : 'left',
											formatter : priorityWithImage,
											sortable : true
										},
										{
											field : 'status',
											title : 'Status',
											align : 'left',
											formatter : statusWithImage,
											sortable : true
										},
										{
											field : 'type',
											title : 'Type',
											align : 'left',
											formatter : typeWithImage,
											sortable : true
										},
										{
											field : 'title',
											title : 'Title',
											align : 'left',
											sortable : true
										},
										{
											field : 'client',
											title : 'Client',
											align : 'left',
											sortable : true
										},
										{
											field : 'location',
											title : 'Location',
											align : 'left',
											sortable : true
										},
										{
											field : 'dm',
											title : 'DM / ADM',
											align : 'left',
											sortable : true
										},
										{
											field : 'assignedTo',
											title : 'Assigned To',
											align : 'left',
											sortable : true
										},
										{
											field : 'updatedDate',
											title : 'Updated On',
											align : 'left',
											sortable : true
										},
										{
											field : 'sbm',
											title : 'Sbm',
											align : 'left',
											sortable : true
										},
										{
											field : 'activeDays',
											title : 'Active Days',
											align : 'left',
											sortable : true
										},
										{
											field : 'actions',
											title : 'Actions',
											align : 'left',
											sortable : false,
											events : window.operateEvents,
											formatter : actionFormatter
										} ],
										
										onPageChange: function (number, size) {
											   $scope.pageNumber = number;
											   $scope.pageSize = size;
												
											},
										
										onExpandRow : function(index,
												row, $detail) {
											var jobOrderId = row.jobOrderId;
											var response = $http
													.post('jobOrder/submittalDetails?jobOrderId='
															+ jobOrderId);
											response
													.success(function(
															data,
															status,
															headers,
															config) {
														expansionData = [];
														for (var i = 0; i < data.length; i++) {
															var submittalObj = data[i];
															expansionData
																	.push(submittalObj);
														}
														var tableres = '<div class="tbdiv">';
														/*if(!($rootScope.rsLoginUser.userRole == constants.IN_DM || $rootScope.rsLoginUser.userRole == constants.IN_Recruiter)){
														tableres += '<div class="tbfirstdiv"><button type="button" class="btn btn-primary blue" onclick="createSubmittal('+row.jobOrderId+',\''+row.status+'\')">Create Submittal</button></div>';
														}*/
														tableres += '</div><br>'
														/* tableres += 
														'<div class="tbseconddiv"><label>Search By:</label><select class="subrowdd" id="searchBy_'+row.jobOrderId+'_Id"><option value="0">select</option><option value="title_'+row.title+'">Title</option>'+
														'<option value="location_'+row.location+'">Location</option><option value="keyskills_'+row.keySkills+'">Key Skills</option></select></div>'+
														'<div class="tbthirddiv"><button type="button" class="btn btn-primary blue" onclick="viewResumes(searchBy_'+row.jobOrderId+'_Id)">View Matching Resumes</button></div><div class="clearboth"></div></div>'*/
														
														if (expansionData != '') {
															tableres +='<table class="innertable">'
																	+ '<tr><th>Created On</th><th>Updated On</th><th>Created By</th><th>Status</th><th>Candidate</th><th></th></tr>'
															for (var i = 0; i < expansionData.length; i++) {
																tableres += '<tr><td>'
																		+(expansionData[i].createdOn)
																		+ '</td>'
																		+ '<td>'
																		+(expansionData[i].updatedOn)
																		+ '</td>'
																		+ '<td>'
																		+ expansionData[i].createdBy
																		+ '</td>'
																		+ '<td>'
																		+ expansionData[i].status 
																		+ '</td>'
																		+ '<td>'
																		+ expansionData[i].candidateName 
																		+ '</td>'
																		if(row.status!=constants.CLOSED){
																			tableres +=	'<td><a class="view actionIcons" title="View Detail" onclick="view'+expansionData[i].submittalId+'Submittal('+expansionData[i].submittalId+');"><i class="fa fa-search" style="font-size:12px;"></i></a>'
																			+    '<a class="edit actionIcons" title="Edit" href="#/submitals/editsubmitals?submittalId='+expansionData[i].submittalId+'&pageName='+constants.DMJOBORDERSREPORT+'"><i class="fa fa-edit" style="font-size:12px;"></i></a>'
																			+    '<a class="remove actionIcons" title="Remove" onclick="delete'+expansionData[i].submittalId+'Submittal('+expansionData[i].submittalId+');"><i class="fa fa-trash-o" style="font-size:12px;"></i></a>'
																				+'</td>';
																			}else
																				{
																				tableres +=	'<td><a class="view actionIcons" title="View Detail" onclick="view'+expansionData[i].submittalId+'Submittal('+expansionData[i].submittalId+');"><i class="fa fa-search" style="font-size:12px;"></i></a>'
																				+    '<a class="edit actionIcons" title="Edit" href="#/submitals/editsubmitals?submittalId='+expansionData[i].submittalId+'&pageName='+constants.DMJOBORDERSREPORT+'"><i class="fa fa-edit" style="font-size:12px;"></i></a>'
																				+    '<a class="remove actionIcons" title="Remove" onclick="delete'+expansionData[i].submittalId+'Submittal('+expansionData[i].submittalId+');"><i class="fa fa-trash-o" style="font-size:12px;"></i></a>'
																				+'</td>';
																				}
																			tableres +='</tr>'
																		+'<script type="text/javascript">'
																		 +'function view'+expansionData[i].submittalId+'Submittal(id){'
																		 +'$.ajax({'
																		 +'url:"jobOrder/getSubmittalEventHistoryBySubmittalId/"+id,'
																		 +'type:"GET",'
																		 +'data:null,'
																		 +'dataType:"json",'
																		 +'success:function(data){'
																		 +'var viewsubmittaldata="";'
																		 +'for(var i=0; i<data.length; i++){'
																		 +'viewsubmittaldata=viewsubmittaldata + "<div><b>" + data[i].status + " - <i>" + data[i].strCreatedOn + "</i></b> <span>"+ (data[i].notes!='+"undefined"+'?data[i].notes:"") + "</span></div>";'
																		 +'$("#viewsubmittalid").html(viewsubmittaldata);'
																		 +'}'
																		 +'$("#submitalstatus").show();'
																		 +'}'
																		 +'});'
																		 +'}'
																		 +'</script>'
																		 
																		 +'<script type="text/javascript">'
																		 +'function delete'+expansionData[i].submittalId+'Submittal(delId){'
																		 +'var deletesubmittal="";'
																		 +'deletesubmittal = deletesubmittal+ "<div><label>Reason <i id='+"poperr"+'>Reason Should be more than 20 characters</i></label><textarea placeholder='+"Reason&nbsp;For&nbsp;Delete"+' rows='+8+' cols='+40+' id='+"deleteReason"+'></textarea></div>";'
																		 +'deletesubmittal = deletesubmittal+"<div><button type='+"button"+' class='+"popupbtn"+' onclick='+"savedelreason(\"+delId+\")"+'>Save</button></div>";'
																		 +'deletesubmittal = deletesubmittal+"<div><button type='+"button"+' class='+"popupbtn"+' onclick='+"canceldelreason()"+'>cancel</button></div>";'
																		 +'$("#deletesubmittal").html(deletesubmittal);'
																		 +'$("#submitaldelete").show();'
																		 +'}'
																		 +'</script>'
																		 
																		 +'<script type="text/javascript">'
																		 +'function savedelreason(delId){'
																		 +'var deleteReason = $("#deleteReason").val();'
																		 +'if(deleteReason.length>20){'
																		 +'$("#poperr").hide();'
																		 +'$.ajax({'
																		 +'url:"jobOrder/deleteSubmittal?submittalID=\"+delId+\"&reason=\"+deleteReason+\"",'
																		 +'type:"GET",'
																		 +'data:null,'
																		 +'dataType:"text",'
																		 +'success:function(data){'
																		 +'$("#submitaldelete").hide();'
																		 +'angular.element("#dmjoborderscontroller").scope().onload();'
																		 +'angular.element("#dmjoborderscontroller").scope().$apply() '
																		 +'}'
																		 +'});'
																		 +'}'
																		 +'else{'
																		 +'$("#poperr").show();'
																		 +'}'
																		 +'}'
																		 +'</script>'
																		 
																		 +'<script type="text/javascript">'
																		 +'function canceldelreason(){'
																		 +'$("#submitaldelete").hide();'
																		 +'}'
																		 +'</script>'
															}
														} else {
															tableres += '<table class="innertable">'
																	+ '<tr><th>Created On</th><th>Updated On</th><th>Created By</th><th>Status</th><th>Candidate</th></tr>'
																	+ '<tr><td colspan="5" align="center">No Submittals Found</td></tr>'
														}
														tableres += '</table><script type="text/javascript">function viewResumes(id){if((document.getElementById(id.id).value)==0){ $.growl	.error({message : "Select SearchBy Field for Viewing  Matching Resumes"});} else{ window.location="#/candidates/search?paramValue="+document.getElementById(id.id).value}}</script>'
															 +'<script type="text/javascript">function createSubmittal(job_orderId,orderStatus){'
															 +'if(!(orderStatus === constants.CLOSED)){'
															 +'window.location="#/submitals/createsubmitals?jobOrder="+job_orderId+"&pageName="+constants.DMJOBORDERSREPORT'
															 +'}else{'
															 +'$("#viewsubmittalid").html("The Selected Joborder is Closed. Please Reopen the Joborder");'
															 +'$("#submitalstatus").show();'
															 +'}}'
															 +'</script>'
														$detail
																.html(tableres);
												
													});
											response.error(function(data, status, headers, config){
							        			  if(status == constants.FORBIDDEN){
							        				location.href = 'login.html';
							        			  }else{  			  
							        				$state.transitionTo("ErrorPage",{statusvalue  : status});
							        			  }
							        		  });
										},
							}
						    };
						
						function categoryWithImage(value, row,
								index) {
							if(row.category == constants.DirectCustomerRelationship){
							return [
									
									'<i class="fa fa-handshake-o" aria-hidden="true" style="color:green;"></i>',
									'&nbsp;<label>'+row.category+'</label>'
									 ]
									.join('');
							}
							if(row.category == constants.VMSPortal){
								return [
										
										'<i class="fa fa-cloud" aria-hidden="true" style="color:#ff9900;"></i>',
										'&nbsp;<label>'+row.category+'</label>'
										 ]
										.join('');
								}
							if(row.category == constants.ThirdParty){
								return [
										
										'<i class="fa fa-user-circle-o" aria-hidden="true" style="color:red;"></i>',
										'&nbsp;<label>'+row.category+'</label>'
										 ]
										.join('');
								}
						}
						function priorityWithImage(value, row,
								index) {
							if(row.priority == constants.HIGH){
							return [
									
									'<i class="fa fa-circle" aria-hidden="true" style="color:red;"></i>',
									'&nbsp;<label>'+row.priority+'</label>'
									 ]
									.join('');
							}
							if(row.priority == constants.MEDIUM){
								return [
										
										'<i class="fa fa-circle" aria-hidden="true" style="color:#ff9900;"></i>',
										'&nbsp;<label>'+row.priority+'</label>'
										 ]
										.join('');
								}
							if(row.priority == constants.LOW){
								return [
										
										'<i class="fa fa-circle" aria-hidden="true" style="color:green;"></i>',
										'&nbsp;<label>'+row.priority+'</label>'
										 ]
										.join('');
								}
						}
						
						function statusWithImage(value, row,
								index) {
							if(row.status == constants.OPEN){
							return [
									
									'<i class="fa fa-arrow-circle-right" aria-hidden="true" style="color:#00a3cc;" title="OPEN"></i>',
									'&nbsp;<label>'+row.status+'</label>'
									 ]
									.join('');
							}
							if(row.status == constants.ASSIGNED){
								return [
										
										'<i class="fa fa-user" aria-hidden="true" style="color:#3399ff;" title="ASSIGNED"></i>',
										'&nbsp;<label>'+row.status+'</label>'
										 ]
										.join('');
								}
							if(row.status == constants.REOPEN){
								return [
										
										'<i class="fa fa-folder-open-o" aria-hidden="true" title="REOPEN" style="color:#cc6600;"></i>',
										'&nbsp;<label>'+row.status+'</label>'
										 ]
										.join('');
								}
							if(row.status == constants.CLOSED){
								return [
										
										'<i class="fa fa-times" aria-hidden="true" style="color:#ff4d4d;" title="CLOSED"></i>',
										'&nbsp;<label>'+row.status+'</label>'
										 ]
										.join('');
								}
							if(row.status == constants.FILLED){
								return [
										
										'<i class="fa fa-check-square-o" aria-hidden="true" style="color:#2db300;" title="FILLED"></i>',
										'&nbsp;<label>'+row.status+'</label>'
										 ]
										.join('');
								}
						}
						function typeWithImage(value, row,
								index) {
							if(row.type == constants.PERMANENT){
							return [
									
									'<i class="fa fa-link" aria-hidden="true" title="PERMANENT" style="color:#336d30;"></i>',
									'&nbsp;<label>'+row.type+'</label>'
									 ]
									.join('');
							}
							if(row.type == constants.CONTRACT){
								return [
										
										'<i class="fa fa-chain-broken" aria-hidden="true" style="color:#ff0000;" title="CONTRACT"></i>',
										'&nbsp;<label>'+row.type+'</label>'
										 ]
										.join('');
								}
							if(row.type == constants.BOTH){
								return [
										
										'<i class="fa fa-venus-double" aria-hidden="true" title="BOTH" style="color:#804000;"></i>',
										'&nbsp;<label>'+row.type+'</label>'
										 ]
										.join('');
								}
							if(row.type == constants.NOTSPECIFIED){
								return [
										
										'<i class="fa fa-arrows-alt" aria-hidden="true" title="NOTSPECIFIED" style="color:#c96dad;"></i>',
										'&nbsp;<label>'+row.type+'</label>'
										 ]
										.join('');
								}
						}
						
						
						
						/* Table button action formatters */

						function actionFormatter(value, row,
								index) {
							if($rootScope.rsLoginUser.userRole == constants.Recruiter){
								if(!(row.status === constants.CLOSED)){
							return [
									
									'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
									//'<a class="plus actionIcons" title="Create Submittal" ><i class="fa fa-plus" style="font-size:12px;"></i></a> ',
									 ]
									.join('');
								}else{
									return [
											
											'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
											 ]
											.join('');
								}
							}
							if(($rootScope.rsLoginUser.userRole == constants.DM && $rootScope.rsLoginUser.userId != constants.ANIL_USER_ID) || $rootScope.rsLoginUser.userRole == constants.ADM){
								if(!(row.status === constants.CLOSED)){
								return [

										'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
										//'<a class="plus actionIcons" title="Create Submittal" ><i class="fa fa-plus" style="font-size:12px;"></i></a> ',
										'<a class="download actionIcons" title="Download JobOrder" style="color:#00a3cc;"><i class="fa fa-download" style="font-size:12px;"></i></a> '
										 ]
										.join('');
								}
								else{
									return [

											'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
											'<a class="download actionIcons" title="Download JobOrder" style="color:#00a3cc;"><i class="fa fa-download" style="font-size:12px;"></i></a> '
											 ]
											.join('');
								}
								}
							
							if($rootScope.rsLoginUser.userRole == constants.DivisionHead || $rootScope.rsLoginUser.userRole == constants.Administrator || $rootScope.rsLoginUser.userRole == constants.HR || $rootScope.rsLoginUser.userRole == constants.EM || $rootScope.rsLoginUser.userRole == constants.Manager
									 || $rootScope.rsLoginUser.userId === constants.ANIL_USER_ID){
								if(!(row.status === constants.CLOSED)){
									if($rootScope.rsLoginUser.userId === constants.ANIL_USER_ID || $rootScope.rsLoginUser.userId === constants.HARI_USER_ID){
										return [
										'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
										//'<a class="copy actionIcons" title="Copy" ><i class="fa fa-copy" style="font-size:12px;"></i></a> ',
										//'<a class="plus actionIcons" title="Create Submittal" ><i class="fa fa-plus" style="font-size:12px;"></i></a> ',
										'<a class="download actionIcons" title="Download JobOrder" style="color:#00a3cc;"><i class="fa fa-download" style="font-size:12px;"></i></a> ',
										'<a class="edit actionIcons" title="Edit JobOrder"><i class="fa fa-edit" style="font-size:12px;"></i></a>',
										//'<a class="remove actionIcons" title="Remove"><i class="fa fa-trash-o" style="font-size:12px;"></i></a>',
										 ]
										.join('');
									}else{
								return [
								
								'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
								//'<a class="copy actionIcons" title="Copy" ><i class="fa fa-copy" style="font-size:12px;"></i></a> ',
								//'<a class="plus actionIcons" title="Create Submittal" ><i class="fa fa-plus" style="font-size:12px;"></i></a> ',
								'<a class="download actionIcons" title="Download JobOrder" style="color:#00a3cc;"><i class="fa fa-download" style="font-size:12px;"></i></a> ',
								//'<a class="remove actionIcons" title="Remove"><i class="fa fa-trash-o" style="font-size:12px;"></i></a>',
								 ]
								.join('');
								}
								}
								else{
									if($rootScope.rsLoginUser.userId === constants.ANIL_USER_ID || $rootScope.rsLoginUser.userId === constants.HARI_USER_ID){
										return [
												
												'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
												//'<a class="copy actionIcons" title="Copy" ><i class="fa fa-copy" style="font-size:12px;"></i></a> ',
												'<a class="download actionIcons" title="Download JobOrder" style="color:#00a3cc;"><i class="fa fa-download" style="font-size:12px;"></i></a> ',
												'<a class="edit actionIcons" title="Edit JobOrder"><i class="fa fa-edit" style="font-size:12px;"></i></a>',
												//'<a class="remove actionIcons" title="Remove"><i class="fa fa-trash-o" style="font-size:12px;"></i></a>',
												 ]
												.join('');
									}else{
									return [
											
											'<a class="view actionIcons" title="View Details" flex-gt-md="auto"><i class="fa fa-search" style="font-size:12px;"></i></a>',
											//'<a class="copy actionIcons" title="Copy" ><i class="fa fa-copy" style="font-size:12px;"></i></a> ',
											'<a class="download actionIcons" title="Download JobOrder" style="color:#00a3cc;"><i class="fa fa-download" style="font-size:12px;"></i></a> ',
											//'<a class="remove actionIcons" title="Remove"><i class="fa fa-trash-o" style="font-size:12px;"></i></a>',
											 ]
											.join('');
								}
								}
							}
						}

						/* Table button actions functionalities */
						window.operateEvents = {

							/* View Resume details */
							'click .view' : function(e, value,
									row, index) {
								var jobOrderId = row.jobOrderId;
											$mdDialog
													.show({
														controller : DialogController,
														templateUrl : 'views/dialogbox/joborderdetails.html',
														parent : angular
																.element(document.body),
														targetEvent : e,
														locals : {
															rowData : row,
														},
														clickOutsideToClose : true,
													});
							},
							
							'click .copy' : function(e, value,
									row, index) {
								var jobOrderId = row.jobOrderId;
								var response = $http
										.get('jobOrder/copyJobOrder/'+ jobOrderId);
								response
										.success(function(data,
												status,
												headers, config) {
											dmjoborders();
							   	     		$.growl	.notice({message : " Job Order Copied Successfully "});
										});
								response.error(function(data, status, headers, config){
				        			  if(status == constants.FORBIDDEN){
				        				location.href = 'login.html';
				        			  }else{  			  
				        				$state.transitionTo("ErrorPage",{statusvalue  : status});
				        			  }
				        		  });
							},
						
							'click .download' : function(e,
									value, row, index) {
								
								var jobOrderId = row.jobOrderId;
								var candidateresumeData=[];
								var objresume = null;
								var response = $http.post('jobOrder/downloadJobOrder',row);
								
								 $window.location = 'jobOrder/downloadJobOrder/'+jobOrderId;
						
							},
							
							'click .edit' : function(e, value,
									row, index) {
								/*$state.transitionTo("editJobOrders",{jobOrderId : row.jobOrderId,dmName:row.dm,page:constants.ALLJOBORDERS});*/
								var url = 	$state.href("editJobOrders",{jobOrderId : row.jobOrderId,dmName:row.dm,page:constants.DMJOBORDERSREPORT});
		                    	window.open(url,'_blank');
							},

							'click .remove' : function(e,
									value, row, index) {

								$mdDialog
										.show(
												{
													controller : DialogController,
													templateUrl : 'views/dialogbox/deletejoborder.html',
													parent : angular
															.element(document.body),
													targetEvent : e,
													locals : {
														rowData : row,
													},
													clickOutsideToClose : true,
												});
							},
							
							'click .plus' : function(e,
									value, row, index) {
								var job_orderId = row.jobOrderId;
								window.location="#/submitals/createsubmitals?jobOrder="+job_orderId+"&pageName="+constants.DMJOBORDERSREPORT;
							}
						};
						
						function DialogController($scope,
								$mdDialog, rowData) {
							$scope.row = rowData;
							var jobordid = rowData.jobOrderId;
							$scope.hide = function() {
								$mdDialog.hide();
							};

							$scope.cancel = function() {
								$mdDialog.cancel();
							};

	                      $scope.deleteQuery = function() {
					    		
					    		  var response = $http.get('jobOrder/deleteJobOrder/'+jobordid);
					   	          response.success(function(data, status, headers, config) {
					   	        	dmjoborders();
					   	     		$.growl	.notice({title : "Deleted", message : rowData.jobOrderId + " Successfully Deleted "});
					   	  		   });
					   	          
									response.error(function(data, status, headers, config){
					        			  if(status == constants.FORBIDDEN){
					        				location.href = 'login.html';
					        			  }else{  			  
					        				$state.transitionTo("ErrorPage",{statusvalue  : status});
					        			  }
					        		  });
					   	  		
						    	    $mdDialog.hide();
						    	  };
						}
						
							});
			
			function getDate(fulldate){
				var month = ( '0' + (fulldate.getMonth()+1) ).slice( -2 );
				var date = ( '0' + (fulldate.getDate()) ).slice( -2 );
				var year = fulldate.getFullYear();
				var totaldate = year + "-" + month + "-" + date;
				return totaldate;
			}
			
			$scope.getTimeFnc = function(){
				$scope.currentDateWithTime = new Date();
			}
	}

	});
	
})(angular);