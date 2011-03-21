$(document).ready(function(ev){
   // $('div.section').children('div.header').css('zIndex','0');
   // $('.miami').parent('.header').css('zIndex','100');
   // $('.miami').css('zIndex','100');
   
   // To display miami img
   $('.miami').hover(
     function () {

        $('.miami').stop(true,false).animate({
            top: '-20px'
          }, 400, function(){

          });           
     }, 
     function () {
        $('.miami').stop(true,false).animate({
            top: '-200px'
          }, 400, function(){

          });
       
     }
   );
   
   // To show last tweets from @vavilop
   $('#last_tweets').liveTwitter('vavilop', {refresh: false, mode: 'user_timeline'});
   
});
