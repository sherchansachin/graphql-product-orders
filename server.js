// import express
const express = require('express');
// function to create a schema using graphql schema language (type systems)
const { buildSchema } = require('graphql');
const { ApolloServer } = require('apollo-server-express');

const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// load all .graphql files from the folder and store here
// const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql')); (old method replaced as)

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
  });

// load all resolvers
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

// start apollo server
async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    });
    
    const server = new ApolloServer({
        schema
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    // callback function executes as we're listening on port 3000, graphql server running
    app.listen(3000, ()=>{
        console.log("Running graphql server");
    })
}
    
startApolloServer();






// use template string here -> for multiple lines

// contains a collection of types 


 // graphql type system supports unique identifiers (ids) -> ID
        // might want to query a product with this id or may want to cache our product based on this unique value
        // so use ID

// const schema = buildSchema(`
//     input requestID {
//         id: ID
//     }

//     type Query{
//         products: [Product]
//         orders: [Order]
//     }

//     type Product{       
//         id: ID!
//         description: String!
//         price: Float!
//         reviews: [Review]
//     }

//     type Review{
//         rating: Int!
//         comment: String
//     }

//     type Order{
//         date: String!
//         subtotal: Float!
//         items: [OrderItem]
//     }

//     type OrderItem {
//         product: Product!
//         quantity: Int!
//     }
// `)

// const rootValue = {
//     products: require('./products/products.model'),
//     orders: require('./orders/orders.model'),
    
// }

const app = express();


// graphql middleware that sets up our graphql server
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: rootValue,s
//     graphiql: true,
// }))





// Schema
// resolvers
//  query:    Products(input: productInput) : [Product] ,  match return,    filter redshoes and return redshoes
  