/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

  $(document).ready(function(){
    
    var view = $('.view-free-content');
    var trigger = $('.view-free-content caption');
    var viewHeader = $('.view-free-content thead');
    var viewContent = $('.view-free-content tbody');
      
    trigger.click(function(){
      $(this).siblings('tbody').slideToggle('fast');
      $(this).siblings('thead').slideToggle('fast');
    });

/*     Set equal heights to front page news blocks */
    var maxHeight = -1;
    
    $('.block-news-view').each(function() {
      maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
      console.log(maxHeight);
    });
  
    $('.block-news-view').each(function() {
      $(this).height(maxHeight);
    });
    
    
  });


  

})(jQuery, Drupal, this, this.document);
