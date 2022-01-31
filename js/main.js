$(document).ready(function(){
    
         
    $(function(){
        
        var rotation = 0;
        var scrollLoc = $(document).scrollTop();
        $(window).scroll(function(){
            var newLoc = $(document).scrollTop();
            var diff = scrollLoc - newLoc;
            rotation += diff, scrollLoc = newLoc;
            var rotationStr = "rotate(" + rotation + "deg)";
            $(".open-modal").css({
                "transform" : rotationStr
            });
        });
    });

    $.ajax({
        type: 'get',
        url: 'https://www.gattue.tk/index.html',
        success: function(response) {
            
            $('.necro').removeClass('necro');
            // response = data which has been received and passed on to the 'success' function.
            //$('body').html(response);

            
        }
    });   
    
    $('#blockid').on('click', function(){
        
        if ($(this).hasClass("open-modal")) {
            $(this).removeClass('open-modal');
            $(this).addClass('close-modal');
            $(this).css({ "transform" : "rotate(0deg)"});
            $('.navbar').removeClass('d-none');
            $('.navbar').addClass(' animated fadeInDown min-vh-100');
            $('body').addClass('overflow-hidden');
        } else{
            $(this).removeClass('close-modal');
            $(this).addClass('open-modal');
            $(this).css({ "transform" : "rotate(0deg)"});
            $('.navbar').addClass('d-none');
            $('body').removeClass('overflow-hidden');
        }
    });
  
    $('.navbar-expand-lg li a').on('click', function(){
        $('.navbar').addClass('d-none');
        $('#blockid').removeClass('close-modal');
        $('#blockid').addClass('open-modal');
        $('body').removeClass('overflow-hidden');
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
                $('.navbar').addClass(' animated fadeInDown min-vh-100');
                $('#blockid').removeClass('d-none');
                $('#blockid').removeClass('open-modal');
                $('#blockid').addClass('close-modal');
                $('#blockid').css({ "transform" : "rotate(0deg)"});
                $('body').addClass('overflow-hidden');
                $(window).scrollTop(150);
            });
        
            
            $(window).on('scroll', function(){
            var altura = $(window).scrollTop();

            if(altura>70){
                if( $('#blockid').hasClass("d-none")){
                    $('#blockid').removeClass('d-none');
                }
                
            }
            else {
                $('#blockid').addClass('d-none');
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
   
