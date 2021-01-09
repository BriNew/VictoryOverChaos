$(document).ready(function() {
  $(".home_link, .about_link, .services_link, .quotes_link").on("click", function( e ) {

    e.preventDefault();
    console.log($(this).attr('href'));
    $("body, html").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 400);

  });
});