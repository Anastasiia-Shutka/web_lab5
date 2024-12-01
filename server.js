const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let movies = [];

app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.post('/api/movies', (req, res) => {
    const movie = { id: Date.now(), ...req.body };
    movies.push(movie);
    console.log(movies)
    res.status(201).json(movie);
});

app.put('/api/movies/:id', (req, res) => {
    const { id } = req.params;
    const index = movies.findIndex(movie => movie.id === Number(id));
    if (index !== -1) {
        movies[index] = { ...movies[index], ...req.body };
        res.json(movies[index]);
    } else {
        res.status(404).send("Movie not found");
    }
});

app.delete('/api/movies/:id', (req, res) => {
    const { id } = req.params;
    movies = movies.filter(movie => movie.id !== Number(id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
