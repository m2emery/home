$(document).ready(function(){
    $(function menu() {
        $( "#menu-button" ).click(function() {
            $( "#title" ).toggle();
            $( "#menu" ).toggle();
        });
    });
    $(function close() {
        $( "#close-button" ).click(function() {
            $( "#title" ).toggle();
            $( "#menu" ).toggle();
        });
    });
});
