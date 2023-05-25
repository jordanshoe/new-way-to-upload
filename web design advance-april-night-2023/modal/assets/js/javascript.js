
    var btn_modal = document.getElementById('btn');

        btn_modal.onclick = function(){
            // alert('testing button');
            var modal = document.getElementById('modal');
                modal.style.display = 'block';
        }

    var close_modal = document.getElementById('close');
        
        close_modal.onclick = function(){
            // alert('testing closing button');
            var modal = document.getElementById('modal');
            modal.style.display = 'none';            

        }
