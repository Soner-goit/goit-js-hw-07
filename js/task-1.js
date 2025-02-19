// 1. Kategorilerin toplam sayısını bul
const categoriesList = document.querySelector("#categories"); // <ul id="categories"> seçildi
const categoryItems = categoriesList.querySelectorAll(".item"); // <li class="item"> öğelerini al

console.log(`Number of categories: ${categoryItems.length}`);

// 2. Her kategorinin başlığını ve içindeki öğe sayısını bul
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent; // <h2> başlığını al
  const categoryElements = item.querySelectorAll("ul li").length; // İçindeki <li> sayısını al
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
