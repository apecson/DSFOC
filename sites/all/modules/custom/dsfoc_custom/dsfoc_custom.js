(function ($) {

  Drupal.behaviors.sgayouth_custom = {
    attach: function (context, settings) {
    
    $('.comment .field-name-field-author-name').prepend('By ');
    

    	}
    };
})(jQuery);