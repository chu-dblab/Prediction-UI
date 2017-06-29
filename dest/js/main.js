$(document).ready(function() {
    $('#contact form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('button[type=submit]');

        if($email.val().indexOf('@') == -1) {
            vaca = $email.closest('form-group')
            $email.closest('.form-group').addClass('has-error');
        } else {
            $form.find('.form-group').addClass('has-success').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>訊息已送出。我們將盡快與你聯繫</span>');
        }
    });

    $('#sign-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });

    $('#register-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#register').fadeIn('fast');
    });

    $("return1").on('click', function(e) {
      $(e.currentTarget).closest('ul').hide();
      $('form#register').fadeIn('fast');
    });
});
