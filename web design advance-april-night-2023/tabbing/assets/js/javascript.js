function openCity(cityName){
    // alert('testing function');
    var tabcontent =document.getElementsByClassName('tabcontent');
        console.log(tabcontent);

        for(var x = 0; x < tabcontent.length; x++){
            tabcontent[x].style.display = 'none';
        }

        document.getElementById(cityName).style.display = "block";

        // tabcontent[0].style.display = 'none';
        // tabcontent[1].style.display = 'none';
        // tabcontent[2].style.display = 'none';
        // tabcontent[3].style.display = 'none';
}

//auto click
    document.getElementById('btn-tokyo').click();