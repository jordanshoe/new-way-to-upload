

// var black = document.getElementById('black');
// var red_item = document.getElementsByClassName("red");
// var blue_item = document.getElementsByClassName("blue");
// var green_item = document.getElementsByClassName("green");

//     black.onclick = function(){
//         // alert("testing");
        
//         var item_wrapper = document.querySelectorAll(".item-wrapper div");
//         // console.log(item_wrapper);
//         for(var x =0; x < item_wrapper.length; x++){
//             item_wrapper[x].style.display = "block";
//         }
        
//     }

// var red = document.getElementById('red');
//     red.onclick = function(){
//         // alert("testing");
       

//         for(y = 0; y < red_item.length; y++){
//             red_item[y].style.display = "block";
//         }

//         for(x = 0; x < blue_item.length; x++){
//             blue_item[x].style.display = "none";
//         }

//         for(z = 0; z < green_item.length; z++){
//             green_item[z].style.display = "none";
//         }
//     }

//     var blue = document.getElementById('blue');
//     blue.onclick = function(){
//         // alert("testing");
      

//         for(y = 0; y < red_item.length; y++){
//             red_item[y].style.display = "none";
//         }

//         for(x = 0; x < blue_item.length; x++){
//             blue_item[x].style.display = "block";
//         }

//         for(z = 0; z < green_item.length; z++){
//             green_item[z].style.display = "none";
//         }
//     }

//     var green = document.getElementById('green');
//     green.onclick = function(){
//         // alert("testing");
       

//         for(y = 0; y < red_item.length; y++){
//             red_item[y].style.display = "none";
//         }

//         for(x = 0; x < blue_item.length; x++){
//             blue_item[x].style.display = "none";
//         }

//         for(z = 0; z < green_item.length; z++){
//             green_item[z].style.display = "block";
//         }
//     }

$(function(){
    $('#black').click(function(){
        $('.item-wrapper div').show();
    });

    $('#red').click(function(){
        $('.red').show();
        $('.blue').hide();
        $('.green').hide();
    });

    $('#blue').click(function(){
        $('.red').hide();
        $('.blue').show();
        $('.green').hide();
    });

    $('#green').click(function(){
        $('.red').hide();
        $('.blue').hide();
        $('.green').show();
    });


});





