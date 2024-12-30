// document.write('this is my first first javascript page ')

// var pi= 3.14;
// var person = "are you god";
// var answer='yes i am !';
// document.write(pi + "<br>");
// document.write ( person + "<br>");
// document.write ( answer + "<br>");

// function myfunction(){
//     var carname = "welcome";
//     document.getElementById("demo").innerHTML=carname;
// }

// var num=10;
// console.log(num);
// console.log(typeof(num));
// num = false;
// console.log(num);
// console.log(typeof(num));
// num = "sanjeev soni";

// console.log(num);
// console.log(typeof(num));
// num = null;
// console.log(num);
// console.log(typeof(num));
// num = undefined;
// console.log(num);
// console.log(typeof(num));
// var companyname='google';

// var pi = 3.14;
// var year = 2013;
// var flag = true;
// // var false = false;

// var sayhello = function(){
//     alert("hello world");
// }

// var numberarray=[1,2,4,5];
// var animal = new Array("cat","dog","mouse","lion");

// var object={
//     name:"brack obamma",
//     age : '51',
  
// }
// console.log(object.name);

// var person = {
//     firstname:"john",
//     lastname : "doe",
//     id : 5566,
//     getinfo : function(){
//         return this,firstname+" "+this.lastname;

//     }
// };
// document.getElementsById("demo").innerHTML = person.getinfo();

// var person={
//     name: 'ramesh',
//     age:30,
//     isMarried : true,
//     child : ['cheeku'],
//     getInfo:function(){},
//     address : { 
//         street : 'vijay nagar',
//         flatNO:201
//     }
// }

// var person2 = new Object();
// person2.name ='krishnkant';
// person2.age = 32;
// person2.isMarried = true;
// person2.address = {};
// person2.address.street = "nagar road";
// person2['address']['flatNO'] = 33;
// console.log(person2);

//  console.log(person['name']);
//  document.write(person['name'])
//  document.write("<br>");

// function myfunction(){
//     var carName ="volvo";
//     document.getElementById("demo 1").innerHTML = typeofcarName+" "+carName;
// }
// myfunction();
// document.getElementById("demo 2").innerHTML=typeofcarName;
 
// var locales={
//     europe:function(){
//         var myfunction="monique";
//         var france = function(){
//             var paris=function(){
//                 console.log(myfriend);
            
//             };
//             paris();
//         };
//         france();
//     }
// };
// locales.europe();

// function show(){
//     var a = "a is a local outer variable";
//     document.write(a+"<br>");
//      function disk(){
//         var b ="b is a local inner variable";
//         document.write(b+"<br>");
//      }
//      disk();
// }
// show();

// var myvar="gloabal";
// function check(){
//     var myvar = "local";
//     document.write(myvar);
    
// }

// var a =10;
// function functionA(){
//     console.log("start function A");
//     function functionB(){
//         console.log("in function B");

//     }
//     functionB();
// }
// functionA();
// console.log("global content ");

// var name1 = "john";
// function first(){
//     var a = "hello";
//     second();
//     var x= a + name1;
// }
// function second(){
//     var b = "hi";
//     third();
//     var z = b +  name1;
// }
// function third(){
//     var c = "hey";
//     var z= c+ name1 ;
// }
// first();

// var a= 5;
// function add(){
//     var b = 15;
//     console.log(a+b)

// function mul(){
//     var c=48;
//     console.log(b*c);
// }
// mul();
// }
// add();

// var age = prompt();
// if(age>18){
//     document.write("<b>you are eligible");
// }
 
// var grade= prompt();
// document.write("entering the block");
// switch(grade){
//     case "a":document.write("good job");
//      break;
//     case "b" :document.write("good not so good ");
//      break;
//     case "c" :document.write("ok ok ");
//      break;
//     default: document.write("unknown grade");

// }

//  var i;
//  for(i=0;i<3;i=i+1){
//     console.log(i)
//  }


// var count;
//     documnet.write("strating loop" + "<br>");
//     for(count = 0 ;count<10;count++){
//         document.write("current count : "+count);
//         document.write("</br>");
//     }
// document.write("loop stopped");
 
// function validateForm()
// {
//     var y = document.forms["myForm"]["call"].value 
//     if (y.length!=10 ){
//         alert ("enter 10 digit mobile number ");
//         return false;

//     }
//     if(!y.match ( /^[0-9]{10}$/)){
//         alert ("only digits please ");
//         return false;
//     }
// }
    // function validateForm(){
    //     var x=document.forms["myForm"]["fname"].value;
    //     if(x==null || x==""){
    //       alert("first name must be filled out");
    //       return false;
    //     }
    //   }

    // function validateForm(){
    //   var x  =document.forms["myFrom"]["email"].value;
    //   var atpos = x.indexOf("@")
    //   var dotpos  =  x.lastIndexOf(".");
    //   if (atpos <1 || dotpos<atpos +2 || dotpos+2>=x.length){
    //     alert("not valid email");
    //     return false;
    //   }
    // }
