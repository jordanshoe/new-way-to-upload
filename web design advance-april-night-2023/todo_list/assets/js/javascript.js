//1. call/find the add button
    var add_btn = document.getElementById('add');
        console.log(add_btn);

//2. add an event on the button(binding an event to a DOM node)
        add_btn.onclick = function(){
            // alert('testing button');
            //3. create a separate function
            addItem();
        }

        // function add(){
        //     alert('testing html event button');
        // }
//4. create a function name that we declared in step 3
        function addItem(){
            // alert('testing additem function');
            //5. create an element(li)
            var list_item = document.createElement('li');
                console.log(list_item);

            //6.find the input field(input contol)
            var inputField = document.getElementById('inputItem');
                console.log(inputField);
            //7. fetch(get) the value(content) inside the input field

            var item_name = inputField.value
                if(item_name == ''){
                    alert('Please input something');
                }else{

               
                console.log(item_name);
            //8. insert the value(content) inside the created li element
                list_item.append(item_name);

            //9. find the ol element
                var Olist = document.getElementById('list');
                    console.log(Olist);

            //10. insert the created element inside ol
                Olist.appendChild(list_item);

            //11.clear the input value
                document.getElementById('inputItem').value = '';
             }

        }

    //removing an element
    //12. find the remove button
        var btn_remove = document.getElementById('remove');

    //13. add an event on the remove button
            btn_remove.onclick = function(){
                // alert('testing remove button');
                //14. create a separate function for remove button
                removeItem();
            }
        //15. create a function
                function removeItem(){
                    // alert('testing remove function');
                    var Olist = document.getElementById('list');

                    //17. call/find all list(li) inside the ol
                        var items = document.querySelectorAll('#list li');
                            console.log(items)
                    //18. remove child
                        Olist.removeChild(items[items.length-1]);

                }
