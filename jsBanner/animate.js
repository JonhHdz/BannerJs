/**
* jQuery Banner Cuadruple v1.0
* Banner Cuadruple con jQuery y CSS3
* Repositorio: https://github.com/JonhHdz/BannerCuadruple/
*
* Jonattan Hernández
* Central Interactiva ©
* Fecha Creacion: 29 junio 2017
* Fecha Ult Modi: 25 septiembre 2017
*/

$(window).on('load',JS);
$(window).on('resize',JS);
$(window).on('orientationchange',JS);

function JS() {
    $(document).ready(function() {
        height = $(window).height();

        $('.efecto').each(function() {
            elementLinks = $(this).find('.animated');
            nbrEmts = $(elementLinks).length;
            $(elementLinks).attr('data-elements',nbrEmts);
            ContainerJS = $('.efectoContainer');
            widthContainer = $(ContainerJS).width();

            if ($(ContainerJS).length) {
                widthElement = widthContainer / nbrEmts;
                maxWidthElement = widthContainer / (nbrEmts + 1);
            } else{
                widthElement = $(window).width() / nbrEmts;
                maxWidthElement = $(window).width() / (nbrEmts + 1);
            }

            heightToApplicate = (height - $('header').height() - $('footer').height()) / nbrEmts;
            if (($('body').height() < height) && ($(window).width() < 960)) {
                $('.efecto > .animated[data-elements="'+nbrEmts+'"]').css({height:'auto'});
                $('.efecto > .animated[data-elements="'+nbrEmts+'"]').css({height:heightToApplicate+'px'});
            } else{
                $('.efecto > .animated[data-elements="'+nbrEmts+'"]').css({height:'100%'});
            }
            if ($(window).width() > 960) {
                $(elementLinks).css({width:widthElement+'px'});
                $(elementLinks).find('.efectoCont div').css({maxWidth:maxWidthElement+'px'});
            } else{
                $(elementLinks).css({width:'100%'});
                $(elementLinks).find('.efectoCont div').css({maxWidth:'none'});
            }
        });

        if ((scroll == true) && (animation == true)) {
            $(window).on('scroll', function(){
                var idElement = $('.efecto');
                    Position = jQuery(idElement).offset().top;
                    scroll = Position - height;
                    $('.efecto > *').addClass('fadeInUp');

                if ($(window).scrollTop() > scroll){
                    $('a#Magia').trigger("click");

                    if (($('a#Magia').hasClass('click')) && ($(window).width() > 960)) {
                        $(document).ready(function(){
                            $('html, body').animate({scrollTop:Position},400);
                            
                            delay = 0;
                            $('.efecto > *').removeClass('fadeInUp');
                            $('.efecto > *').each(function() {
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
                            $('.efecto > *').each(function() {
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
        }else if (scroll == true) {
            $(window).on('scroll', function(){
                var idElement = $('.efecto');
                    Position = jQuery(idElement).offset().top;
                    scroll = Position - height;

                if ($(window).scrollTop() > scroll){
                    $('a#Magia').trigger("click");

                    if (($('a#Magia').hasClass('click')) && ($(window).width() > 960)) {
                        $('html, body').animate({scrollTop:Position},400);
                        $('a#Magia').removeClass('click');
                    }
                };
            });
        } else if(animation == true){
            $('a#Magia').trigger("click");

            $(document).ready(function(){
                delay = 0;
                $('.efecto > .animated').each(function() {
                    var elemento = $(this); 
                    $(elemento).addClass('fadeInUp');
                    if (delay > 0) {
                        $(elemento).addClass('delay'+delay);
                    }
                    delay++;
                });
                $('a#Magia').removeClass('click');
            });
        }

        if (($(window).width() > 960)&&(heightFull == true)) {
            $('.efecto').css({height:height});
        } else if ($(window).width() > 960){
            if ($(window).width() > 1280) {
                $('.efecto').css({height:height1280+'px'});}
            else if ($(window).width() > 1024) {
                $('.efecto').css({height:height1024+'px'});}
            else {
                $('.efecto').css({height:height960+'px'});}
        } else{
            $('.efectoContainer .efecto, .efecto').css({height:'auto'}); }

        if ($(window).width() > 960) {
            $('.efecto > .animated').mouseenter(function() {
                $(this).addClass('hovered');
                $(this).removeClass('notHover');
                $(this).siblings().removeClass('hovered');
                $(this).siblings().addClass('notHover');
            });

            $('.efecto > .animated').mouseleave(function() {
                $('.efecto > .animated').removeClass('hovered');
                $('.efecto > .animated').removeClass('notHover');
            });
        }
    });

}