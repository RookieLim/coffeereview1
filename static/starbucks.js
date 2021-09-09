$(document).ready(function () {
    
    var i = 0
    
    $('#starbucks-right').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#starbucks-grid').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#starbucks-left').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#starbucks-grid').animate({
            left: -250.125 * i
        });

    });

      $('#starbucks-right1').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#starbucks-grid1').animate({
            left: -250.125 * i
        });

    });

    $('#starbucks-left1').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#starbucks-grid1').animate({
            left: -250.125 * i
        });

    });

      $('#starbucks-right2').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#starbucks-grid2').animate({
            left: -250.125 * i
        });

    });

    $('#starbucks-left2').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#starbucks-gri2').animate({
            left: -250.125 * i
        });

    });

      $('#starbucks-right3').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#starbucks-grid3').animate({
            left: -250.125 * i
        });

    });

    $('#starbucks-left3').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#starbucks-grid3').animate({
            left: -250.125 * i
        });

    });

});/*end*/