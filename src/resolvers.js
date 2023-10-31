const persons = [
    {id: 1, name: 'Joao', age: '20', posts: [{id: 3, title: 'Testando'}]},
    {id: 2, name: 'Maria', age: '18', posts: []},
    {id: 3, name: 'Ana', age: '19', posts: []},
]

const posts = [
    {id: '1', title: 'Learning GraphQL'},
    {id: '2', title: 'Web Services'},
    {id: '3', title: 'TSI'},
    {id: '4', title: 'Programação Web'}
]






module.exports = {
    Query: {
        allPersons: () => persons,
        person: () => persons[0],
        allPosts: () => posts,
    },
    Mutation: {
        createPerson: () => persons[0],
    }
}