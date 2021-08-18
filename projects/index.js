console.log("Hy !! This is my first javascript code");
let name='Jay';
let isApproved=false;
let number = 3;
let undefindVariable= undefined;
let nullVariable= null;
console.log("he");

let person={
    name:'harshit',
    age:24
};

console.log(person);

//Arrays
let colors = ['red','green'];
colors[2] = 'magenta';
console.log(colors.reverse);

//functions
function sayMessage(message, greeting){
    console.log(message+greeting);
    return true;
}

let functionExecuted = sayMessage("this is a function", "Good morning");
console.log(functionExecuted);


//while loop
let i = 1;
while(i<=4){
    console.log("hey ",i);
    i++;
}

//for in loop
let personNew={
    name:"harshit",
    age:24
};

for(key in personNew){
    console.log(key, personNew['key']);
}

colors = ["red","green", "purple"];
for(let i in colors){
    console.log(colors[i]);
}



for(let color of colors){
    console.log(color);
}


//Objects
let circle={
    radius : 2,
    location:{
        x:1,
        y:2
    },
    draw:function(){
        console.log("This is a circle");
    }
        
};

circle.draw();



function createCircle(radius){
let circle={
    radius:radius,
    draw(){
        console.log("Hey, Its a circle inside a function "+radius);
    }
}
return circle;

}

let newCircle = createCircle(3);
console.log(newCircle);
newCircle.draw();



//Constructor

function Circle(radius){
    this.radius = radius,
    this.draw=function(){
        console.log("hey its a draw "+radius);
    }
}
const circle_new = new Circle(2);
console.log(circle_new);
circle_new.draw();



//Dynamic nature of objects
const shape={
    radius:1
}
shape.circumfrence = 6;
shape.draw=function(){
    console.log("Showing dynamic nature of objects");
}
shape.draw();




