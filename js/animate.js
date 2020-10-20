$(document).ready(function(){
    $(function menu() {

    // GIT
        $( "#button-g" ).hoverIntent(
            function() {
                $("#shadow-g").animate({width: '17vw'}, 200);
            },
            function(){
                $("#shadow-g").animate({width: '1vw'}, 250);
            }
        );

        $( "#button-g" ).hover(function() {
            $(".bg").css({
                transition : 'background-color .25s ease-in-out',
                'background-color': '#BCBCBC'
            });
        },
        function(){
            $(".bg").css('background-color', '#F4F4F4');
        });

    // SPOTIFY
        $( "#button-s" ).hoverIntent(function() {
            $("#shadow-s").animate({width: '15.7vw'}, 250);
        },
        function(){
            $("#shadow-s").animate({width: '1vw'}, 250);
        });

        $( "#button-s" ).hover(function() {
            $(".bg").css({
                transition : 'background-color .25s ease-in-out',
                'background-color': '#C1FFC0'
            });
        },
        function(){
            $(".bg").css('background-color', '#F4F4F4');
        });

    // INSTA
        $( "#button-i" ).hoverIntent(function() {
            $("#shadow-i").animate({width: '21vw'}, 250);
        },
        function(){
            $("#shadow-i").animate({width: '1vw'}, 250);
        });

        $( "#button-i" ).hover(function() {
            $(".bg").css({
                transition : 'background-color .25s ease-in-out',
                'background-color': '#FFDE79'
            });
        },
        function(){
            $(".bg").css('background-color', '#F4F4F4');
        });

    // LINKEDIN
        $( "#button-l" ).hoverIntent(function() {
            $("#shadow-l").animate({width: '17vw'}, 250);
        },
        function(){
            $("#shadow-l").animate({width: '1vw'}, 250);
        });

        $( "#button-l" ).hover(function() {
            $(".bg").css({
                transition : 'background-color .25s ease-in-out',
                'background-color': '#79B7FF'
            });
        },
        function(){
            $(".bg").css('background-color', '#F4F4F4');
        });

    // RESUME
        $( "#button-r" ).hoverIntent(function() {
            $("#shadow-r").animate({width: '15.7vw'}, 250);
        },
        function(){
            $("#shadow-r").animate({width: '1vw'}, 250);
        });

        $( "#button-r" ).hover(function() {
            $(".bg").css({
                transition : 'background-color .25s ease-in-out',
                'background-color': '#FF7979'
            });
        },
        function(){
            $(".bg").css('background-color', '#F4F4F4');
    
        });

    // DESIGN
        $( "#button-d" ).hoverIntent(function() {
            $("#shadow-d").animate({width: '21.2vw'}, 250);
        },
        function(){
            $("#shadow-d").animate({width: '1vw'}, 250);
        });

        $( "#button-d" ).hover(function() {
            $(".bg").css({
                transition : 'background-color .25s ease-in-out',
                'background-color': '#FABCFF'
            });
        },
        function(){
            $(".bg").css('background-color', '#F4F4F4');
    
        });
    });
});
