//je cote server
import express from "express";
import Twig from "twig";

const app = express();

app.use(express.static('public/assets'));
// let pokemons = ['Pikachu', 'Charmender', 'Bulbasaur'];
let pokemons = [
    {
        id: 1,
        name: 'Pikachu',
        type: 'Electric'
    },
    {
        id: 2,
        name: 'Charmender',
        type: 'Fire'
    },
    {
        id: 3,
        name: 'Squirtle',
        type: 'Water'
    },
]
app.get('/', (req, res) => {
    res.render('home.html.twig', {
        name: "Yahia",
        data: pokemons
    });
})

app.listen(8080, () => {
    console.log('Server up and running');
})