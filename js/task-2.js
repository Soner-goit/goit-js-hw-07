function formatMessage(message, maxLength) {
  // Eğer mesaj uzunluğu maxLength'e eşit veya daha kısa ise mesajı olduğu gibi döndür
  if (message.length <= maxLength) {
      return message;
  } else {
      // Mesajı kısalt ve sonuna "..." ekle
      return message.slice(0, maxLength) + "...";
  }
}

// Testler
console.log(formatMessage("Curabitur ligula sapien", 16));  // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23));  // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20));  // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30));  // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));  // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));  // "Nunc sed turpis a felis in nunc fringilla"
