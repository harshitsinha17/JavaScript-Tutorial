//function declaration/definition

walk(); //invoking a method before an defincition/declarartion of function is valid

/*
This is because of hoisting which moves all the function declaration to the top of file by javascript engine
*/

function walk(){
    console.log("walking");
}


//function expression
let move = function(){
    console.log("moving");

};
move();

let run = move;
run();




//Rest operator 
// your code goes here


function sum(a,b){
	return a+b;
}

console.log(sum(2,4) );
console.log(sum(2,4,7,5,1,4,6) ); //only takes first 2 args

function sum_arguments(){
	let total = 0;
	for( let value of arguments){
		total+=value;
	}
	return total;
}

console.log(sum_arguments(2,10) ); //as many arguments

function sum_restOperator(...prices){
	let total = prices.reduce( ( (accumulator, currentValue)=>{return accumulator+currentValue} ),0 );
	return total;
}

console.log( (sum_restOperator(3,7,9,1,4)) );



//Defalt args

function interest(principal, rate, years =100){ // starting from last argument, default value can be given
    return principal*rate*years/100;
}
console.log(interest(10000,4));



//Getters and setters
let person={
    firstname:"harshit",
    lastName:"sinha",
    get fullName(){
        return this.firstname +" "+this.lastName;
    },
    set fullName(value){
        const parts = value.split(" ");
        this.firstname = parts[0];
        this.lastName =parts[1];
    },
    walking(){
        console.log("Walking "+this.fullName);
    }
}

console.log(person.fullName);
person.fullName = "Rakesh Sinha";
console.log(person);
person.walking();


//Exception handling

function division(a,b){
    if(b == 0){
        throw new Error("Divisoon by zero");
    }
    return a/b;
}

try{
    console.log("On division "+division(9,5) );

}
catch(e){
    console.log(e);
}

//Var  vs Let
//Var has function scope while let has block scope
//var attaches to window object whoch is not safe and is discoutraged while let is not attached to windo object
//when we define the function as above as in these files, they also attachjes to window object so better to create modules.


// These type of func definition also attaches to window obj as discussed above
function start(){ 
    for (let i=0;i<5;i++){
        console.log(i);

        var word = "Hello";
        console.log(word+" "+i); //accessible i and word
    }

    console.log("Outside block "+word); //still accessible
    //console.log(i); //not accessible
}
start();


//Use of this keyword

/*
In object methods : it refrence to object invoking that function
In normal func : it refrence to window objec which is global 
In func callbacks : It references window objects (of => is not used else it refrences object that is intented for)
*/

let harshit= {
    name:"harsh",
    walk(){
        console.log(this.name+" is walking"); //refernce to name of harshit obj
    }
};


function running(){
    console.log(this.name+" is running"); //finds name of window obj which is not "Harsh"

}

harshit.walk();
running();


//Not using arraows but func callbacks

harshit={
    name: "harshit",
    tags:[1,2,4,7],
    iter(){
        this.tags.forEach(
            function(tag){
                console.log(this, tag);
            }
        );
    }
};

/*
harshit={
    name: "harshit",
    tags:[1,2,4,7],
    iter(){
        this.tags.forEach(
            function(tag){
                console.log(this, tag);
            }
        , this);
    }
};
*/

harshit.iter();


//Using arrows
harshit={
    name: "harshit",
    tags:[1,2,4,7],
    iter(){
        this.tags.forEach(element => {
            console.log(this, element);
        });
    }
};

harshit.iter();

function Video(title){
    this.title = title;
}


// this in constructors also reference to object whoch is initially empty {} but title as a field is added to it.
let vid = new Video("Mission impossible");
console.log(vid.title);


//More details about this

function beating(x,y){
    console.log (this);

}


//All refrencing the object passed
beating.call({name:"Virat"},1,3);
beating.apply({name:"rohit"}, [1,5]);
let beatingFuncReference = beating.bind({name:"Rishabh"});
beatingFuncReference();


beating(); //Using window object

































