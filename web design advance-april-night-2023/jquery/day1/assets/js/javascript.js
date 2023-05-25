// $document.ready(function(){


//         //ready function

//         //write our jquery codes


// });

// shorthand

$(function(){

    //   $('p').click(function(){
    //         $('p').css('background', 'tomato');
    //   });

    //   $('#demo').mouseenter(function(){
    //         $('#demo').css('font-size','25px');
    //   });

    //   $('#demo2').click(function(){
    //         $('#demo').css('background','yellowgreen');
    //   });

    //   $('#demo2').css('background','red');

      $('#demo').on({
        click:function(){
            $(this).css('background','aqua');
        },
        mouseenter:function(){
            $(this).css('background', 'magenta');
        },
        mouseleave:function(){
            $(this).css('background','yellowgreen');
        }
      });


});