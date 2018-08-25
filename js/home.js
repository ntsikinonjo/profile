$(function() {

    // navbar button
    var navbarButton = $("#navbarButton");
    
    navbarButton.on('click', function() {
        var navbarButtonCollapsed = navbarButton.attr('class');
        console.log(navbarButtonCollapsed);
    });
});