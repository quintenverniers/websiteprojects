$(document).ready(function(){
    $("div#menu-icon").on("click", function() {
        $(this).toggleClass("change");
        $('nav ul').toggleClass('showing');
    });
});