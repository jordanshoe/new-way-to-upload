

$(function(){

  
    //     $(window).resize(function() {
    //       if ($(window).width() >= 768) {
    //         $('#slider ul li').addClass('li-width');
    //         $('#slider').css({
    //             width: '100%',
    //             height: '500px',
    //             border: '1px solid green'
    //         })
    //         $('#slider ul').css({
    //             width: '100%',
    //             height: '500px',
    //             marginLeft: -sliderWidth
                
    //         })
    //         var sliderWidth =$('#slider ul li').width();
    //         console.log(sliderWidth);
    
        
    //     var sliderHeight =$('#slider ul li').height();
    //         console.log(sliderHeight);
    //         var sliderCount = $('#slider ul li').length;
    //         console.log(sliderCount);
    
    //     var sliderUIWidth = sliderWidth * sliderCount;
    //         console.log(sliderUIWidth);
    //       } else {
    //         $('#slider ul li').removeClass('li-width');
    //         $('#slider').css({
    //             width: sliderWidth,
    //             height: sliderHeight,
    //             border: '1px solid red'
    //         })
    //         $('#slider ul').css({
    //             width: sliderUIWidth,
    //             height: sliderHeight,
    //             marginLeft: -sliderWidth
                
    //         })
    //         var sliderWidth =$('#slider ul li').width();
    //         console.log(sliderWidth);
    
        
    //     var sliderHeight =$('#slider ul li').height();
    //     var sliderCount = $('#slider ul li').length;
    //     console.log(sliderCount);

    // var sliderUIWidth = sliderWidth * sliderCount;
    //     console.log(sliderUIWidth);
    //       }
    //     });

       //for responsive

//        var mq = window.matchMedia("(min-width: 768px)");
//         var box = $("#slider ul li");

// function handleScreenSizeChange(mq) {
//   if (mq.matches) {
//     box.addClass("li-width");
//   } else {
//     box.removeClass("small");
//   }
// }

// handleScreenSizeChange(mq); // Check the initial state on page load

// mq.addListener(function() {
//   handleScreenSizeChange(mq);
// }); // Listen for changes in screen size

   
      
    // auto slide

    function autoSlide(){
        interval = setInterval(function(){
            moveRight();
        },2000)
    }
    //call the function
    autoSlide();

    //stop auto and do manual
    $('#slider ul li').hover(function(){
        clearInterval(interval);
    },function(){
        autoSlide();
    })

    $('#slider a').hover(function(){
        clearInterval(interval);
    },function(){
        autoSlide();
    })






//   slider

    var sliderWidth =$('#slider ul li').width();
        console.log(sliderWidth);

    
    var sliderHeight =$('#slider ul li').height('100%');
        console.log(sliderHeight);

    var sliderCount = $('#slider ul li').length;
        console.log(sliderCount);

    var sliderUIWidth = sliderWidth * sliderCount;
        console.log(sliderUIWidth);


    $('#slider').css({
        width: '100%',
        height: sliderHeight,
        border: '1px solid red'
    })

    $('#slider ul').css({
        width: sliderUIWidth,
        height: sliderHeight,
        marginLeft: -sliderWidth
        
    })
    $('#slider ul').children().css({
        // minWidth: '100%',
        width: '600px'
       
        // background: 'yellowgreen'
     
    });
    $('#slider ul li').last().prependTo('#slider ul');


    function moveLeft(){
        // alert('testing button');
        $('#slider ul').animate({
            left:sliderWidth
        },2000,function(){
            // alert('testing callback');
            $('#slider ul li').last().prependTo('#slider ul');
            $('#slider ul').css({
                left:'0',
                // marginLeft: '100px'
            });
        })
    }

    // prev button
    $('a.control_prev').click(function(){
        moveLeft();
    })


    function moveRight(){
        // alert('testing function');
        $('#slider ul').animate({
            left:-sliderWidth
        },2000,function(){
            // alert('testing callback');
            $('#slider ul li').first().appendTo('#slider ul');
            $('#slider ul').css('left','0');
        })
    }

     // next button
     $('a.control_next').click(function(){
        moveRight();
    })

});