// Concat = menggabungkan 2 atau lebih string
let bagian1 = "Justin Lovers  "
let bagian2 = "Baby baby baby ooooo"
let bagian  = bagian1.concat(" : ", bagian2)
console.log(bagian)

    //selain concat, bisa pakai "+"
    bagian3 = "It Ends" + " " + "With Us"
    bagian4 = "It Ends".concat(" ", "With Us")
    console.log(bagian3)
    console.log(bagian4)

//Includes = returns true jika string berisi nilai yang ditentukan/diinginkan
let bagian5 = "Hai Sayang, welcome to Justin Lovers."
bagian5.includes("Sayang")
console.log(bagian5)

//Length = retuns panjang dari suatu string
let bagian6  = "Hai sayang, so makang?"
let length = bagian6.length
console.log(length)

//Split = string dapat dikonversi ke array 
let bagian10    = "Ayang kenapa? hm";
const myArray = bagian10.split(" ");
console.log(myArray)

//Slice = slice yang di minta bisa mengembalikan bagian yang diekstraksi dalam string baru
let bagian11 = "pelangi-pelangi alangkah indahnya"
let part   = bagian11.slice(2, 5)
console.log(part)

//Substring = sama seperti slice, tapi substring nilai awal dan akhir kurang dari 0 diperlakukan sebagai 0
let bagian12 = "pelangi-pelangi alangkah indahnya"
let part2  = bagian12.substring(3, 5)
console.log(part2)

//toLowerCase = string yang dikonversi menjadi huruf kecil
let bagian7 = "PerGi mAlaM PuLanG pagI"
let lwr   = bagian7.toLowerCase()
console.log(lwr)

//toUpperCase = string yang dikonversi menjadi huruf besar
let uppr = bagian7.toUpperCase()
console.log(uppr)

//Trim = menghapus spasi dari kedua sisi string
let bagian8 = "      Love You      "
let trmm  = bagian8.trim()
console.log(trmm)

//ValueOf = mengembalikan nilai primitif dari sebuah string
let bagian9  = "u hurt me babe"
let result = bagian9.valueOf()
console.log(result)