import express from 'express'
import cors from 'cors'
import { pokedata } from './data/pokedata.js';

const app =express();
const PORT=8000;

app.use(cors());
app.use(express.json());



app.get("/pokemon", async (req, res) => {
    if (pokedata) {
      res.status(200).json(pokedata);
    } else {
      res.status(404).send();
    }
  });


app.get("/pokemon/:id", async (req, res) => {
    const id = req.params.id;
  
    let foundPokemon = [];
    pokedata.map((pokemon) => {
      if (pokemon.id == id) {
        foundPokemon.push(pokemon);
      }
    });
    if (foundPokemon.length > 0) {
      res.status(200).json(foundPokemon);
    } else {
      res.status(404).json({ message: "No Pokemon found" });
    }
  });



app.listen(PORT,()=> console.log(`Server is running on http://localhost:${PORT}`))