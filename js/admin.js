$(document).ready(function () {
  // Check if user is already logged in
  var username = localStorage.getItem("username");

  // Redirect to index.html if username is undefined
  if (username == null) {
    window.location = "/login.html";
    return false;
  }

  if (username != "admin") {
    window.location = "/index.html";
    return false;
  }
});

function addBook() {
  var name = $("#name").val();
  var author = $("#author").val();
  var genre = $("#genre").val();
  var price = $("#price").val();
  var image = $("#image").val();

  if (name == "" || author == "" || genre == "" || price == "" || image == "") {
    alert("Please fill all the fields");
    return false;
  }

  var book = {
    name: name,
    author: author,
    genre: genre,
    price: price,
    image: image,
  };

  var books = localStorage.getItem("books");
  if (books == undefined) {
    books = [];
  } else {
    // Convert string to list of objects
    books = JSON.parse(books);
  }

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));

  alert("Book added successfully");

  location.reload();
}
