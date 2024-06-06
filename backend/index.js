import express from "express";
import { errorHandler } from "./Middleware/ErrorHandler.js";
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

app.get("/pokemon/Leaderboard/", async (req, res, next) => {
  console.log("endpoint hit");
  try {
    const winner = await Leaderboard.find({});
    console.log(winner);
    res.json(winner);
  } catch (error) {
    next(error);
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

app.post("/pokemon/savewinner/", async (req, res, next) => {
  console.log(req.body);
  try {
    const dbResponse = await Leaderboard.create({
      name: req.body.name.english,
      score: 10,
      image: "",
    });
    console.log(dbResponse);
  } catch (error) {
    next(error);
  }
});

app.put("/pokemon/savewinner/:name", async (req, res, next) => {
  console.log("Put request");
  try {
    const found = await Leaderboard.findOne({ name: req.params.name });
    if (!found) {
      console.log("not found");
    } else {
      console.log(found.score);
      const score = found.score + 10;
      const updateEntry = await Leaderboard.findByIdAndUpdate(found._id, {
        score: score,
      });

      res.status(201).json(updateEntry);
    }
  } catch (error) {
    next(error);
  }
});

app.get("/pokemon/Winner/:name", async (req, res) => {
  // Compare Winner
  // console.log(req.params.name);
  const winner = await Leaderboard.findOne({ name: req.params.name });
  console.log(`Winner is foun? ${winner}`);
  console.log(winner);
  res.json(winner);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
