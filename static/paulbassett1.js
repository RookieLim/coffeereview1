$(document).ready(function () {
    
    var i = 0
    
    $('#paulbassett1-right').click(function () {
        
        i++;
        
        if (i > 3){
            i=0;
        }
        
        $('#paulbassett1-grid').animate({
            left: -250.125 * i
        });
        
    });
    
    $('#paulbassett1-left').click(function () {
        
        i--;
        
        if (i < 0){
            i=3;
        }
        
        $('#paulbassett1-grid').animate({
            left: -250.125 * i
        });

    });

      $('#paulbassett2-right').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#paulbassett2-grid').animate({
            left: -250.125 * i
        });

    });

    $('#paulbassett2-left').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#paulbasset2-grid').animate({
            left: -250.125 * i
        });

    });

      $('#paulbassett3-right').click(function () {

        i++;

        if (i > 3){
            i=0;
        }

        $('#paulbassett3-grid').animate({
            left: -250.125 * i
        });

    });

    $('#paulbassett3-left').click(function () {

        i--;

        if (i < 0){
            i=3;
        }

        $('#paulbassett3-grid').animate({
            left: -250.125 * i
        });
    });

});/*end*/