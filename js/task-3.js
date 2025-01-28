<<<<<<< HEAD
const profile = {
  username: "Jacob",
  playTime: 300,

  // Kullanıcı adını değiştiren metod
  changeUsername(newName) {
    this.username = newName;
  },

  // Oyun süresini güncelleyen metod
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Kullanıcı bilgilerini döndüren metod
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Test kodu
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
=======
function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

function filterArray(numbers, value) {
  return numbers.filter(number => number > value);
}
>>>>>>> ba6dfe691beca21ea0f3381ffb877d113ab180fe
