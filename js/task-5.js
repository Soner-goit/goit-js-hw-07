function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const button = document.querySelector('.change-color');
  const spanColor = document.querySelector('.color');

  button.addEventListener('click', function() {
    const newColor = getRandomHexColor(); // Yeni renk al
    document.body.style.backgroundColor = newColor; // <body> arka planını yeni renk ile değiştir
    spanColor.textContent = newColor; // span.color içine renk bilgisini yazdır
  });