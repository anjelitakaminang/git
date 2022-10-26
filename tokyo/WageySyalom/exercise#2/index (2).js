let person = [
    {
        name: "Jhon",
        age: 35,
    },
    {
        name: "Bill",
        age: 23,
    },
    {
        name: "Bob",
        age: 17,
    },
    {
        name: "Jack",
        age: 20,
    },
];
let current = 0;
for (i = 0; i < person.length; i++) {
    if (person[i].age > current) {
        current = person[i].age;
    }
}
console.log(current);

let current2 = 10;
for (i = 0; i < person.length; i++) {
    if (person[i].age < current2) {
        current2 = person[1].age;
    }
}
console.log(current2);
/* Buatlah program yang menampilkan siapakah yang memiliki umur paling tua dan umur paling muda */