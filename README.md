# graphql-tutorial

GraphQL basics
================================

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
{
  authors
}

{
  authors {
    name
    age
    books
  }
}

author(id:12) {
    name
    age
    books
  }