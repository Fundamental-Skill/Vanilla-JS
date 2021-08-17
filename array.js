const nama = ["komang", "made", "ketut"]

console.log(nama)

// Akes array
// console.log(nama[1])

// Untuk mengetahui jumlah arraynya
// console.log("Jumlah " + nama.length)

// Pengulangan
// nama.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

// // Penamban di Array
nama.push("dewi")
// nama.push("ketut")
// console.log(nama)

// Menghapus nilai array dari belakang
nama.pop()
// console.log(nama)

// Mehaopus nilai array dari depan
nama.shift()
// console.log(nama)

// Menambahkan nilai array dari awal
nama.unshift("bella")
// console.log(nama)

// Mencari index didalam suatau item
// cari = nama.indexOf("ketut") + 1
// console.log(cari)

// Menhapus item berdasarkan index
// hapus = nama.indexOf('ketut')
// console.log(nama.splice(hapus, 1))
// console.log(nama)

// Menduplikat sebuah Array
console.log(nama)
copyNama = nama.slice()
console.log(copyNama)
nama.pop()
console.log(nama)