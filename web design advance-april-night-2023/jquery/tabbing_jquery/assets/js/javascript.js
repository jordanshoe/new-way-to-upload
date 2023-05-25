// function openCity(cityName){
//     // alert('testing function');
//     var tabcontent =document.getElementsByClassName('tabcontent');
//         console.log(tabcontent);

//         for(var x = 0; x < tabcontent.length; x++){
//             tabcontent[x].style.display = 'none';
//         }

//         document.getElementById(cityName).style.display = "block";

//         // tabcontent[0].style.display = 'none';
//         // tabcontent[1].style.display = 'none';
//         // tabcontent[2].style.display = 'none';
//         // tabcontent[3].style.display = 'none';
// }

// //auto click
//     document.getElementById('btn-tokyo').click();


$(function(){

    // $('.button-wrapper').children().eq(0).click(function(){
    //    
    // })
    $('#default').click(function(){
         openCity('london');
    })

    $('.button-wrapper').children().eq(1).click(function(){
        openCity('paris');
    })
    $('.button-wrapper').children().eq(2).click(function(){
        openCity('tokyo');
    })
    $('.button-wrapper').children().eq(3).click(function(){
        openCity('oslo');
    })


    //auto click
    $('#btn-tokyo').click();

    function openCity(cityName){
        $('.tabcontent').hide();
        $('#'+cityName).show();
    }

});