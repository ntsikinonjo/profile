/**
 * Functions dealing with DOM manipulation go here
 */

/**
 * global variables
 * 
 * xWin, yWin
 * used for sizing elemets
 * 
 * connection
 * used for content resolution
 * 
 * menu
 * used to determine if menu is
 * open or not opened
 */
var xWin, yWin
var connection
var menu = false

/**
 * element variables
 * 
 * elements that are found in the DOM
 */
var menuStroke = document.getElementById('menu-stroke')

/**
 * DOM elements are finished loading
 */
$(document).ready(function() {

    // get window width and window height
    xWin = $(window).width()
    yWin = $(window).height()

    // connection speed
    connection = navigator.connection
})

/**
 * Window has been resized
 */
$(window).on('resize', function() {

    // xWin and yWin changed on resize
    // get window width and window height
    xWin = $(window).width()
    yWin = $(window).height()
})

/**
 * Events
 */
menuStroke.addEventListener('mouseover', function() {

    // change stroke colours
    $('.menu-btn-stroke').css('background', '#3771C8')
    $('#menu-stroke').css('border-color', '#202020')
})
menuStroke.addEventListener('mouseleave', function() {

    // change stroke colours back
    if (!menu) {
        $('.menu-btn-stroke').css('background', '#202020')
        $('#menu-stroke').css('border-color', 'transparent')
    }

    // if menu is open keep border
    if (menu) {
        $('#menu-stroke').css('border-color', '#202020')
    }
})
menuStroke.addEventListener('click', function(event) {

    // prevent default before dealing with click
    event.preventDefault()

    // change stroke colours
    $('.menu-btn-stroke').css('background', '#3771C8')
    $('#menu-stroke').css('border-color', '#202020 !important')

    // handle click
    if (menu) {
        menu = false
        // show menu
        $('#menu-pop').css('display', 'none')
        $('#menu-pop').removeClass('transY', 'slow')
    }
    else if (!menu) {
        menu = true
        $('#menu-pop').css('display', 'block')
        $('#menu-pop').addClass('transY', 'slow')
    }
})