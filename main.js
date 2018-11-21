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