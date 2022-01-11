import express from "express";
import Messenger from "../models/messengerModel.js";
import Joi from "joi";
const router = express.Router();

// const schemaMessenger = Joi.object({
//   id: number().integer(),
//   author: string().min(3).max(255).required(),
//   text: string().min(3).required(),
// });

router.get("/", async (req, res) => {
  try {
    const messenger = await Messenger.getAll();
    res.json(messenger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
