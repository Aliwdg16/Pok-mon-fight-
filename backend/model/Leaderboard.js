import mongoose from "mongoose";

const leaderBoardSchema = new mongoose.Schema({
  name: String,
  score: Number,
  image: String,
});

const Leaderboard = mongoose.model("leaderboard", leaderBoardSchema);

export default Leaderboard;
