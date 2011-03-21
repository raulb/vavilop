$(document).ready(function(ev){
   
       $('.boxgrid.captionfull').hover(function(){  
           $(".cover", this).stop().animate({bottom:'-180'},{queue:false,duration:300});  
       }, function() {  
           $(".cover", this).stop().animate({bottom:'-300px'},{queue:false,duration:300});  
       });  
  
       $('.boxgrid.caption').hover(function(){  
           $(".cover", this).stop().animate({top:'160px'},{queue:false,duration:300});  
       }, function() {  
           $(".cover", this).stop().animate({top:'220px'},{queue:false,duration:300});  
       });  
   
   
   
   
   // Show presentation with fancybox
   $('#presentation_1').click(function(ev){

      $.fancybox({
      			//'orig'			: $(this),
      			'padding'		: 0,
      			'href'			: '#presentation_content_1',
      			'transitionIn'	: 'elastic',
      			'transitionOut'	: 'elastic',
      		});
      
   });
   
   $('#presentation_2').click(function(ev){

      $.fancybox({
      			//'orig'			: $(this),
      			'padding'		: 0,
      			'href'			: '#presentation_content_2',
      			'transitionIn'	: 'elastic',
      			'transitionOut'	: 'elastic'
      		});
      
   });
   
   $('#presentation_3').click(function(ev){

      $.fancybox({
      			//'orig'			: $(this),
      			'padding'		: 0,
      			'href'			: '#presentation_content_3',
      			'transitionIn'	: 'elastic',
      			'transitionOut'	: 'elastic'
      		});
      
   });
     
});