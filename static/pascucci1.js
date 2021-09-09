$(document).ready(function () {
    
    var i = 0
    
    $('#pascucci1-right').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#pascucci1-grid').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#pascucci1-left').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#pascucci1-grid').animate({
            left: -250.125 * i
        });

    });

      $('#pascucci2-right').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#pascucci2-grid').animate({
            left: -250.125 * i
        });

    });

    $('#pascucci2-left').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#pascucci2-grid').animate({
            left: -250.125 * i
        });

    });

      $('#pascucci3-right').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#pascucci3-grid').animate({
            left: -250.125 * i
        });

    });

    $('#pascucci3-left').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#pascucci3-grid').animate({
            left: -250.125 * i
        });
    });

});/*end*/