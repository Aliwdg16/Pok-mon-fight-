import express from "express";

import "./db/server.js";
import cors from "cors";
import { pokedata } from "./data/pokedata.js";
import Leaderboard from "./model/Leaderboard.js";
// import pokeRouter from './routers/pokeRouter.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
// app.use('/pokemon', pokeRouter);

app.get("/pokemon", async (req, res) => {
  if (pokedata) {
    res.status(200).json(pokedata);
  } else {
    res.status(404).send("Sorry, cant find that");
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

app.post("/pokemon/savewinner/", async (req, res) => {
  console.log(req.body);
  try {
    const dbResponse = await Leaderboard.create({
      name: req.body.name.english,
      score: 10,
      image: "",
    });
    console.log(dbResponse);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
