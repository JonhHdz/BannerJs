/**
* jQuery Banner Cuadruple v1.0
* Banner Cuadruple con jQuery y CSS3
* Repositorio: https://github.com/JonhHdz/BannerCuadruple/
*
* Jonattan Hernández
* Central Interactiva ©
* Fecha Creacion: 29 junio 2017
* Fecha Ult Modi: 29 junio 2017
*/

$(document).ready(function() {
    height = $(window).height();
    width = $(window).width() / 5;

    if ($(window).width() > 960) {
        $('.efecto').css({height:height+'px'});
        $('.efectoCont div').css({maxWidth:width+'px'});
    }

    $(window).on('scroll', function(){
        var idElement = $('.efecto');
            Position = jQuery(idElement).offset().top;
            scroll = Position - height;

        if ($(window).scrollTop() > scroll){
            $('a#Magia').trigger("click");

            if (($('a#Magia').hasClass('click')) && ($(window).width() > 960)) {
                $(document).ready(function(){
                    $('html, body').animate({scrollTop:Position},400);
                    
                    delay = 0;
                    $('.efecto > div').each(function() {
                        var elemento = $(this); 
                        $(elemento).addClass('fadeInUp');
                        if (delay > 0) {
                            $(elemento).addClass('delay'+delay);
                        }
                        delay++;
                    });
                    $('a#Magia').removeClass('click');
                })
            }

            else if ($('a#Magia').hasClass('click')) {
                $(document).ready(function(){
                    delay = 0;
                    $('.efecto > div').each(function() {
                        var elemento = $(this); 
                        $(elemento).addClass('fadeInUp');
                        if (delay > 0) {
                            $(elemento).addClass('delay'+delay);
                        }
                        delay++;
                    });
                    $('a#Magia').removeClass('click');
                })
            }
        };
    });

    if ($(window).width() > 960) {
        $('.efecto > div').mouseenter(function() {
            $(this).addClass('hovered');
            $(this).removeClass('notHover');
            $(this).siblings().removeClass('hovered');
            $(this).siblings().addClass('notHover');
        });

        $('.efecto > div').mouseleave(function() {
            $('.efecto > div').removeClass('hovered');
            $('.efecto > div').removeClass('notHover');
        });
    }
});