var setValue;
var obj = {};
Object.defineProperty(obj, "objProperty", {
 get: function(){
 return "a value";
 },
 set: function(value){
 setValue = value;
 }
});
console.log(obj.objProperty);
obj.objProperty = "new value";
console.log(setValue);