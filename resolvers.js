// const authors = [{
//     id: 31,
//     name: 'Jane Smith',
//     age: 50,
//     books: ['Storm', 'Tumor']
// },{
//     id: 15,
//     name: 'Sam Smith',
//     age: 55,
//     books: ['Lamp', 'Lol']
// },{
//     id: 12,
//     name: 'Stephen King',
//     age: 55,
//     books: ['The green mile', 'Carrie']
// }];

import mongoose from 'mongoose';
import authorModel from './models/author'

const resolvers = {
    Query: {
        authors: () => {
            //return authors
        },
        author: (root, {id}) => {
            //return authors.find(author => author.id === id)
        }
    },
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({age: age, name: name, books: books})
            return author.save();
        }
    }
}

export default resolvers;