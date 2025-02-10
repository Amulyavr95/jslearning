//to number conversion

let someValue="undefined"

console.log(typeof someValue);
let newSomeValue = Number(someValue)
console.log(typeof newSomeValue);
console.log(newSomeValue);


// "33"=> 33
// "33abc","hello"=>NaN
// "",null=>0
// undefined=> NaN
//true=1,false=0

//to boolean conversion

let isBollean=""
console.log(typeof isBollean);
let isNewBoolean= Boolean(isBollean)
console.log(typeof isNewBoolean);
console.log(isNewBoolean);


//33=> true
//"abc"=>true
//""=>false
//0=>false,1=>true

//to String conversion

let isString=true
console.log(typeof isString);
let isNewString= String(isString)
console.log(typeof isNewString);
console.log(isNewString);

//33=> 33
//true=> true