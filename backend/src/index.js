const express = require("express")
const cors= require("cors")

const connect = require("./configs/db")

const userController = require("./controllers/user.controller");
const jobController =require("./controllers/job.controller")
const applicationController= require("./controllers/application.controller")
const { register, login } = require("./controllers/auth.controller")

const app = express()

const dotenv = require("dotenv")

dotenv.config()

app.use(cors())
app.use(express.json());

app.use("/users", userController);
app.use("/jobs", jobController)
app.use("/applications", applicationController)


app.post("/register", register);

app.post("/login", login);


const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error);
  }
});