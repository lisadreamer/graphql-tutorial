# graphql-tutorial

GraphQL basics
================================
needs mongodb

Installation
------------
npm install

Run
---
npm run build

Use
---
localhost:4000/graphiql

run:

mutation{
  addAuthor(name: "Stephen King", age: 55, books: ["abc","def"]) {
    name
    age
    books
  }
}