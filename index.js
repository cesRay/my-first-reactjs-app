import express from 'express'

//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

// resolver
const root = {cliente: () => {
    return {
        "id" : 68641987198419,
        "nombre" : "Cesar",
        "apellido": "Rayas",
        "empresa": "Udemy", 
        "email": "cesar.rayas.c@gmail.com"
    }
}};

app.use('/graphql', graphqlHTTP({
    // que schema va a utilizar
    schema, 
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => console.log('El servidor esta funcionando') );