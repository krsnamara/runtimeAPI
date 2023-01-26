// Dependencies
const express = require('express');
const indexRouter = express.Router();
const Index = require('../models/index.js');

// Routes //

// Index INDEX ROUTE
indexRouter.get("/", async (req, res) => {
    try {
        // send all people
        res.json(await Index.find({}));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Index CREATE ROUTE
indexRouter.post("/", async (req, res) => {
    try {
        // send all people
        res.json(await Index.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Index DELETE ROUTE
indexRouter.delete("/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Index.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Index UPDATE ROUTE
indexRouter.put("/:id", async (req, res) => {
    try {
        //send all people
        res.json(
            await Index.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


// Export Index Router
module.exports = indexRouter;