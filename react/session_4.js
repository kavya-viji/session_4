//call,apply,bind
var obj = 
{
    name:"kavya",
};
function getName(a,b)
{
    //console.log(this);
    console.log(this.name,a,b);
}
//getName.call(obj);
//getName.call(obj);
//getName.apply(obj);
getName.call(obj,2,3);
getName.apply(obj,[22,33]);
var fun=getName.bind(obj,222,333);
fun();

//ES6 features
// function main()
// {
//     var a = 1
//     if(a===1)
//     {
//         let b=2;
//         console.log(a+b);
//     }
//     console.log(a+b);
// }
// main();

//template literals
var x = 5;
var str = "678";
//console.log(x+str);
console.log(`${x}${str}`);


