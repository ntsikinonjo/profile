/*
$(function() {

    // navbar button
    var navbarButton = $("#navbarButton");
    
    navbarButton.on('click', function() {
        var navbarButtonCollapsed = navbarButton.attr('class');
        console.log(navbarButtonCollapsed);
    });
}); */
$(document).ready(function() {

    var width = $(window).innerWidth();
    var scroll = $(this).scrollTop();

    floatingActionMenu(width, scroll);

    $(window).scroll(function() {
        floatingActionMenu($(window).innerWidth(), $(this).scrollTop());
    });

    $(window).resize(function() {
        floatingActionMenu($(window).innerWidth(), $(this).scrollTop());
    });
});

function floatingActionMenu(width, scroll) {

    // portrait mobile phone 576px and less
    var fam = $('.fam').html();
    var famStretch = $('.fam-stretch').html();
    var navigation = $('.navigation').html();
    var headerChildren = $('header').children().length;
    var positionMarker = $('#position-marker').position().top;

    if (width <= 576) {
        if (famStretch != undefined) {
            $('.fam-stretch').animate({opacity: '0.0'}, 'fast', function() {
                $('.fam-stretch').remove();
            });
        }
        if (headerChildren == 0) {
            $('header').append(
                '<img class="mx-auto img-block m-2" src="img/logo.png" style="display: block;">'
            );
            $('header').append(
                '<img class="mx-auto img-block m-2" src="img/banner.png" style="display: block;">'
            );
        }
        else {
            if (navigation == undefined) {
                if (scroll >= positionMarker && fam == undefined) {
                    $('#position-marker').after(
                        '<img class="fam m-2 p-2" src="img/logo-small.png" style="right: -120vw;">'
                    );
                    $('.fam').animate({right: '0px'}, 'fast');
                }
                else if (scroll < positionMarker) {
                    $('.fam').animate({opacity: '0.0'}, 'fast', function() {
                        $('.fam').remove();
                    });
                }
            }
            else {
                $('.navigation').remove();
                $('header').append(
                    '<img class="mx-auto img-block m-2" src="img/logo.png" style="display: block;">'
                );
                $('header').append(
                    '<img class="mx-auto img-block m-2" src="img/banner.png" style="display: block;">'
                );
            }
        }
    }
    else if (width > 576) {
        if (fam != undefined) {
            $('.fam').animate({opacity: '0.0'}, 'fast', function() {
                $('.fam').remove();
            });
        }
        if (headerChildren == 0) {
            $('header').append(
                '<nav class="navigation navbar navbar-light">' +
                '<a class="navbar-brand" href="#">' +
                    '<img class="w-25" src="img/logo-stretch.png">' +
                '</a>' +
            '</nav>'
            );
        }
        else {
            if ($('.navigation').html() != undefined) {
                if (scroll >= positionMarker && famStretch == undefined) {
                    //
                    $('#position-marker').after(
                        '<img class="fam-stretch m-2 p-2" src="img/logo-stretch-small.png" style="left: 0px;">'
                    );
                }
                else if (scroll < positionMarker) {
                    $('.fam-stretch').animate({opacity: '0.0'}, 'fast', function() {
                        $('.fam-stretch').remove();
                    });
                }
            }
            else {
                $('header').empty();
            }
        }

    }

}