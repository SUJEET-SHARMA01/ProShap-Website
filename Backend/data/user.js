import bcrypt from "bcryptjs";

const users = [
  {
    name: "Amdmi user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: true,
  },
  {
    name: "sujeet kumar",
    email: "sujeet@gmail.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: false,
  },
  {
    name: "vishwash kumar",
    email: "vishwash@gmail.com",
    password: bcrypt.hashSync("12345"),
    isAdmin: false,
  },
];

export default users;