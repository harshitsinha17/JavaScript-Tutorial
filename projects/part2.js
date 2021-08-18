//Functions are objects
function Circle(radius){
    this.radius=radius,
    this.draw=function(){
        console.log("functions are objects");


    }
}
/*
const circle1 = Circle.call({},1);
const circle2 = Circle.apply({},[1]);
console.log(circle1.radius);
console.log(circle2.radius);
*/

const Circle1 = new Function('radius',`
{
    this.radius=radius,
    this.draw=function(){
        console.log("functions are objects-inside custom definition");
    }


    
}
`);

const circle = new Circle1(1);
circle.draw();

//Primitives are call by value and objects are call by reference


let person ={
    name:"harshit",
    age:24
}

for(let key in person){
    console.log(key+" "+person[key]);

}

for(let entry of Object.keys(person)){
    console.log("Using keys "+person[entry]);
}

for(let entry of Object.entries(person)){
    console.log("Using entries "+entry);
}


//Cloning of objects

const another = Object.assign({}, person);

const anotherPerson = {...person};
console.log(anotherPerson);





