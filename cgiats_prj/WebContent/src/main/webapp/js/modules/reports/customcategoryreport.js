;(function(angular){
	"use strict";
	
		
		angular.module("customcategoryreportmodule",[])
.controller("customcategoryreportcontroller", function($scope, $http, dateRangeService, $sessionStorage, $state,$window){

			$scope.jobcategory = {};
			$scope.dmsInfoTable = false;
			$scope.dmsInfo = [];
			$scope.dmsInfo.push({});
			var dmsInfoData = [];
			$scope.dmsInfoRecords = [];
			$scope.recInfoTable = false;
			$scope.recInfo = [];
			$scope.onload = function(){
				
				
				$scope.jobcategory.status = "Open";
				
				$scope.sitename = "On Site";
				
				$scope.DateFormat = 'MM-dd-yyyy';
				
				$scope.startDateOptions = {                               
						date : new Date(),
						showWeeks : false
					};
				$scope.startDateopen = function() {
					$scope.startDatePopup.opened = true;
				};
				$scope.startDatePopup = {
						opened : false
					};
				
				$scope.endDateOptions = {
						date : new Date(),
						showWeeks : false
					};
				$scope.endDateopen = function() {
					$scope.endDatePopup.opened = true;
				};
				$scope.endDatePopup = {
						opened : false
					};
					
				
				if($scope.dmRangeindm){
					$scope.jobcategory.startDate = dateRangeService.convertStringToDate($scope.dmRangeindm.startDate);;
					$scope.jobcategory.endDate = dateRangeService.convertStringToDate($scope.dmRangeindm.endDate);;
				}else{
					var startDateVal = new Date();
					startDateVal.setDate(1);
					$scope.jobcategory.startDate = startDateVal;
					$scope.jobcategory.endDate = new Date();
				}
				
				$scope.getDmInfo();
	
			}
			
			
			
			$scope.viewcategorjoborders = function(period,category)
			{
				$scope.obj.timePeriod = period;
				$scope.obj.category = category;
				//alert(JSON.stringify($scope.obj));
				
				var url =  $state.href("categoryjobordersreport",{dmName:null,startDate:$scope.obj.startDate, endDate:$scope.obj.endDate, status:$scope.obj.status, timePeriod:$scope.obj.timePeriod, category: $scope.obj.category });
				window.open(url,'_blank');
			}
			
			
			
			$scope.getDmInfo = function(){
				$scope.dmsInfoTable = false;
				 
				var from = dateRangeService.formatDate($scope.jobcategory.startDate);
				var to = dateRangeService.formatDate($scope.jobcategory.endDate);
				$scope.obj = {
						"startDate" : from,
						"endDate" :to,
						"status" : $scope.jobcategory.status
				}
				
				getDmsInfoAsTable();
				$scope.getCategoryReportByDMsData();
			}
			
			function getDmsInfoAsTable(){
//				alert(JSON.stringify($scope.obj));
				
				var response = $http.post("customReports/getCategoryReportData", $scope.obj);
				response.success(function(data, config, headers, status){
					if(data){
//						alert(JSON.stringify(data));
						$scope.categoryData = data;
					}else{
//						$scope.dmsInfoTable = true;
//						 dmsInfoTableView();
					}
				});
				response.error(function(data, status, headers, config){
					  if(status == constants.FORBIDDEN){
						location.href = 'login.html';
					  }else{  			  
						$state.transitionTo("ErrorPage",{statusvalue  : status});
					  }
				  });
			}
			
			$scope.getCategoryReportByDMsData = function(){
				var response = $http.post("customReports/getCategoryReportByDMsData", $scope.obj);
				response.success(function(data, config, headers, status){
					if(data){
//						alert(JSON.stringify(data));
						dmsInfoData = data;
						$scope.dmsInfoTable = true;
						dmsInfoTableView();
					}
				});
				response.error(function(data, status, headers, config){
					  if(status == constants.FORBIDDEN){
						location.href = 'login.html';
					  }else{  			  
						$state.transitionTo("ErrorPage",{statusvalue  : status});
					  }
				  });
			}
			
			
			$scope.dmsInfoTable = true;
			
			function dmsInfoTableView(){
				$scope.dmsInfo
				.forEach(function(dmsInfo, index) {
					dmsInfo.dmsTableControl = {
		/*		var colorCode = 'green';
				 $scope.dmsInfo.dmsTableControl = {*/
		                    options: { 
		                    	data : dmsInfoData || {},
		                        striped: true,
		                        pagination: true,
		                        paginationVAlign: "bottom", 
		                        pageList: [50,100,200],
		                        search: false,
		                        silentSort: false,
		                        showColumns: false,
		                        showRefresh: false,
		                        clickToSelect: false,
		                        showToggle: false,
		                        maintainSelected: true, 
		                        showFooter : false,
		                        columns: [
		                        {
		                            field: 'dmName',
		                            title: 'DM Name',
		                            align: 'left',
		                            
		                        },{
		                            field: 'a_count',
		                            align: 'left',
		                            events : window.operateEvents1,
		                            formatter : operateFormatter1
		                            
		                        }, {
		                            field: 'b_count',
		                            title: 'B-VMS Portal',
		                            align: 'left',
		                            events : window.operateEvents,
		                            formatter : operateFormatter
									
		                        },{
		                            field: 'c_count',
		                            title: 'C-Third Party',
		                            align: 'left',
		                            events : window.operateEvents2,
		                            formatter : operateFormatter2
		                           
		                        },{
		                            field: 'n_count',
		                            title: 'Not Specified',
		                            align: 'left',
		                            events : window.operateEvents3,
		                            formatter : operateFormatter3
		                        },{
		                            field: 'totalRecords',
		                            title: 'Total',
		                            align: 'left',
		                            events : window.operateEvents4,
		                            formatter : operateFormatter4
		                        }]
		                    }
					 };
					
					function operateFormatter(value, row,
							index) {
						if(row.b_count !=0){
							return [
							'<a class="view actionIcons" title="View Details">'+row.strB_count_ratio+'</a>'
							 ]
						.join('');
						}else{
							return [
									'<label>'+row.strB_count_ratio+'</label>'
									 ]
								.join('');
						}
					
						
					}
					window.operateEvents = {

								'click .view' : function(e, value,
										row, index) {
									getJoborders(row.userId,"B-VMS Portal");
							
								},
					}
					
					
					function operateFormatter1(value, row,
							index) {
						if(row.a_count !=0){
							return [
							'<a class="view actionIcons" title="View Details">'+row.strA_count_ratio+'</a>'
							 ]
						.join('');
						}else{
							return [
									'<label>'+row.strA_count_ratio+'</label>'
									 ]
								.join('');
						}
					
						
					}
					window.operateEvents1 = {

								'click .view' : function(e, value,
										row, index) {
									getJoborders(row.userId,"A-Direct Customer/ Relationship");
								},
					}
					
					function operateFormatter2(value, row,
							index) {
							if(row.c_count !=0){
								return [
								'<a class="view actionIcons" title="View Details">'+row.strC_count_ratio+'</a>'
								 ]
							.join('');
							}else{
								return [
										'<label>'+row.strC_count_ratio+'</label>'
										 ]
									.join('');
							}
						
					}
					window.operateEvents2 = {

								'click .view' : function(e, value,
										row, index) {
									getJoborders(row.userId,"C-Third Party");
								},
					}
					
					
					function operateFormatter3(value, row,
							index) {
							if(row.n_count !=0){
								return [
								'<a class="view actionIcons" title="View Details">'+row.strN_count_ratio+'</a>'
								 ]
							.join('');
							}else{
								return [
										'<label>'+row.strN_count_ratio+'</label>'
										 ]
									.join('');
							}
						
					}
					window.operateEvents3 = {

								'click .view' : function(e, value,
										row, index) {
									getJoborders(row.userId,"Not Specified");
								},
					}
					
					function operateFormatter4(value, row,
							index) {
							return [
							'<a class="view actionIcons" title="View Details">'+row.strTotal_Count_ratio+'</a>'
							 ]
						.join('');
					
						
					}
					window.operateEvents4 = {

								'click .view' : function(e, value,
										row, index) {
									getJoborders(row.userId,"Total");
								},
					}
					

				});
					}
			
			function getJoborders(userId,category){
				$scope.objdm = {"dmNam":userId, "category":category, "startDate":$scope.obj.startDate,"endDate":$scope.obj.endDate, "status":$scope.obj.status}
				//alert("DETAILS" + JSON.stringify($scope.objdm));
				
				var url =  $state.href("categoryjobordersreport",{dmName:userId,startDate:$scope.obj.startDate, endDate:$scope.obj.endDate, status:$scope.obj.status, timePeriod:null, category: category });
				window.open(url,'_blank');
				
				
			}
	
			
 
		})
		
		
})(angular);