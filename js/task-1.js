<<<<<<< HEAD
function isEnoughCapacity(products, containerSize) {
  // Ürünlerin toplam miktarını hesapla
  const totalProducts = Object.values(products).reduce((sum, amount) => sum + amount, 0);

  // Toplam miktar konteyner kapasitesine eşit veya küçükse true, aksi halde false döndür
  return totalProducts <= containerSize;
}

// Fonksiyonu test etmek için verilen örnek kodlar
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
=======
function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
>>>>>>> ba6dfe691beca21ea0f3381ffb877d113ab180fe
