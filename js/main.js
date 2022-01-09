$(document).ready(function(){



    $.ajax({
        type: 'get',
        url: 'https://aandresgarza.github.io/gattue/index.html',
        success: function(response) {
            
            $('.necro').removeClass('necro');
            // response = data which has been received and passed on to the 'success' function.
            //$('body').html(response);

            
        }
    });   
            $('.add-art').each( function( index ) {
               
                $(this).load("includes/article-" + (index + 1) + ".html");
              });
            

            $(window) .on('shown.bs.modal', function (e) {
                $('body').css('overflow', 'hidden');

              })
              $(window) .on('hidden.bs.modal', function (e) {
                $('body').css('overflow', 'visible');
                
              })

         $('.project').click(function(){
                var a= $(this).closest('main').attr('id');
                var z= a.substr(a.length - 1);
                var b = 0;
               if( $(this).hasClass( "next-project" )){
                var b = parseInt(z)+1;
               
               }else{
                var b = parseInt(z)-1;
               }
               
               var actual ='#' + a;
               var next ='#exampleModal' + b;
               $(actual).modal('hide');
               $(next).modal('show');
               

                
                
        });
           

            $("#menu-trigger").click(function(event){
                event.preventDefault();
                $('#points').addClass('d-none');
                $('.navbar').removeClass('d-none');
                $('.navbar').addClass(' animated fadeInDown');
                
            });
        
            
            $(window).on('scroll', function(){
            var altura = $(window).scrollTop();

            if(altura>70){
                if( $('.navbar').hasClass("d-none")){

                    $('.navbar').removeClass('d-none');
                    $('.navbar').addClass(' animated fadeInDown');
                }
                
            }
            else {
                $('.navbar').addClass('d-none ');
            }
        });
          
          
        
       
     

    AOS.init();
    var rellax = new Rellax('.rellax');




    $('#carouselHome').bind('slide.bs.carousel', function () {
       
        currentIndex = $('div.active').index();
        if(currentIndex!=0){
            $('header').addClass('inverse');
        }else{
            window.setTimeout(function(){
          $('header').removeClass('inverse');
        }, 500);
        }
    });




    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        $(".box-rotate").css("top", "0" + (scroll / 1.8) + "px");
      });

      
      var docHeight = $(document).height(),
  scrollPercent;

  $(window).scroll(function() {
    scrollPercent = ($(window).scrollTop() / docHeight) * 100;

    $('#myBar').width(scrollPercent + '%');
    });
  

});
   
