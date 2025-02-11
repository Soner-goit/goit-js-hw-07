class Storage {
  #items; // Özel (private) değişken

  constructor(initialItems) {
    this.#items = initialItems; // Başlangıç öğelerini ata
  }

  getItems() {
    return this.#items; // Öğeleri döndür
  }

  addItem(newItem) {
    this.#items.push(newItem); // Yeni öğeyi ekle
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove); // Öğeyi çıkar
  }
}

// Sınıfı test etme
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
