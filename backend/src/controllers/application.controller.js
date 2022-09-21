const express = require("express");
const Application = require("../models/application.model");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");


router.get("", async (req, res) => {
  try {
    const applications = await Application.find().lean().exec();

    return res.status(200).send({ applications: applications }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).lean().exec();
    return res.status(200).send(application);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.status(200).send(application);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", authenticate, async (req, res) => {
    req.body.user_id= req.user._id
  try {
    const application = await Application.create(req.body);
    return res.status(200).send(application);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
