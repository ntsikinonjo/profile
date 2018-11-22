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
 */
var xWin, yWin
var connection

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
 * Events
 */
menuStroke.addEventListener('mouseover', function() {

    // change stroke colours
    $('.menu-btn-stroke').css('background', '#3771C8')
    $('#menu-stroke').css('border-color', '#202020')
})
menuStroke.addEventListener('mouseleave', function() {

    // change stroke colours back
    // menu is open or closed
    var menu
    if ($('#menu-pop').css('display') === 'block') {
        menu = true
    }
    else if ($('#menu-pop').css('display') === 'none') {
        menu = false
    }

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

    // menu is open or closed
    var menu
    if ($('#menu-pop').css('display') === 'block') {
        menu = true
    }
    else if ($('#menu-pop').css('display') === 'none') {
        menu = false
    }

    // handle click
    if (menu) {
        menu = false
        // close
        $('#menu-pop').css('display', 'none')
        $('#menu-pop').removeClass('transY', 'slow')

        // change stroke colours
        $('.menu-btn-stroke').css('background', '#202020')
        $('#menu-stroke').css('border-color', 'transparent')
    }
    else if (!menu) {
        menu = true

        // show menu
        $('#menu-pop').css('display', 'block')
        $('#menu-pop').addClass('transY', 'slow')
        
        // change stroke colours
        $('.menu-btn-stroke').css('background', '#3771C8')
        $('#menu-stroke').css('border-color', '#202020')
    }
})