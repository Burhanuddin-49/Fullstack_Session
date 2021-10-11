const table = document.querySelector("table");
console.log(table);

const reponse = fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      let newrow = document.createElement("tr");
      let element = `
      <th>${user.id}</th>
      <th>${user.name}</th>
      <th>${user.email}</th>
      <th>${user.username}</th>`;
      newrow.innerHTML = element;
      table.append(newrow);
    });
  });
