$(function(){

        $('#add').click(function(){
            var inputValue = $('#inputItem').val();

            //if input is empty
            if(inputValue == ''){
                alert('Please input something');
            }else{

           
                $('#list').append('<li>'+inputValue+'<span>x</span></li>');


                //clear the input value
                $('#inputItem').val('');

                // remove the li
                $('#list').find('span').click(function(){
                    $(this).parent().remove();
                });
            }
        


        });







});