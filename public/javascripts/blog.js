var html_posts_list = "";
var html_post = "";
var num_posts = 0;

$(document).ready(function(ev){
   
   
   // To show elevator
   $(window).scroll(function () {
            if ($(window.pageYOffset)[0] > 708) {
                  $('.top').fadeIn();
               }else {
                  $('.top').fadeOut();
               }
            });
            
   $('a.top').click(function(ev){
      $.scrollTo('.section.blog',400);
   });
   
   
   // The variable "tumblr_api_read" is now set.
   $.each(tumblr_api_read.posts, function(i,element) {  
     
     if ((element.type == "regular")||(element.type == "video")||(element.type == "photo")||(element.type == "link")||(element.type == "quote")){

       html_posts_list = '<li id="list_element_'+i+'"><span></span><div><a></a><p></p></div></li>';
       $('ul#index_posts').append(html_posts_list);
       
       // Interesante post de @vavilop en       
       html_post = '<li id="post_'+i+'" class="radius shadow">';
       html_post +=  '<a class="retweet" href="'+element.url+'" target="_blank">Interesante post de @vavilop en </a>';
       html_post += '<span class="date">'+element.date+'</span>'
       html_post += '<span class="circle"></span></li>';
       
       $('ul#posts').append(html_post);
       html_post = "";
       
       $('li#list_element_'+i).find('p').text(' - '+element.date);
      
       switch (element.type){
          case 'regular':
            $('li#post_'+i).addClass('text');
            $('li#post_'+i).children('span.circle').text("texto");
             
             html_post += '<h3>'+ element['regular-title'] +'</h3>';
             html_post += element['regular-body'];
             
             // ********
             $('li#list_element_'+i).children('span').addClass('text');
             $('li#list_element_'+i).children('span').text('texto');
             $('li#list_element_'+i).find('a').text(element['regular-title']);
             
            break;
            case 'photo':
               $('li#post_'+i).addClass('picture');
               $('li#post_'+i).children('span.circle').text("foto");
               
                if (element['video-caption'] != "") {
                   html_post += '<h3>'+ element['photo-caption'] +'</h3>';
                   $('li#list_element_'+i).find('a').append(cleanCustomHtml(element['photo-caption']));  
                }
                
                if (element['photo-url-400'] != undefined) {
                  html_post += '<div class="media"><img src="'+element['photo-url-400']+'"/></div>';
                }
                // ********
                $('li#list_element_'+i).children('span').addClass('picture');
                $('li#list_element_'+i).children('span').text('foto');
                
             break;
             
            case 'video':
              $('li#post_'+i).addClass('video');
              $('li#post_'+i).children('span.circle').text("vídeo");
              
              if (element['video-caption'] != "") {
                html_post += '<h3>'+ element['video-caption'] +'</h3>';
                html_post += '<div class="media">'+element['video-player']+'</div>';
                $('li#list_element_'+i).find('a').append(cleanCustomHtml(element['video-caption']));                
              }else {
                html_post += '<div class="media alone">'+element['video-player']+'</div>';
                $('li#list_element_'+i).find('a').text('No le he puesto título, ;)');
              }
              // html_post += '<p>'+element['video-source']+'</p>';
              // ********
              $('li#list_element_'+i).children('span').addClass('video');
              $('li#list_element_'+i).children('span').text('vídeo');
             break;
             case 'link':
               $('li#post_'+i).addClass('link');
               $('li#post_'+i).children('span.circle').text("link");
               html_post += '<h3><a href="'+ element['link-url'] +'">'+element['link-text']+'</a></h3>';
               // ********
               $('li#list_element_'+i).find('a').text(element['link-text']); 
               $('li#list_element_'+i).children('span').addClass('link');
               $('li#list_element_'+i).children('span').text('link');
             break;
             case 'quote':
                
                $('li#post_'+i).addClass('quote');
                $('li#post_'+i).children('span.circle').text("cita");
                html_post += '<span class="open quote"></span><span class="close quote"></span>';
                html_post += '<h3>'+element['quote-text']+'</h3>';
                html_post += '<p> - '+element['quote-source']+'</h3>';
                // ********
                $('li#list_element_'+i).find('a').text(element['quote-text']); 
                $('li#list_element_'+i).children('span').addClass('quote');
                $('li#list_element_'+i).children('span').text('cita');
              break;
       }

       // Scroll movement
       $('li#list_element_'+i).find('a').attr('onClick','javascript:void $.scrollTo(\'li#post_'+i+'\',700,{queue:true, onAfter:function(){ $.scrollTo(\'-=55px\', 600 );} })');
       			
       if (element.tags != undefined){
          html_post += '<ul class="tags">';
          $.each(element.tags, function(j,tag) { 
             html_post += '<li><a class="radius"> '+ tag +'</a></li>';
          });
          html_post += '</ul>'
        }
        
        num_posts = parseInt(num_posts) + 1;
        $('li#post_'+i).append(html_post);
               
     }
     $('#posts_account').text(num_posts);
     
   });

});


// function to replace html elements not desired
function cleanCustomHtml(text) {
  
  var textCleaned = text;

  textCleaned = $.htmlClean(textCleaned, {removeTags:["a","span"],format:false});
  
  // To replace ... symbol
  textCleaned = textCleaned.replace("&#8230;","...");
   
  // To add some spaces (between each p, closed tag and open p tag)
  textCleaned = textCleaned.replace(/<\/p><p>/g," ");

  // To clean p tags
  textCleaned = $.htmlClean(textCleaned, {removeTags:["p"],format:false}); 
  
  // To make different to the title
  textCleaned = textCleaned.replace("</strong>"," - </strong>");
  
  if (textCleaned.length > 200) textCleaned = textCleaned.substring(0, 197) + '...';

  return textCleaned;
  
}


