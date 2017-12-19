$.validator.setDefaults( {
			submitHandler: function () {
				alert( "submitted!" );
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
						minlength: "Your username must consist of at least 2 characters"
					},
				
					email: "Пожалуйста, введите адрес Вашей почты",
					
					message: {
						required: "Ваше сообщение должно содержать минимум три символа",
						minlength: "Your umessage must consist of at least 3 characters"
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