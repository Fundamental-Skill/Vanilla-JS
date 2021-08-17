const nama = ["komang", "made", "ketut"]

console.log(nama)

// console.log("nama ke - " + nama.length)

// console.log(nama[1])

// Pengulangan
nama.forEach(function(item, index, array){
    console.log(item, index, array)
})

// Penamban di Array
nama.push("dewi")
console.log(nama)
