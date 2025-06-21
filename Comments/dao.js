import model from "./model.js";

export function getAllCommentsForMovie(movieId) {
  // get the comments for the movie in order of oldest to newest
  return model.find({ movieId: movieId }).sort({ timestamp: -1 });
}

export function addComment(comment) {
  return model.create(comment);
}