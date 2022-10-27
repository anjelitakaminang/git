// Concat = menggabungkan 2 atau lebih string
let bagian1 = "Jimin"
let bagian2 = "Lachimolala"
let bagian = bagian1.concat(" : ", bagian2)
console.log(bagian)

//selain concat, bisa pakai "+"
bagian3 = "It Ends" + " " + "With Us"
bagian4 = "It Ends".concat(" ", "With Us")
console.log(bagian3)
console.log(bagian4)

//Includes = returns true jika string berisi nilai yang ditentukan/diinginkan
let bagian5 = "I Purple You"
bagian5.includes("Purple")
console.log(bagian5)

//Length = retuns panjang dari suatu string
let bagian6 = "My husband is Park Jimin"
let length = bagian6.length
console.log(length)

//Split = string dapat dikonversi ke array 
let bagian10 = "Annyeong yeobo?";
const myArray = bagian10.split(" ");
let words = myArray[1];

//Slice = slice yang diminta bisa mengembalikan bagian yang diekstraksi dalam string baru
let bagian11 = "I know you wish it was me. Don't you?"
let part = bagian11.slice(2, 5)
console.log(part)

//Substring = sama seperti slice, tapi substring nilai awal dan akhir kurang dari 0 diperlakukan sebagai 0
let bagian12 = "You're my best friend for the rest of my life!"
let part2 = bagian12.substring(3, 5)
console.log(part2)

//toLowerCase = string yang dikonversi menjadi huruf kecil
let bagian7 = "YoonGi MaRRy mE!!!"
let lwr = bagian7.toLowerCase()
console.log(lwr)

//toUpperCase = string yang dikonversi menjadi huruf besar
let uppr = bagian7.toUpperCase()
console.log(uppr)

//Trim = menghapus spasi dari kedua sisi string
let bagian8 = "      Army Love Bangtan      "
let trmm  = bagian8.trim()
console.log(trmm)

//ValueOf = mengembalikan nilai primitif dari sebuah string
let bagian9  = "rm jin suga jhope jimin v jk"
let result = bagian9.valueOf()
console.log(result)