const express = require("express");
const {  ambilDataId, tambahNote, ambilNote, rubahNote, hapusNote } = require("../../controller/notesController");

const notesRouter = express();

notesRouter.post("/notes", tambahNote);
notesRouter.get("/notes", ambilNote);
notesRouter.get("/notes/:id", ambilDataId);
notesRouter.put("/notes/:id", rubahNote);
notesRouter.delete("/notes/:id", hapusNote);

module.exports = notesRouter;