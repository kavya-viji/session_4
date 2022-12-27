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



