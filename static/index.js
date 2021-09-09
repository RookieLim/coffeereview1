$(document).ready(function () {
    
    var i = 0
    
    $('#hotmenu-right').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#hotmenu-grid').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#hotmenu-left').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#hotmenu-grid').animate({
            left: -250.125 * i
        });
        
    });

    $('#recommend-right').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#recommend-grid').animate({
            left: -250.125 * i
        });

    });

    $('#recommend-left').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#recommend-grid').animate({
            left: -250.125 * i
        });

    });



    $('#recommend1-right').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#recommend1-grid').animate({
            left: -250.125 * i
        });

    });

    $('#recommend1-left').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#recommend1-grid').animate({
            left: -250.125 * i
        });

    });


});/*end*/