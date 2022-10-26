let person = 
[
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
let terkecil = 
[
    {
        name: "natal",
        age: 30
    },
];

let terbesar = 
[
    {
        name: "natal2",
        age: 31
    },
];

let max = person[2];
for (let i = 0;i < person.length; i++)
{
    if (person[i].age > max.age)
    {
        max = person [i];
    }
}

console.log ('umur tertua :');
console.log (max);

let min = person[2];
for (let i = 0; i < person.length;i++)
{
    if (person[i].age < min.age)
    {
        min = person [i];
    }
}
console.log('umur termuda :');
console.log(min);