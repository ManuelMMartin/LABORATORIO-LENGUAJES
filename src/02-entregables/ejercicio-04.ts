console.log("************** DELIVERABLE 04 *********************");

function isBookRead(books: { title: string; isRead: boolean; }[], titleToSearch: string) {
  let leido = false
  for (const libro of books) {
    if (libro.title === titleToSearch) leido = libro.isRead
  }
  return leido
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false