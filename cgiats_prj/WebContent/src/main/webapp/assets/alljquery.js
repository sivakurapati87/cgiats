$(document)
		.ready(
				function() {
					
					
					$(".multi .fa-caret-down").click(function(){
						if ($(this).siblings(".ddlist").is(":visible")) {
							$(this).siblings(".ddlist").hide();
						} else {
							$(".multi .ddlist").hide();
							$(this).siblings(".ddlist").show();
						}
					});
					
					
					
					
					$(".upload-control02 .uploadbtn02").click(function() {
						$(this).siblings(".mainuploadbtn").click();
					});
					
					
					
					$("#w2hour").click(function(){
						if($("#contw2").is(':checked'))
							{
							$(this).removeAttr("readonly");
							}
						else
							{
							}
					});
					
					$("#w2annual").click(function(){
						if($("#contw2").is(':checked'))
							{
							$(this).removeAttr("readonly");
							}
						else
							{
							}
					});
					
					$("#1099hour").click(function(){
						if($("#cont1099").is(':checked'))
							{
							$(this).removeAttr("readonly");
							}
						else
							{
							}
					});

					$("#corphour").click(function(){
						if($("#contcorp").is(':checked'))
							{
							$(this).removeAttr("readonly");
							}
						else
							{
							}
					});
					
					
					/*  *************************************  START CURRENCY INPUT SCRIPT************************************************************************/

					$("input[data-format='currency']").focus(function(){
						var currency = $(this).val();
						if(currency !== "$ 0")
						{
							currency = currency.replace(/\D/g,'');
							$(this).val(currency);
						}
						else
						{
							$(this).val("");
						}
					});

					$("input[data-format='currency']").blur(function(){
						var currency = $(this).val();
						if(currency !== "")
						{
							currency = currency.split(".")[0].replace(/\D/g,'');
							currency = currency.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
							if(currency == "" || currency == undefined || currency == null)
							{
								currency = '$ ' + currency + '0';
								$(this).val(currency);
							}
							else
							{
								currency = '$ ' + currency;
								$(this).val(currency);
							}
						}
						else
						{
							$(this).val("$ 0");
						}
					});							

/*  *************************************  END CURRENCY INPUT SCRIPT************************************************************************/		
					
					
					
					
					
/*  *************************************  START INDIA CURRENCY INPUT SCRIPT************************************************************************/

					$("input[data-format='indiacurrency']").focus(function(){
						var currency = $(this).val();
						if(currency !== "0")
						{
							currency = currency.replace(/\D/g,'');
							$(this).val(currency);
						}
						else
						{
							$(this).val("");
						}
					});

					$("input[data-format='indiacurrency']").blur(function(){
						var currency = $(this).val();
						if(currency !== "")
						{
							currency = currency.split(".")[0].replace(/\D/g,'');
							if(currency == "" || currency == undefined || currency == null)
							{
								currency = currency + '0';
								$(this).val(currency);
							}
							else
							{
								if(currency.length > 3)
									{
									var currencylastthree = currency.substring(currency.length - 3);
									var currencyfirstthree = currency.substring(0,currency.length - 3)
									currency = currencyfirstthree.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ',' + currencylastthree;
									$(this).val(currency)
									}
								else
									{
									$(this).val(currency);
									};
							}
						}
						else
						{
							$(this).val("0");
						}
					});							

/*  *************************************  END INDIA CURRENCY INPUT SCRIPT************************************************************************/		
							
							
							

/*  *************************************  START PERCENTAGE INPUT SCRIPT************************************************************************/

					
					
					
					$("input[data-format='percentage']").focus(function(){
						var percentage = $(this).val();
						if(percentage !== "0 %")
						{
							percentage = percentage.replace(/\D/g,'');
							$(this).val(percentage);
						}
						else
						{
							$(this).val("");
						}
					});
					
					
					
					
					$("input[data-format='percentage']").blur(function(){
						var percentage = $(this).val();
						if(percentage !== "")
						{
							percentage = percentage.split(".")[0].replace(/\D/g,'');
							percentage = percentage.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

							if(percentage == "" || percentage == undefined || percentage == null)
							{
								percentage = '0' +  percentage + ' %';
								$(this).val(percentage);
							}
							else
							{
								percentage = percentage + ' %';
								$(this).val(percentage);
							}
						}
						else
						{
							$(this).val("0 %");
						}
					});
/*  *************************************  END PERCENTAGE INPUT SCRIPT************************************************************************/
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
						
						
					
				
					
					
					
					$("#closebtn").click(function(){
						$("#submitalstatus").hide();
					});

					
					$("#closebtn01").click(function(){
						$("#deleteErrInfo").hide();
					});

					
					
					$("#closebtndelete").click(function(){
						$("#submitaldelete").hide();
					});
					
					var res = "";
					var maindiv = $(".multi");

					maindiv.each(function() {

						var txtbx = $(this).children(".ddbox")
						var checkbx = $(this).children(".ddlist")
								.children("li").children("input:checked");
						checkbx.each(function() {

							var data = $(this).val() + ", ";
							var preres = res + data;
							res = preres;

						});

						res = res.substring(0, res.length - 2);
						txtbx.val(res);
						res = "";

					});

					var chkinput = $(".ddbox");
					chkinput.each(function() {
						if ($(this).val() == "") {
							$(this).siblings(".blankmsg").show();
						} else {
							$(this).siblings(".blankmsg").hide();
						}
					});

					$(".multi .ddbox").click(function() {

						if ($(this).siblings(".ddlist").is(":visible")) {
							$(this).siblings(".ddlist").hide();
						} else {
							$(".multi .ddlist").hide();
							$(this).siblings(".ddlist").show();
						}

					});

					$('.ddlist li input[type="checkbox"]')
							.on(
									'click',
									function() {

										var title = $(this)
												.closest('.ddlist')
												.find(
														'input[type="checkbox"]:checked')
												.val(), title = $(this).val()
												+ " ,";
										var maininput = $(this).parent()
												.parent().siblings(".ddbox");

										if ($(this).is(':checked')) {

											var inputfield = maininput.val();
											if (inputfield !== '') {
												inputfield += ", "
														+ $(this).val();

											} else {
												inputfield = $(this).val();

											}

											maininput.val(inputfield);

										} else {

											var inputfield = maininput.val();
											var removeval = $(this).val() + ", ";
											var findsome = inputfield
													.indexOf(removeval);

											if (findsome > -1) {
												inputfield = inputfield
														.replace(removeval, '');
											} else {

												var removeval = ", "
														+ $(this).val();
												var findsome = inputfield
														.indexOf(removeval);

												if (findsome > -1) {
													inputfield = inputfield
															.replace(removeval,
																	'');
												} else {
													var removeval = $(this)
															.val();
													inputfield = inputfield
															.replace(removeval,
																	'');
												}

											}

											maininput.val(inputfield);

										}
									});

					$(".ddlist li input").click(
							function() {

								var checktxtbox = $(this).parent().parent()
										.siblings(".ddbox");
								if (checktxtbox.val() == "") {
									$(this).parent().parent().siblings(
											".blankmsg").show();
									// $(this).parent().parent().siblings(".ddbox").css("border",
									// "1px solid #ff0000");
									// $(this).parent().parent().siblings(".errormsg").css("display",
									// "inline-block");
									// $(this).parent().parent().parent().parent(".form-group").css("height",
									// "80px");
								} else {
									$(this).parent().parent().siblings(
											".blankmsg").hide();
									// $(this).parent().parent().siblings(".ddbox").css("border",
									// "1px solid #c2cad8");
									// $(this).parent().parent().siblings(".errormsg").css("display",
									// "none");
									// $(this).parent().parent().parent().parent(".form-group").css("height",
									// "auto");
								}

							});

					$(document).bind('click', function(e) {
						var $clicked = $(e.target);
						if (!$clicked.parents().hasClass("multi")) {
							$(".multi .ddlist").hide();
						} else {

						}
					});

					$(".tab-main")
							.click(
									function() {

										var tabname = $(this).attr(
												"data-tabname");
										var othertab = $(".tab-cont");
										var targettab = $(".hekp-main-cont div[data-tabname='"
												+ tabname + "']");
										othertab.hide();
										targettab.slideDown();
									});

					
					
					
					
					
					
					
					
					
					
					$(".upload-control .uploadbtn").click(function() {
						$(this).siblings(".mainuploadbtn").click();
					});
					
					$(".mainuploadbtn").change(function(){
						var filename = $(this)[0].files[0].name;
						$(this).siblings(".txtboxdiv").children(".selectedfile").val(filename);
						$(this).siblings(".uploadbtn").hide();
						$(this).siblings(".lockbtn").show();
						$(this).siblings(".downloadbtn").show();
					});
				$(".lockbtn").click(function(){
					$(this).hide();
					$(this).siblings(".downloadbtn").hide();
					$(this).siblings(".uploadbtn").show();
				});

					
					
					
					
					
					
					
				});