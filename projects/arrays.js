//Arrays
let numbers = [1,2,3];
numbers.push(1,5);

numbers.unshift(7,8);
console.log(numbers);


numbers.splice(1,0,10,11);
console.log(numbers);


numbers.reverse();
console.log(numbers);


//Finding elemnt
console.log (numbers.indexOf(1,3) );
console.log( numbers.lastIndexOf(3) );
console.log( numbers.includes(3) );

let person =[
    {
        name:"harsh",
        age:24
    },
    {
        name:"harshit",
        age:27
    }
];

let result = person.find(
    function(persons){
        if(persons.age == 24){
            return true;
        }
        return false;
    }
);

console.log(result);

result = person.findIndex(
    function(persons){
        if(persons.age == 24){
            return true;
        }
        return false;
    }
);

result = person.find((person)=>person.age==24);
console.log(result);;




//Empty an array

numbers = [] //if there is no reference to this array anywhere else like another = number otherwise another would still point to orginal number array
numbers.length = 0; //Most appropriate

numbers.splice(0, numbers.length);

console.log(numbers);



//Combining and slicing array
let first = [1,2,{id:3}];
let second = [3,4,5];

//objects are copied by reference so if previous changes then combined also changes
first[2].id = 7;
let combined = first.concat(second);
console.log(combined);

combined = combined.slice(2,5);
console.log(combined);

//spread operator
combined = [...first,'sh',...second];
console.log(combined);

//iterating array
for(let number in combined){
    console.log(number);
}
first.forEach(function(number){
    console.log(number)
});

second.forEach( (number,index)=>  console.log(number, index) );


//Splitting and Joining arrays

let message = "Hi this is Harshit";
let parts  = message.split(' ');

console.log(parts);

combined = parts.join("-");
console.log(combined);


//Sorting an array


second = [17,4,10];
second.sort();
console.log(second);

first = [{id:1, name:"java"}, {id:2, name:"Go"}];
first.sort( (x,y)=>{

    //comparing uppercase with lowercase char may result in wrong answer so doing the below
    let constA = x.name.toUpperCase();
    let constB = y.name.toUpperCase();
    
    
    if(constA > constB){
        return 1;
    }
    if(constA < constB){
        return -1;
    }
    return 0;
} );
console.log(first);



//every and some

first = [1,2,3];
second = [1,-2,3];

let ifAllPositive = first.every(value=>{return value>=0} );
console.log(ifAllPositive);

first.every(function(value){
    if (value>=0){
        return true;
    }
    else{
        return false;
    }
});

console.log(ifAllPositive);

let ifSomenegative = first.some(value=>value<=0);
console.log(ifSomenegative);


ifSomenegative = second.some(value=>value<=0);
console.log(ifSomenegative);


//filtering


let secondPositive = second.filter(function(value){
    if(value >0){
        return true;
    }
    return false;
});

console.log(secondPositive);



//mapping
first = [4,2,3];
second = first.map(n=>n**2);
console.log("After mapping "+second);

//mapping to ojects and chaoining
second = first.map(n=>( {value:n+2} ));
console.log("After mapping to objects ");
console.log(second);

second= first.filter(n=>n%2==0).map(n=>( {value:n+9} )).filter(n=>( (n.value) %2) == 1);;
console.log("after chaoining");
console.log(second);


//reducing array
second = first.reduce((accumulator, currentValue)=>accumulator+currentValue, 0);
console.log("After reducing" +second);




























































































































































































































































































































































































































































































































































































































































































































































































































































































