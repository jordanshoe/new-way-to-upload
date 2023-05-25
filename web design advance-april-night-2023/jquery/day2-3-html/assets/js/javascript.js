

$(function(){

 //----GET and SET

    //text()
        var test = $('#demo').text();
            console.log(test);

        $('#demo').text('Welcome to <strong>Kredo Japan</strong>');


    //html()
         $('#demo').html('Welcome to <strong>Kredo Japan</strong>');

    //val()
      var value = $('#firstname').val('my default value');
        console.log(value);

    $('#val-btn').click(function(){
        var country = $('#country').val();
        alert('The country you chose is '+ country);

        console.log('The country you chose is '+ country);
    });

    //attr() = attribute

        //set
        $('#demo3').attr('href','https://google.com');


    // ----Jquery Add----

    //prepend = insert data before original content
    //append = insert data after the original content

    $('#demo4').prepend('Hello,my <em>name</em> is ');
    $('#demo4').append(', I live in <strong>Japan</strong>.');

    //before() = insert data before the selected element
    //after() = insert data after the selected element
    $('#demo4').before('<h3>This is a before method</h3>');

    $('#demo4').after('<h4>This is a after method</h4>');

    //----- remove---

        //remove() = remove content of the element and remove the element inside the DOM


        //empty() = remove the child element

        $('.menu li:nth-child(2)').remove();

        $('.menu').empty();
        $('.menu').remove();


    //---Jquery CSS--

        //class
            //addClass()
            //removeClass()
            //toggleClass()

        $('.box').addClass('selected circle');
        $('.box').removeClass('selected circle box');

        // $('.box').click(function(){
        //     $(this).toggleClass('circle');
        // });


        //css()
            //one is to one only(direct css)
            $('#demo5').css('font-size', '40px');
            $('#demo5').css('font-style', 'italic');
            $('#demo5').css('text-transform', 'uppercase');

            //multiple css properties
            $('#demo5').css({
                color: 'tomato',
                fontFamily: 'sans-serif',
                textDecoration:'underline'
            });

    //--Jquery Dimension

            //width() =width of the element
            //height() = height of the element


            var width = $('.d-box').width();
                console.log('box width is '+ width);

            var height = $('.d-box').height();
                console.log('box height is '+ height);


            // innerWidth and innerHeight = width+padding or height+padding

            var innerwidth = $('.d-box').innerWidth();
            console.log('box inner width is '+ innerwidth);

            var innerheight = $('.d-box').innerHeight();
            console.log('box inner height is '+ innerheight);


            // outerWidth and outerHeight = width+padding+border or height+padding+border

            var outerwidth = $('.d-box').outerWidth();
            console.log('box outer width is '+ outerwidth);

            var outerheight = $('.d-box').outerHeight();
            console.log('box outer height is '+ outerheight);




            

            


    
            



            



});