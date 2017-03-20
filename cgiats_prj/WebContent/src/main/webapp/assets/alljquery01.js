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
					
					
					
					$(".multi01 .fa-caret-down").click(function(){
						if ($(this).siblings(".ddlist01").is(":visible")) {
							$(this).siblings(".ddlist01").hide();
						} else {
							$(".multi .ddlist01").hide();
							$(this).siblings(".ddlist01").show();
						}
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
					
					
					
					
					
					
					
					
					
				     }, 600);
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
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
					if (!$clicked.parents().hasClass("multi01")) {
						$(".multi01 .ddlist01").hide();
					} else {

					}
				});
				
				
				
				
				
				
				
				
				
				
		
					
					
					
					
				});