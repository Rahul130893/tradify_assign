const express = require("express")

const Job = require("../models/job.model")

const router = express.Router()


// getting all the jobs 
router.get("", async (req, res) => {
  try {
    const jobs = await Job.find().lean().exec();

    return res.status(200).send({ jobs: jobs }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//getting particular job by its id 
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).lean().exec();
    return res.status(200).send(job);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//posting a job
router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(200).send(job);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//deleting a job
router.delete("/:id", async (req, res) => {
  try {
    const item = await Job.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports= router