console.log("hello");
console.log("this is amulya");
console.log("computer science");


var age=10;
var age= 20;//can be redeclared can be updated

console.log(age);

add=age+5;
console.log(add);

let a=10;
 a=20;
 console.log(a);//cannot be redeclared can be updated 

 const pi=2.14;
 //pi=123;
 console.log(pi);//error const cannot be reassinged or updated
console.table([age,a,pi]);

 const product={
    name:"personalbar",
    price:23,
    rating:5

 }

 let value=null;

 console.log(product);
 console.log(product.name);
 //console.log(product[price]);//error
 console.log(product["rating"]);

 console.log(typeof age);
 console.log(typeof product);
 console.log(typeof value);//typeof null is object
 console.log(typeof product.name);
 