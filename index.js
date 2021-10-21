const express = require("express");
const app = express();
const port = 5000;

const users = [
  { id: 1, name: "jahid", email: "test@gmail.com", phone: "01794895700" },
  { id: 2, name: "jahid", email: "test@gmail.com", phone: "01794895700" },
  { id: 3, name: "rakib", email: "test@gmail.com", phone: "01794895700" },
  { id: 4, name: "fahim", email: "test@gmail.com", phone: "01794895700" },
  { id: 5, name: "jahid", email: "test@gmail.com", phone: "01794895700" },
  { id: 6, name: "jahid", email: "test@gmail.com", phone: "01794895700" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("lisiting to port ", port);
});
