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
})
menuStroke.addEventListener('mouseleave', function() {

    // change stroke colours back
    $('.menu-btn-stroke').css('background', '#202020')
})
menuStroke.addEventListener('click', function(event) {

    // prevent default before dealing with click
    event.preventDefault()

    // change stroke colours
    $('.menu-btn-stroke').css('background', '#3771C8')

    // handle click
})