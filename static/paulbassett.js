$(document).ready(function () {
    
    var i = 0
    
    $('#paulbassett-right').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#paulbassett-grid').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#paulbassett-left').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#paulbassett-grid').animate({
            left: -250.125 * i
        });

    });

      $('#paulbassett-right1').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#paulbassett-grid1').animate({
            left: -250.125 * i
        });

    });

    $('#paulbassett-left1').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#paulbassett-grid1').animate({
            left: -250.125 * i
        });

    });

      $('#paulbassett-right2').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#paulbassett-grid2').animate({
            left: -250.125 * i
        });

    });

    $('#paulbassett-left2').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#paulbassett-gri2').animate({
            left: -250.125 * i
        });

    });

      $('#paulbassett-right3').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#paulbassett-grid3').animate({
            left: -250.125 * i
        });

    });

    $('#paulbassett-left3').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#paulbassett-grid3').animate({
            left: -250.125 * i
        });

    });

});/*end*/