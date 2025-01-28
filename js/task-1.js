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
