let response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((book) => {
    console.log(book);
  });
