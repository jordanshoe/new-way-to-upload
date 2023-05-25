// ---------------Finding HTML Elements using 4 methods----------

//1. Get element using its ID attribute
    document.getElementById('demo');
    console.log(document.getElementById('demo'));

    var demo =  document.getElementById('demo');
    console.log(demo);


//2. Get element using tag name
    //return an array

    document.getElementsByTagName('span');
    console.log(document.getElementsByTagName('span'));// select all span
        var fruit = document.getElementsByTagName('span');
        console.log(fruit[1]);

    console.log(document.getElementsByTagName('span')[3]); //select a specific span inside array

        //get single value in array
            var fruit1 = document.getElementsByTagName('span')[1];
            console.log(fruit1);

//3. Get element using its classname
    //return an array
    document.getElementsByClassName('car');

        //get single value in array
            var car =  document.getElementsByClassName('car');
            console.log(car[1]);

//4.Get element using css selector(special method)
    document.querySelectorAll('span.car');

            var normal_car =  document.querySelectorAll('span.car');
                console.log(normal_car[0]);


//-----------Changing HTML Elements----------
    //change content
        //--innerHTML = access inside the element(get the content and set a new content)
         document.getElementById('change').innerHTML;
         console.log( document.getElementById('change').innerHTML);

         //set new content
         document.getElementById('change').innerHTML = "I'm Hungry";

         var test =  document.getElementById('change');
            test.innerHTML = "Doraemon";
            test.innerHTML = "Almost break time";


    //change attribute value

        var btn = document.getElementById('demo1');
            btn.value = 'Login';
            btn.type = 'text';
            btn.name = 'firstname';

    //change styling(css properties and values)
        
        var test2 = document.getElementById('styling');

            test2.style.color = 'tomato';
            test2.style.fontSize = '40px';
            test2.style.textDecoration = 'underline';
            test2.style.textTransform = 'uppercase';


    // setAttribute(add new attribute)

        var animal = document.getElementsByTagName('span');
            console.log(animal[4]);

            animal[4].setAttribute('id','crocs');
            animal[4].setAttribute('class','river');


//----------------Adding and Deleting Element-----------

    //createElement()
            var new_element = document.createElement('button');
                console.log(new_element);

                //add content
                new_element.innerHTML = "click me";

    //appendChild() --insert an element after the original content

            var box = document.getElementsByClassName('box');
                console.log(box);
                //insert element inside the DOM
                box[0].appendChild(new_element);

    //create textnodes

        //create an element
            var heading = document.createElement('h2');
                console.log(heading);
        
            //add a content for the element
                var heading_text = document.createTextNode('Welcome to Kredo Japan');
            //append() --insert a content inside element
                heading.append(heading_text);

            //insert element inside the DOM
                box[0].appendChild(heading);


    //-----deleting an element----
        //removeChild()

            var menu = document.getElementsByClassName('menu');
                console.log(menu);

            var menu_item = document.querySelectorAll('.menu li')
                console.log(menu_item);
                    menu[0].removeChild(menu_item[1]);
                    menu[0].removeChild(menu_item[0]);


            




