$(document).ready(function(){
    $(function menu() {
        $( "#button-g" ).hover(function() {
            $("#shadow-g").animate({width: '10vw'}, 200);
        },
        function(){
            $("#shadow-g").animate({width: '2vw'}, 200);
        });
    });
    $(function menu() {
        $( "#button-i" ).hover(function() {
            $("#shadow-i").animate({width: '14vw'}, 200);
        },
        function(){
            $("#shadow-i").animate({width: '2vw'}, 200);
        });
    });
    $(function menu() {
        $( "#button-l" ).hover(function() {
            $("#shadow-l").animate({width: '12.5vw'}, 200);
        },
        function(){
            $("#shadow-l").animate({width: '2vw'}, 200);
        });
    });
    $(function menu() {
        $( "#button-r" ).hover(function() {
            $("#shadow-r").animate({width: '12vw'}, 200);
        },
        function(){
            $("#shadow-r").animate({width: '2vw'}, 200);
        });
    });
});
