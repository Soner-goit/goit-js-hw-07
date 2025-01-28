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
