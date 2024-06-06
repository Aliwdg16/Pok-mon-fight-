import mongoose from "mongoose";

const leaderBoardSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  score: Number,
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
  pokemonID: {
    type: Number,
    unique: true,
  },
});

const Leaderboard = mongoose.model("leaderboard", leaderBoardSchema);

export default Leaderboard;
