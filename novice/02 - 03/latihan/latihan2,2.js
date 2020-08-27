const Stronger = "KHAIRUN arkham ohh good boy";

// toLowerCase: mengonversi string menjadi huruf kecil semua
// trim: menghapus spasi dari kedua ujung string
// splitdan join: mengganti semua contoh pertandingan dengan penggantian dalam string yang diberikan
const slugify = string => string.toLowerCase()
.trim().split(" ").join("-");

console.log(slugify(Stronger));