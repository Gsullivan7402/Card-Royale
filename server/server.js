// Import express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./config/connection');
const api = require('./routes/index');

// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.json());

// app.use('/api', api);

// app.get('/', (req, res) => { 
//     res.sendFile(__dirname, '../client/src');
//     console.log('Helloworld!');
// });
// console.log('hello world');


const path = require('path');
// Import the ApolloServer class
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/')));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();