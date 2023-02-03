console.log(name);  // undefined
//console.log(name1);   Cannot access 'name1' before initialization
//console.log(name2);   Cannot access 'name2' before initialization
var name = "sst";
let name1 = "sst1";
const name2 = "sst2";

console.log(name1);
console.log(name2);

console.log(typeof(12));
console.log(typeof name1);
console.log(typeof false);
console.log(add(1,2));
console.log(k);
var k = 300;
console.log(k);
function add(x,y){
    k = 1000;
    return x+y;
}

console.log(add(1,2));
console.log(k);


var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1