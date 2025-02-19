// Rastgele renk oluşturma fonksiyonu
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Kutu oluşturma fonksiyonu
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  // Mevcut kutuları temizle
  boxesContainer.innerHTML = '';

  let boxSize = 30; // İlk kutunun boyutu

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.marginBottom = "10px";
    boxesContainer.appendChild(newBox);
    boxSize += 10; // Sonraki kutular bir öncekinden 10px daha büyük olacak
  }
}

// Kutu koleksiyonunu temizleme fonksiyonu
function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ''; // Tüm kutuları temizle
}

// Create butonuna tıklama işlemi
document.querySelector('[data-create]').addEventListener('click', () => {
  const inputField = document.querySelector('input');
  const amount = parseInt(inputField.value, 10); // Sayıyı al ve tam sayıya çevir
  
  // Eğer sayı geçerliyse kutuları oluştur
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  inputField.value = ''; // Inputu temizle
});

// Destroy butonuna tıklama işlemi
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
