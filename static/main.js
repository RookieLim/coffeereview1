$(document).ready(function () {
    
    var i = 0
    
    $('#hotmenu-right1').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#hotmenu-grid1').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#hotmenu-left1').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#hotmenu-grid1').animate({
            left: -250.125 * i
        });

    });



    $('#recommend-right1').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#recommend-grid1').animate({
            left: -250.125 * i
        });

    });

    $('#recommend-left1').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#recommend-grid1').animate({
            left: -250.125 * i
        });

    });



    $('#recommend-right2').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#recommend-grid2').animate({
            left: -250.125 * i
        });

    });

    $('#recommend1-left2').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#recommend-grid2').animate({
            left: -250.125 * i
        });

    });


});/*end*/