$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});

$('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
});
$('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
});

$( "#login-form" ).submit(function( event ) {
    if ( $( "input:first" ).val() != "admin"  ) {
        $( "#username-login" ).text( "Wrong username!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }

    if ( $( "input:eq(1)" ).val() != "admin"  ) {
        $( "#password-login" ).text( "Wrong password!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }
});

$( "#recover-form" ).submit(function( event ) {
    if ( $( "#emailRecover").val().indexOf("@") == -1  ) {
        $( "#email-recover" ).text( "Wrong email!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }
});

$( "#register-form" ).submit(function( event ) {
    if ( $( "#usernameRegister" ).val().length < 2  ) {
        $( "#username-register" ).text( "At least 3 symbols!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }
    if ( $( "#emailRegister").val().indexOf("@") == -1  ) {
        $( "#email-register" ).text( "Wrong email!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }
    if ( $( "#passwordRegister" ).val().length < 6  ) {
        $( "#password-register" ).text( "At least 6 symbols!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }
    if ( $( "#confirm-passwordRegister" ).val() != $("#passwordRegister").val() ) {
        $( "#password-confirm-register" ).text( "Passwords do not match!").show().delay(5000).fadeOut(500);
        event.preventDefault();
    }
});