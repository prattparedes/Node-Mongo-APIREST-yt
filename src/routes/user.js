const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
