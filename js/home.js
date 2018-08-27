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

    var headerChildren = $('header').children().length;
    if (width < 576 && headerChildren == 0) {
        $('header').append(
            '<img class="mx-auto img-block m-2" src="img/logo.png" style="display: block;">'
        );
        $('header').append(
            '<img class="mx-auto img-block m-2" src="img/banner.png" style="display: block;">'
        );
    }

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
    var positionMarker = $('#position-marker').position().top;
    
    if (scroll >= positionMarker && fam == undefined) {
        $('#position-marker').after(
            '<img class="fam m-2 p-2" src="img/logo-small.png" style="right: -120vw;">'
        );
        $('.fam').animate({right: '0px'}, 'slow');
    }
    else if (scroll < positionMarker) {
        $('.fam').remove();
    }

}