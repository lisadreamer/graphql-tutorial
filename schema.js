import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `type Author {
    id: String
    age: Int
    name: String
    books: [String]
}
type Query {
    authors: [Author] 
    author(id: Int): Author
}
type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]!): Author
}`;

const schema = makeExecutableSchema({typeDefs, resolvers});

// fills with fake data
//addMockFunctionsToSchema({schema}); 

export default schema;