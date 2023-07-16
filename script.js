// Arama işlemi için gerekli olan API URL'si
const apiUrl = 'https://api.itbook.store/1.0/new';

function searchBooks() {
  const searchTerm = document.getElementById('search-input').value;

  fetch(`${apiUrl}/${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      displayBooks(data.books);
    })
    .catch(error => {
      console.error('Arama işlemi başarısız:', error);
    });
}

function displayBooks(books) {

    const resultsDiv = document.getElementById('search-results');

  resultsDiv.innerHTML = '';

  books.forEach(book => {
    const title = book.title;
    const author = book.author;
    const image = book.image;

    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `
      <img src="${image}" alt="${title}"><br>
      <strong>Title:</strong> ${title}<br>
      <strong>Author:</strong> ${author}<br><br>
    `;

    resultsDiv.appendChild(bookDiv);
  });
}
