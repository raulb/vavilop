var map;
var latitude = 40.396764;
var longitude = -3.713379;
var default_zoom = 17;

$(document).ready(function(ev){
   
   // Para las galerías de imágenes
   Galleria.loadTheme('/javascripts/galleria.classic.js');
   // Initialize Galleria
   $('.galleria').galleria({thumbnails:false, preload:2,autoplay:5000,transition:'fade',show_counter:'false'})
   
   // Preparamos el light box para la revista
   $('p#info a').lightBox();
   
   // para que vuelva a su posición original si hemos movido el mapa
   $('a.street').click(function(ev){
      ev.preventDefault();
      ev.stopPropagation();   
      var coord_taller = new google.maps.LatLng(latitude,longitude);
      map.setCenter(coord_taller);
      map.setZoom(default_zoom);
   });
});

function initialize(){
       var myLatlng = new google.maps.LatLng(latitude,longitude);
       var myOptions = {
         scrollwheel: false,
         zoom: default_zoom,
         center: myLatlng,
         disableDefaultUI: true,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       }
       
       map = new google.maps.Map(document.getElementById("map"), myOptions);
      
       var contentString = '<div id="infoWindow">'+
               '<div id="siteNotice">'+
               '</div>'+
               '<h5 id="title_infowindow" class="title_infowindow">Taller Armero José Viaji</h1>'+
               '</div>';

           var infowindow = new google.maps.InfoWindow({
               content: contentString
           });

           var marker = new google.maps.Marker({
               position: myLatlng,
               map: map,
               title: 'Taller Armero José Viaji'
           });
           google.maps.event.addListener(marker, 'click', function() {
             infowindow.open(map,marker);
           });
}

