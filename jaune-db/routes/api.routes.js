const router = require("express").Router();
const Art = require("../models/Art.model");

const fileUploader = require("../config/cloudinary");

// all domain/api/* routes

router.get("/", (req, res) => {
  res.json("All good in here");
});

router.get("/art/item/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await Art.findById(id);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/art/:technique", async (req, res, next) => {
  const { technique } = req.params;
  try {
    const response = await Art.find({ technique });
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.delete("/art/item/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await Art.deleteOne({ _id: id });
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.patch("/art/item/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const editedItem = await Art.findByIdAndUpdate(id, req.body, { new: true });
    const response = { data: editedItem, message: "The item has been succesfully edited" };
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const newItem = await Art.create(req.body);
    const response = { data: newItem, message: "A new entry has been added to the DB" };
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

router.post("/upload", fileUploader.single("url"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ fileUrl: req.file.path });
});

module.exports = router;

// res.status(400).json({ message: "Something went wrong when trying to create a new entry in the DB" });
// res.status(400).json({ message: "Couldn't edit the item with id " + id });
// res.status(400).json({ message: "Couldn't delete the item with id " + id });
// res.status(400).json({ message: "Couldn't find the item with id " + id });
