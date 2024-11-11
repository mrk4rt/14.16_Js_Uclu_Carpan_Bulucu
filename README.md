# Üçlü Çarpan Bulucu

## Proje Amacı
Bu projede, kullanıcının girdiği bir sayı aralığında, 3, 5 ve 7'ye tam bölünebilen sayıları bulmayı amaçlıyoruz. Bu program, kullanıcıdan alınan bir sayı ile 1'den bu sayıya kadar olan tüm sayılar arasında hem 3’e, hem 5’e hem de 7’ye tam bölünebilen sayıları ekrana yazdırır.

## Değişkenler
- `sayi`: Kullanıcıdan alınan pozitif bir tam sayı. Bu değer, döngünün sınırını belirler.
- `i`: Döngüde 1'den başlayarak `sayi` değişkenine kadar artan ve her bir sayıyı kontrol eden sayaç.

## Anahtar Kelimeler
- `for` döngüsü: 1'den `sayi` değerine kadar olan sayıları sırayla kontrol etmek için kullanılır.
- `if` ifadesi: Sayının 3’e, 5’e ve 7’ye tam bölünüp bölünmediğini kontrol eder.

## Proje Adımları

1. **Kullanıcıdan Girdi Alma**  
   Kullanıcıdan pozitif bir tam sayı girmesi istenir. Bu sayı, döngüde sınır olarak kullanılacaktır.

2. **Döngü Oluşturma**  
   1’den `sayi` değerine kadar olan sayıları sırayla inceleyen bir `for` döngüsü başlatılır.

3. **Üçlü Çarpan Kontrolü**  
   Döngü içindeki her sayı için `if` ifadesiyle 3, 5 ve 7'ye tam bölünüp bölünmediği kontrol edilir. Sayı bu üç şarta da uyuyorsa ekrana yazdırılır.

4. **Sonuçları Gösterme**  
   Döngü sona erdiğinde tüm üçlü çarpanlar ekranda gösterilmiş olur.

## Örnek Çıktı

Bir sayı girin: 200
1 ile 200 arasındaki hem 3, 5 ve 7’ye tam bölünebilen sayılar:
105
