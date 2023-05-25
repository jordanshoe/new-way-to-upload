

$(function(){

   //--Jquery Traversing--

   //--Jquery Ancestor
        //parent() = select a single direct parent
            // $('em').parent().css('border', '1px solid red');
        //parents() = select the parent parents up to the root element
        // $('em').parents().css('border', '1px solid green');

        // //parentsUntil
        // $('em').parentsUntil('body').css('border', '1px solid blue');


    //--Jquery Descendant

        //children() = works only on direct children
        // $('div').children().css('border', '1px solid yellow');

        // $('ul').children().css('border','1px solid red');


        //find() =universal method

        // $('div').find('.first').css('border','1px solid black');


    //--Jquery Siblings

        //siblings()

            // $('h1').siblings().css('border','1px solid red');

            // $('h1').siblings('ul').css('border','1px solid green');


        //next()
            // $('h1').next().css('border','1px solid black');

            // $('h1').nextAll().css('border','1px solid red')

            // $('h1').nextAll('ul').css('border','1px solid blue')

            // $('h1').nextUntil('span').css('border','1px solid green')


        //prev() =oldest sibling(previous)

            // $('ul').prev().css('border','1px solid red');

            // $('ul').prevAll().css('border','1px solid green');

            // $('span').prevAll('p').css('border','1px solid red');


            // $('span').prevUntil('h1').css('border','1px solid red');

    //---Jquery Filtering--

        //first()
            // $('li').first().css('border','1px solid green');


        //last()
        // $('li').last().css('border','1px solid red');

        //eq() =equivalent(index number)
        //    $('li').eq(1).css('border','1px solid yellow');


        //filter()
            // $('li').filter('.second').css('border','1px solid black');

        //not()
        $('li').not('.first').css('border','1px dashed red');







}); 