const authors = [{
    id: 31,
    name: 'Jane Smith',
    age: 50,
    books: ['Storm', 'Tumor']
},{
    id: 15,
    name: 'Sam Smith',
    age: 55,
    books: ['Lamp', 'Lol']
},{
    id: 12,
    name: 'Stephen King',
    age: 55,
    books: ['The green mile', 'Carrie']
}];

const resolvers = {
    Query: {
        authors: () => {
            return authors
        },
        author: (root, {id}) => {
            return authors.find(author => author.id === id)
        }
    }
}

export default resolvers;