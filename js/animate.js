$(document).ready(function(){
    $(function menu() {
        $( "#menu-button" ).click(function() {
            // $( "#title" ).toggle();
            $("#title").fadeOut(150);
            // $( "#menu" ).toggle();
            $("#menu" ).fadeIn(150);

            $("#music").animate({bottom: '0px'}, 350);
            $("#photo").animate({right: '0px'}, 350);
            $("#project").animate({top: '0px'}, 350);
            $("#social").animate({left: '0px'}, 350);
            // $("#menu").animate({overflow: 'visible'}, 150);
            // document.getElementById("menu").style.overflow = "visible";
        });
    });
    $(function close() {
        $( "#close-button" ).click(function() {
            // $( "#title" ).toggle();
            $("#title").fadeIn(450);
            // $( "#menu" ).toggle();
            $("#menu" ).fadeOut(150);

            $("#music").animate({bottom: '-500px'}, 150);
            $("#photo").animate({right: '-500px'}, 150);
            $("#project").animate({top: '-500px'}, 150);
            $("#social").animate({left: '-500px'}, 150);
        });
    });
});
