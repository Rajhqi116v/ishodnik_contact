$.validator.setDefaults( {
			submitHandler: function () {
				alert( "Отправлено!" );
			}
		} );

		$( document ).ready( function () {
			$( "#signupForm" ).validate( {
				rules: {
					
					username: {
						required: true,
						minlength: 2
					},
					
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 2
					}
					
				},
				messages: {
					
					username: {
						required: "Пожалуйста, введите имя",
						minlength: "Ваше имя должно содержать минимум два символа"
					},
				
					email: "Пожалуйста, введите корректный адрес Вашей почты",
					
					message: {
						required: "Ваше сообщение должно содержать минимум три символа",
						minlength: "Ваше сообщение должно содержать минимум три символа"
					}
					
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "help-block" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
				}
			} );

			
		} );