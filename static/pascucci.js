$(document).ready(function () {
    
    var i = 0
    
    $('#pascucci-right').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#pascucci-grid').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#pascucci-left').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#pascucci-grid').animate({
            left: -250.125 * i
        });

    });

      $('#pascucci-right1').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#pascucci-grid1').animate({
            left: -250.125 * i
        });

    });

    $('#pascucci-left1').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#pascucci-grid1').animate({
            left: -250.125 * i
        });

    });

      $('#pascucci-right2').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#pascucci-grid2').animate({
            left: -250.125 * i
        });

    });

    $('#pascucci-left2').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#pascucci-gri2').animate({
            left: -250.125 * i
        });

    });

      $('#pascucci-right3').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#pascucci-grid3').animate({
            left: -250.125 * i
        });

    });

    $('#pascucci-left3').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#pascucci-grid3').animate({
            left: -250.125 * i
        });

    });

});/*end*/