import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { hello: () => "Hi! I'm Oliver."}

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));