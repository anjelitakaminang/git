// Syalom Gabriela Wagey
// Front-End Development-C
// Exercise #1

//  Concatenate
//  Metode yang digunakan untuk menggabungkan dua atau lebih string dan array dalam javascript
// let nama = "Wagey, Syalom";
// let nama1 = " Gabriela";
// let nama2 = nama.concat(nama1);
// console.log(nama2);

    //string concatenation
    //menggunakan string operator
// let name = "Wagey";
// let name1 = "Syalom";

// console.log(name + " " + name1);

//  include
//  menemukan array yang diinginkan dan akan mengembalikan nilai true jika ada
// let greetings = "halo, nama saya Syalom";
// let salam = greetings.includes("Syalom");
// console.log(salam);

//  length
//  untuk menghitung jumlah karakter yang ada.
//  biasanya digunakan pada formating text.
// let makan = "buah apel";
// jumlah = makan.length
// console.log(jumlah);

//split
//membagi string menjadi array substring & mengembalikan array baru tanpa mengubah array asli
// let varNama = "Syalom Wagey";
// let hasil = varNama.split("")
// console.log(hasil);

//slice
//menyalin sebagian array ke array baru, ditentukan menggunakan index
// let bunga = ["Mawar" , "Melati", "Tulip", "Dahlia"];
// let flower = bunga.slice(-2);
// console.log(flower);
//(-2) berarti nilai yang diinput diambil dari 2 paling akhir
// let angka = ["Satu" , "Dua", "Tiga", "Empat"];
// let number = angka.slice(1, 3);
// console.log(number);
//nilai yang ditampilkan diambil dari index 1 dan sebelum index 3

//substring
//mengambil bagian tertentu dari sebuah string
// let str = "Hai, my name is jhon dhoe!";
// let res = str.substring(8, 30);
// console.log(res);

//toLowerCase
//mengubah nilai string menjadi huruf kecil
// let umur = "TUJUH BELAS TAHUN";
// console.log(umur.toLowerCase());

//toUpperCase
//mengubah nilai string menjadi huruf besar
// let usia = "tujuh belas tahun";
// console.log(usia.toUpperCase());

//trim
//remove whitespace from both end of a string and return a newstring
//without modifying the original string.
// let hobi = "  Membaca buku  ";
// console.log(hobi);
// console.log(hobi.trim());

//valueof
//returns the primitive value of the specified object
// let kalimat = "saya suka menonton film";
// console.log(kalimat.valueOf());