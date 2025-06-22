import * as dao from './dao.js';

export default function CommentRoutes(app) {
  app.get("/api/comments/:movieId", async (req, res) => {
    const { movieId } = req.params;
    const comments = await dao.getAllCommentsForMovie(movieId);
    res.json(comments);
  });

  app.post("/api/comments", async (req, res) => {
    const comment = req.body;
    const newComment = await dao.addComment(comment);
    res.json(newComment);
  });

  app.delete("/api/comments/:commentId", async (req, res) => {
    const { commentId } = req.params;
    await dao.deleteComment(commentId);
  });

  app.get("/api/favorites/:movieId/:userId", async (req, res) => {
    const { movieId, userId } = req.params;
    const favorite = await dao.getFavorite(movieId, userId);
    res.json(favorite);
  });

  app.post("/api/favorites", async (req, res) => {
    const favorite = req.body;
    const newFavorite = await dao.addFavorite(favorite);
    res.json(newFavorite);
  });

  app.delete("/api/favorites/:movieId/:userId", async (req, res) => {
    const { movieId, userId } = req.params;
    await dao.deleteFavorite(movieId, userId);
  });
}