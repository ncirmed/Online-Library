var books = [];

$(document).ready(function () {
  // Check if user is already logged in
  var username = localStorage.getItem("username");

  // Redirect to index.html if username is undefined
  if (username == null) {
    window.location = "/login.html";
    return false;
  }

  // Set username in navbar
  $("#username").text(username);

  // Load books from local storage
  books = localStorage.getItem("books");

  // Check if books is not undefined
  if (books != undefined) {
    // JSON.parse() converts string to object
    books = JSON.parse(books);
  } else {
    books = [];
  }
  // Load books
  loadBooks(books);
});

function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function filter(arr, callback) {
  var filtered = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    if (callback(item)) {
      filtered.push(item);
    }
  }

  return filtered;
}

function logout() {
  localStorage.removeItem("username");
  window.location = "/login.html";
}

function searchBook() {
  var genre = $("#search").val();

  if (genre == "") {
    loadBooks(books);
    return true;
  }

  var bookList = filter(books, function (book) {
    return book.name.toLowerCase().includes(genre.toLowerCase());
  });

  loadBooks(bookList);
}

function loadBooks(books) {
  var tableBody = $("#table-body");

  // Clear table body
  tableBody.empty();

  each(books, function (book) {
    var row = `<tr>
      <td style="width:100px"><img src="${book.image}" width="100px" /></td>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.price}</td>
    </tr>`;
    tableBody.append(row);
  });
}

function add() {}
