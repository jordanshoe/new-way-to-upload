$(function(){

     //auto slide

    //  function do_slide(){
    //     interval = setInterval(function(){
    //       moveRight();
    //     }, 3000);
    //   }
    //   //auto slide call function
    //   do_slide();

    //    $('#slider ul li').hover(function(){
    //        clearInterval(interval);
    //      });
    //       $('#slider ul li').mouseleave(function(){
    //        do_slide();
    //      });
    
    
    // slider
        var sliderWidth = $('#slider ul li').width();
        var sliderHeight = $('#slider ul li').height();
        var slideCount = $('#slider ul li').length;

        var sliderUlWidth = sliderWidth * slideCount;

        $('#slider').css({width: sliderWidth, height: sliderHeight});
        $('#slider ul').css({width:sliderUlWidth, height: sliderHeight, marginLeft: -sliderWidth});

        $('#slider ul li').last().prependTo('#slider ul');

        function moveLeft(){
            $('#slider ul').animate({
                left: sliderWidth
            },'slow',function(){
                $('#slider ul li').last().prependTo('#slider ul');
                $('#slider ul').css('left','0');
            });
        }

        function moveRight(){
            $('#slider ul').animate({
                left: -sliderWidth
            },'slow',function(){
                $('#slider ul li').first().appendTo('#slider ul');
                $('#slider ul').css('left','0');
            });
        }

        $('a.control_next').click(function(){
            moveRight();
        });

        $('a.control_prev').click(function(){
            moveLeft();
        });

        



});