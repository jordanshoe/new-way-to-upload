// alert("I'm hungry, I need a hamburger.");
// alert(5*456);
// alert(23/5);

// console--
    // console.log("Hello console!");
    // console.log(34/7);

//case-sensitive
    // var name = "Suzaki";
        // alert(name);
    //    console.log(Name);// error because Name and name are not equal


//comments
    //single-line comment
    

    /**
     * multi-line comment
     * 
     * 
     * 
     * 
     * 
     */


// -----Sample Javascript HTML and CSS manipulation----

    //change html content
    document.getElementById('demo').innerHTML = "I love Japan";

    //change attribute values
    document.getElementById('demo2').href = 'https://twitter.com';

    //change of style(css properties and values)
    document.getElementById('demo').style.color = "green";
    document.getElementById('demo').style.fontSize = "45px";
    document.getElementById('demo2').style.color = "tomato";


// ---------------BASICS OF JAVASCRIPT---------------------

    //--variable -->store values
        /*
            syntax:
                var variableName = value;
        */

            var fruit = "Cherry"; // classic way of creating a variable
                console.log(fruit);

            var fruit1, fruit2, fruit3;// remote variable
                fruit1 = "banana";
                fruit2 = "watermelon";
                fruit3 = "apple";
                console.log(fruit1,fruit2,fruit3);
                console.log(fruit2);
                console.log(fruit3);

            var fruit4 = "mango",
                fruit5 = "pineapple"; //hybrid variable

            /**
             *  Rules in variable
             *      1. Do not create variables that start with a number.
             *      2. No special characters/symbols(!@#$%^&*()) except under_score(_)
             * 
             *      Note: variables are case-sensitive
             * 
             */

    //----Data types----
        //primary Data types

            //string
                var word = "kredo Japan";
                var name = 'Asahi Katayama';
                   
                var address = "IT Park Cebu, Philippines";
                    console.log(address);

            //number
                var age = 28;
                var distance = 34.9
                console.log(age);

            //boolean(true or false)
                var single = true;
                var married = false;
                console.log(single);

            //null = nothing at all
                var suzaki = null;
                console.log(suzaki);

            //undefined
                var joe;
                console.log(joe);


    //--composite data types--

            //array = list of values
                    // array_name = [];

                var basket = ['milk',25,false,'beer',30,null];
                console.log(basket);
                console.log(basket[3]);

                console.log(basket.length);//get the total value of an array
                //length is special property
                //. means binding(connect or joint)

                    //--methods--
                        //push() =adding value at the end of the array list
                        basket.push("Yakult");
                        console.log(basket);

                        //unshift() =adding value at the beggining of the array list
                        basket.unshift(true);

                        //pop() = removing value at the end of the array list
                        basket.pop();

                        //shift()= removing value at the beggining of the array list
                        basket.shift();

                        //indexOf()= find a specific item on the array list
                            console.log(basket.indexOf(false));

                            console.log(basket.indexOf(30));

            //object = collection of properties

                var person = {};

                    person.name = "Ryoma";
                    person.age = 22;
                    person.married = true;
                    console.log(person);

                    person.car = {};
                        person.car.car1 = "Tesla";
                        person.car.car2 =  "Lambo";

//------------------Day 2----------------

    //------Operators------------

        //--Assignment Operator(=)
            //equal operator
            
            var x = 1; //x -->left operand means receive a value from the right operand
                //1 -->right operand means assign a value to the left operand

                var y = 5;
                    x = y;
                    y = x;
                    console.log(y);

        //compound assignment operators
            //using arithmetic operators(+,-,*,/)
                
                var num1,num2;
                    num1 = 10;
                    num2 = 7;


                    // num1 = num1 + num2;
                    //     num1+=num2;//shorthand
                    // console.log(num1);

                    // num1 = num1 - num2;
                    //    num1-=num2;//shorthand
                    //    console.log(num1);

                   // num1 = num1 * num2;
                //    num1*=num2;//shorthand
                //    console.log(num1);

                       // num1 = num1 / num2;
                       num1/=num2;//shorthand
                       console.log(num1);


    //---Comparison Operators--
            //return a boolean data type value(true or false)

            var a = 8;
            var b = '8';

            //greater that(>)
            console.log(a > b);

            //less than(<)
            console.log(a < b);

            //equal to(==)
            console.log(a == b);

            //identical/strict equal(===)
            console.log(a === b);

            //nott equal to(!=)
            console.log(a !== b);

    //-Logical Operators(and(&&), or(||))

            var number1 = 9;
            var number2 = 8;
            var number3 = 12;
            var coffee = true;
            var milk = false;

            //and(&&)
            console.log(number1 > number2 && number1 < number3)
            console.log(milk && coffee);

            //or(||)
            console.log(number1 > number2 || number1 > number3);
            console.log(milk || coffee);



    //--Unary operator
            //increment operator = add one to its operand

                var z = 10;
                    // console.log("-----postincrement operator-----");
                    // console.log(++z);
                    // console.log(++z);

                    console.log("-----preincrement operator-----");
                    console.log(z++);
                    console.log(z++);



            //decrement operator = minus/subtract one to its operand

                var w = 10;
                    // console.log("-----postdecrement operator-----");
                    // console.log(--w);
                    // console.log(--w);


                    console.log("-----predecrement operator-----");
                    console.log(w--);
                    console.log(w--);


            //unary negation = change into negative value
                    var c = 500;
                    console.log(-c);

            //unary plus = change into positive value

                    console.log(+c);

    //------Concatenation(join) operator(+)---

            var firstname = "John";
            var lastname = "Doe";
            console.log("Hello my name is " + firstname + " " +lastname);

            console.log("My favorite food is 'Ramen'.");

            // \ = means escape(ignore)
            console.log('My hobby is \'traveling\'.');

            console.log("I live in \"Tokyo\".");


            // -----------------Quiz---------------
            var fname = "Donald";
            var lname = "Duck";
            var bplace = "Disneyland";
            var hobby1 = "soccer";
            var hobby2 = "swimming";
            var hobby3 = "piano";

            //answer:
            
            console.log("-----Quiz------");
            console.log("Hello, my name is" + " " + '"' + fname + " " + lname + '"' + ". I live in" + " " + "'" + bplace + "'" + ", love to play" + " " + hobby1 + " " + "and know" + " " + hobby2 + " " + "also playing the" + " " + hobby3 + " "+".My favorite food is \"Hamburger\" and 'Hotdog';");


            //output in the console:

    // Hello, my name is "Donald Duck". I live in 'Disneyland', love to play Soccer and know swimming also playing the piano. My favorite food is "Hamburger" and 'Hotdog';

        //another example:

            var total;
            var fnum = 10, snum =5;
            total = fnum + snum;
            console.log("The total amount: "+ total);


//--------------------Conditional Statements-------------

    //if
            var test1 = 25;
            var test2 = 21;

            if(test1 < test2){
                //block of code or statement
                console.log("Your condition is true");
            }

    //if else
            if(test2 < 100){
                console.log("your condition is true");
            }else{
                console.log("Your condition is false");
            }

    //if elseif else
            if(test2 > 20){
                console.log("Your condition is true");
            }else if(test2 < 100){
                console.log("Your condition is true: test2 is less that 100");
            }else{
                console.log("Your condition is false");
            }

            //another example:
                var age = 59;

                    if(age <= 18){
                        console.log(age + " is Teenager");
                    }else if(age > 18 && age <= 59){
                        console.log(age + " Middle age person");
                    }else{
                        console.log(age + " is not so young anymore");
                    }


//--------Loops-----
    //for
    //while
    //do while

        //---Do while loop--
        console.log("---Do while loop");

        var z = 1;//initialization

        do{
            //loop body statement/block of code
            console.log("Do while # "+ z);
            z++; //update statement
        }while(z > 3 );//condition


        //---While loop---
        console.log("---while Loop---");

        var y = 0;//initialization
        while(y > 3){
            //loop body statement
            console.log("while # "+ y);
            y++; //update statement
        }



        //--for loop--
            /*
            *   syntax:
                    Initialization
                    conditianal expression
                    unary expression(increment/decrement)
            
            */
           console.log("------For Loop-----");
            var i;//initialization
            for(i = 0; i < 3; i++){
                //loop body statement(block of code)
                console.log("Number: "+ i);
            }

            //using array

            var names = ['Ryoma','Suzaki','Asahi','Joe','John','Naruto','Doraemon','Adam'];

                for(var x=0;x < names.length; x++ ){
                    console.log("Index Number "+ x + ":" + names[x] );
                }

    //------------Quiz----------------

                var age = 100;
                var class1 = ['Web Basic','Web Design','Web Development'];
                var class2 = ['Web Design Advance', 'Web Development Advance','Web Development Expert'];


                //if age is 18-25 the subjects for class1 will be displayed in the console.
                //if age is 26-40 the subjects for class2 will be displayed in the console.
                console.log("-----Quiz------");

                if(age >= 18 && age <= 25){
                    console.log("Age: "+ age);
                    for(var x=0; x < class1.length;x++ ){
                        console.log("Subject "+ x +":"+ class1[x]);
                    }
                }else if(age >= 26 && age <= 40){
                    console.log("Age: "+ age);
                    for(var y=0; y < class2.length; y++){
                        console.log("Subject "+y+":" + class2[y]);
                    }
                }else{
                    console.log("You are not qualified");
                }


//-----------------------Function-------------------

        function ambulance(){
            //block of code/statement
            alert("Ambulance is coming");
            console.log("call 911");
        }

        // call it(invoke)
        // ambulance();
        // ambulance();
        // ambulance();  
        // ambulance();

        function getTotal(){
            console.log(23+45);
        }

        //call function
        getTotal();
        getTotal();

            /*
                syntax:
                    function functionName(){};

                    parameter = placeholder in order to pass a value
                    argument = actual value or data(variable)
            */

        console.log("----Function using arguments----------");

            function sum(value1,value2,value3){
                // alert(value1+value2+value3);
                console.log(value1+value2+value3);
            }

            //call function
            sum(3,7,10);
            sum(20,40,100);

            var a = 12;
            var b = 15;
            var c = 27;
            sum(a,67,b);

            sum(19,33);
            sum(23,a,c,40);


        console.log("----Function using return-----");

        function getProduct(num1, num2){
            product = num1 * num2;
            return product;
            // console.log(product);
        }

        function minus(x,y){
            z = x - y;
            return z;
        }

        //call function


     console.log(minus(6,3));

      console.log(getProduct(3,4));

      console.log(getProduct(3,4) + minus(6,3));

//-------Scope of Variables----

    console.log("Scope of variables");

        var country = 'Japan';

        function place(){
            console.log(country);//Global Variable
            var food = 'Ramen';//local Variable
            console.log(food);
        }

        console.log(country);
        //console.log(food);//error because it's a local variable

        //call to function

        place();


//--------function and events(onclick,ondblclick,onmouseenter)

        function testing(){
            alert('Hello Ryoma and Suzaki');
        }

        function getTotalValue(val1,val2){
            total = val1 + val2;
            alert("Total Value:"+ total);
        }


            








             




















