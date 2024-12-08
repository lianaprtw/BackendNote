const express = require("express");
const notesRouter = require("./notesRouter/notes");

const Router = express();
const api = "/api/v1";

Router.use(api, notesRouter);

module.exports =  Router ;