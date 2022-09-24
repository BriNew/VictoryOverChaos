$(document).ready(function() {
  $(".home_link, .about_link, .services_link, .quotes_link, .faq_link").on("click", function( e ) {

    e.preventDefault();
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 400);

  });
});
