$(document)
		.ready(
				function() {
					
					
				
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

					

					$(document).bind('click', function(e) {
						var $clicked = $(e.target);
						if (!$clicked.parents().hasClass("multi")) {
							$(".multi .ddlist").hide();
						} else {

						}
					});

					
					
					
					
					
					
				
				
				setTimeout(function() {
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
								
								var usrcty = $(this).val();
								
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
								} else {
									$(this).parent().parent().siblings(
											".blankmsg").hide();
								}

							});
					
					
					
					
					var ddcurrentYear = new Date().getFullYear();
					var thisYear = $("#yeardd li input[type='checkbox']");
					thisYear.each(function(){
						if($(this).val() == ddcurrentYear)
							{
							$(this).attr("checked", "true");
							$("#yeardd").siblings(".ddbox").val($(this).val());
							$("#yeardd").siblings(".blankmsg").hide();
							}
					});
					
					
					var ddcurrentMonth = new Date().getMonth() + 1;
					var thisMonth = $("#monthdd li input[type='checkbox']");
					thisMonth.each(function(){
						if($(this).attr("data-month") == ddcurrentMonth)
							{
							$(this).attr("checked", "true");
							$("#monthdd").siblings(".ddbox").val($(this).val());
							$("#monthdd").siblings(".blankmsg").hide();
							}
					});
					
					
					$(".ddlist .selectall").click(function(){
						if($(this).is(":checked"))
							{
							$(this).parent(".ddlist").siblings(".errormsg").hide();
							$(this).parent(".ddlist").siblings(".ddbox").css("border-color", "#c2cad8");
							}
						else
							{
							$(this).parent(".ddlist").siblings(".errormsg").show();
							$(this).parent(".ddlist").siblings(".ddbox").css("border-color", "#ff0000");
							}
					});
					
					
					
					
					
					$(".ddlist li input").click(function(){
						var listid = $(this).parent("li").parent(".ddlist").attr("id");
						var uncheckboxes = $("#" + listid).children("li").children("input:checkbox:not(:checked)");
						var inptvalue = $(this).parent("li").parent(".ddlist").siblings(".ddbox");
						if(inptvalue.val() == "" || inptvalue.val() == undefined || inptvalue.val() == null)
							{
							inptvalue.siblings(".errormsg").show();
							inptvalue.css("border-color", "#ff0000");
							}
						else
							{
							inptvalue.siblings(".errormsg").hide();
							inptvalue.css("border-color", "#c2cad8");
							}
						if($(this).is(":checked"))
							{
							if(uncheckboxes.length == 0)
								{
								$(this).parent("li").siblings(".selectall").prop("checked", "true");
								}
							}
						else
							{
							$(this).parent("li").siblings(".selectall").removeAttr("checked");
							}
						
					});
					
					
					
				     }, 1000);
				
				
				
				
				
				
			
				
				$(".selectall").change(function(){
					if ($(this).is(':checked'))
						{
						var selectedinputval = "";
						var checkbx = $(this).parent(".ddlist").children("li").children("input[type='checkbox']");
						checkbx.each(function(){
							$(this).prop("checked", "true");
							selectedinputval +=$(this).val() + ", ";
							$(this).parent("li").parent(".ddlist").siblings(".ddbox").val("");
							$(this).parent("li").parent(".ddlist").siblings(".blankmsg").hide();
							$(this).parent("li").parent(".ddlist").siblings(".ddbox").val(selectedinputval);
						});
						}
					else
						{
						var checkbx = $(this).parent(".ddlist").children("li").children("input");
						checkbx.each(function(){
							$(this).removeAttr("checked");
							$(this).parent("li").parent(".ddlist").siblings(".ddbox").val("");
							$(this).parent("li").parent(".ddlist").siblings(".blankmsg").show();
						});
						}
				});
				
				
				
				
				$("#yeardd").change(function(){
					disableweek();
				});
				
				$("#monthdd").change(function(){
					disableweek();
				});
				
				function disableweek()
				{
					var yearvalue = $("#yeardd").siblings(".ddbox").val().split(',');
					var monthvalue = $("#monthdd").siblings(".ddbox").val().split(',');
					if(yearvalue== "" || monthvalue == "")
						{
						$("#weekdd").siblings(".ddbox").attr('disabled','disabled');
						$("#weekdd").siblings(".ddbox").css("background-color", "#cccccc");
						$("#recselectedweek").css("border-color", "#cccccc");
						$("#recselectedweek").siblings(".errormsg").hide();
						}
					else
						{
						if(yearvalue.length > 1 || monthvalue.length >1)
						{
						$("#weekdd").siblings(".ddbox").attr('disabled','disabled');
						$("#weekdd").siblings(".ddbox").css("background-color", "#cccccc");
						$("#recselectedweek").css("border-color", "#cccccc");
						$("#recselectedweek").siblings(".errormsg").hide();
						}
					else
						{
						$("#weekdd").siblings(".ddbox").removeAttr('disabled');
						$("#weekdd").siblings(".ddbox").css("background-color", "#ffffff");
						if($("#recselectedweek").val() == "")
							{
							$("#recselectedweek").css("border-color", "#ff0000");
							$("#recselectedweek").siblings(".errormsg").show();
							}
						}
						}

				}
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				var res = "";
				var maindiv = $(".multi01");

				maindiv.each(function() {

					var txtbx = $(this).children(".ddbox01")
					var checkbx = $(this).children(".ddlist01")
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

				var chkinput = $(".ddbox01");
				chkinput.each(function() {
					if ($(this).val() == "") {
						$(this).siblings(".blankmsg").show();
					} else {
						$(this).siblings(".blankmsg").hide();
					}
				});

				$(".multi01 .ddbox01").click(function() {

					if ($(this).siblings(".ddlist01").is(":visible")) {
						$(this).siblings(".ddlist01").hide();
					} else {
						$(".multi01 .ddlist01").hide();
						$(this).siblings(".ddlist01").show();
					}

				});

				

				$(document).bind('click', function(e) {
					var $clicked = $(e.target);
					if (!$clicked.parents().hasClass("multi")) {
						$(".multi .ddlist").hide();
					}
				});
				
				
				
				
				
				
				
				
				
				
		
					
					
					
					
				});