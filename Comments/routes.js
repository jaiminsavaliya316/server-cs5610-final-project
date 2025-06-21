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
}