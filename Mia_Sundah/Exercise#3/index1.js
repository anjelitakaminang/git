let person = [
    {
        name: "John",
        age: 35
    },
    {
        name:"Bill",
        age:23
    },
    {
        name:"Bob",
        age: 17
    },
    {
        name:"Jack",
        age: 20
    },
];
let terkecil = [
    {
        name: "Bob",
        age: 20
    },
];
let terbesar = [
    {
        name: "John",
        age: 30
    },
];

for(let i=0; i<person.length; i++){
    if(person[i].age < terkecil[0].age){
        terkecil[0] = person[i];
    }
    
}
console.log("Termuda =",terkecil[0].name);

for(let i=0; i<person.length; i++){
    if(person[i].age > terbesar[0].age){
        terbesar[0] = person[i];
    }
    
}
console.log("Tertua =",terbesar[0].name);