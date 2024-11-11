let sayi = prompt("Pozitif bir sayı girin:");
let sonuc = [];

for (let i = 1; i <= sayi; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    sonuc.push(i); // Bulunan üçlü çarpanları diziye ekliyoruz
  }
}

console.log(
  "1 ile " + sayi + " arasındaki hem 3, 5 ve 7'ye tam bölünebilen sayılar:"
);
console.log(sonuc); // Tüm üçlü çarpanları yazdırıyoruz

alert(
  "1 ile " +
    sayi +
    " arasındaki hem 3, 5 ve 7’ye tam bölünebilen sayılar:\n\n\n" +
    sonuc
);
