console.log("Sundah, Mia");
console.log("JavaScript String Exercise");

// Concat = menggabungkan 2 atau lebih string
let text1 = "Selamat pagi  "
let text2 = "Selamat malam"
let text  = text1.concat(" : ", text2)
console.log(text)
//selain concat, bisa juga pakai "+"
text3 = "Selamat" + " " + "Malam"
text4 = "Selamat".concat(" ", "Malam")
console.log(text3)
 console.log(text4)

//Includes = Metode include mengembalikan nilai true jika string berisi string tertentu.
let text5 = "Hai Mia, welcome to Home."
text5.includes("Mia")
console.log(text5)

//Length = retuns panjang dari suatu string
let text6  = "Mel apa kabar?"
let length = text6.length
console.log(length)

//Split = string dapat dikonversi ke array 
let text7    = "Satu dua tiga empat lima";
const myArray = text7.split(" ");
console.log(myArray)

//Slice = Metode slice mengembalikan bagian yang diekstraksi dalam string baru.
let text8 = "Dia, Batu, Jendela"
let part   = text8.slice(0)
console.log(part)

//Substring = sama seperti slice, tapi substring nilai awal dan akhir kurang dari 0 diperlakukan sebagai 0
let text9 = "Dia, Batu, Jendela"
let part2  = text9.substring(7-12)
console.log(part2)

//toLowerCase = ToLocaleLowerCase mengonversi string menjadi huruf kecil, menggunakan lokal saat ini.
let text10 = "Hai gOod NighT"
let lwr   = text10.toLowerCase()
console.log(lwr)

//toUpperCase = toUpperCase mengonversi string menjadi huruf besar.
let uppr = text10.toUpperCase()
console.log(uppr)

//Trim = menghapus spasi dari kedua sisi string
let text11 = "      BTS          One Direction     "
let trmm  = text11.trim()
console.log(trmm)

//ValueOf = mengembalikan nilai primitif dari sebuah string
let text12  = "Terima Kasih"
let result = text12.valueOf()
console.log(result)