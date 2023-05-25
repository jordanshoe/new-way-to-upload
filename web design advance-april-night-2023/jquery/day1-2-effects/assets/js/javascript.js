$(function(){

    // hide,show, and toggle methods
    $('#hide-btn').click(function(){
        $('#demo').hide(1200);
    });
    $('#show-btn').click(function(){
        $('#demo').show('slow');
    });
    $('#toggle-btn').click(function(){
        $('#demo').toggle('fast');
    });

    //fade effects

    $('#fade-out-btn').click(function(){
        $('.box1').fadeOut('fast');
        $('.box2').fadeOut('slow');
        $('.box3').fadeOut(1200);

    });

    $('#fade-in-btn').click(function(){
        $('.box1').fadeIn('fast');
        $('.box2').fadeIn('slow');
        $('.box3').fadeIn(1200);

    });

    $('#fade-toggle-btn').click(function(){
        $('.box1').fadeToggle('fast');
        $('.box2').fadeToggle('slow');
        $('.box3').fadeToggle(1200);

    });

    $('#fade-to-btn').click(function(){
        $('.box1').fadeTo('fast',.1);
        $('.box2').fadeTo('slow',.3);
        $('.box3').fadeTo(1200,0);

    });

    // --slide effect(accordion)

        // $('.flip').click(function(){
        //     $('.panel').slideDown('slow');
        // });

        // $('.flip').click(function(){
        //     $('.panel').slideUp('slow');
        // });

        $('.flip').click(function(){
            $('.panel').slideToggle('slow');
            $('#arrow').toggleClass('arrow-rotate');
        });

    // animate effect
    //css properties with number values only
    // syntax: animate({css properties},speed, callback);

        $('.container').click(function(){
            $(this).animate({
                width: '200px',
                height: '200px',
                borderRadius: '0',
                left: '300px',
                opacity: '.5',
                // background:'#000000'

            },'slow');
        });

        // container1 with callback function

        $('.container1').click(function(){
            // alert('testing button');
                 goLeft();
        });

        function goLeft(){
            // alert('testing function');
            $('.container1').animate({
                left:'400px'
            },1200,function(){
                // alert('testing callback');
                goUp();
            });
        }


        function goUp(){
            // alert('testing goup');
            $('.container1').animate({
                bottom:'450px'
            },'slow',function(){
                // alert('testing callback');
                goSlant();
            });
        }

        function goSlant(){
            $('.container1').animate({
                left:'200px',
                bottom:'0'
            },1000,function(){
                goBack();
            });
            
        }

        function goBack(){
            $('.container1').animate({
                left:'0'
            },500,function(){
                //infinite loop
                    goLeft();
            });
        }


        // stop method

        $('#stop-btn').click(function(){
            $('.container1').stop();
        });

        // chaining-->series of method that is bind together

        $('#chain').click(function(){
            $(this).fadeOut('slow').fadeIn(1200).slideUp('slow').slideDown(1000,function(){chain()});
        });

        function chain(){
            alert('this is a callback function');
        }

});