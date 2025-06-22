// import model from "./model.js";
import interactionsModel from "../Profiles/InteractionsModel.js";
// import UsersModel from "../User.js";
import { v4 as uuidv4 } from 'uuid';

export function getAllCommentsForMovie(movieId) {
  // get the comments for the movie in order of oldest to newest
  return interactionsModel.find({ movie_id: movieId, type: "comment" }).sort({ timestamp: -1 }).populate('user_id');
};

export function addComment(comment) {
  const newComment = { ...comment, _id: uuidv4() };
  return interactionsModel.create(newComment);
};

export function deleteComment(commentId) {
  return interactionsModel.deleteOne({ _id: commentId });
};

export function getFavorite(movieId, userId) {
  return interactionsModel.findOne({ movie_id: movieId, user_id: userId, type: "favorite" });
};

export function addFavorite(favorite) {
  const newFavorite = { ...favorite, _id: uuidv4() };
  return interactionsModel.create(newFavorite);
};

export function deleteFavorite(movieId, userId) {
  return interactionsModel.deleteOne({ movie_id: movieId, user_id: userId, type: "favorite" });
}