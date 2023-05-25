// part 1

var asia = document.getElementsByClassName("asia");
    //using for loop
    for(var i = 0; i < asia.length; i++){
           asia[i].style.color = "red";
        }
    // asia[0].style.color = "red";
    // asia[1].style.color = "red";
    // asia[2].style.color = "red";
    asia[3].style.color = "orange";
    // asia[4].style.color = "red";
    asia[3].style.fontSize = "30px";

var europe = document.getElementsByClassName("europe");
    // europe[0].style.visibility = "hidden";
    europe[0].style.display = "none";

    
var austria = document.getElementsByClassName("europe");
    austria[1].onclick = function(){
        // austria[0].style.visibility = "visible";
        europe[0].style.display = "block";
    }
    europe[2].style.color = "tomato";
var empty = document.getElementsByClassName("empty");
    empty[0].setAttribute('id', 'test');
    empty[0].innerHTML = "Doraemon";
    empty[0].style.color = "green";
    empty[0].style.fontSize = "50px";

// var btn = document.getElementsByTagName("button");
//     btn[0].onclick = function(){
//         alert("Ambulance is coming");
//     }

    function emergency(){
        alert("Ambulance is coming");
    }
