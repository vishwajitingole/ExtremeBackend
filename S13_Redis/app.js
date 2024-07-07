const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json({ extended: true }));
app.set("view engine", "ejs");
mongoose
  .connect(
    "mongodb+srv://vishwajitingole22:vishwajit@memorystorage.ixhnkuu.mongodb.net/?retryWrites=true&w=majority&appName=MemoryStorage"
  )
  .then(() => console.log("DB Connected !!!"))
  .catch((err) => console.log("Error " + err));

//Redis
const { createClient } = require("redis");

const client = createClient({
  password: "ZfcdpZdT9eaGgkzyTzZjYNEhUqme9MwQ",
  socket: {
    host: "redis-10209.c9.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 10209,
  },
});
client.on("connect", () => {
  console.log("Connected to Redis");
});
client.connect();

const Profile = require("./User");

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/register", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  if (!email && !username) {
    res.status(402).send("Please Enter your email and username");
  }
  const user = await Profile.create({
    email: email,
    username: username,
  });
  res.send("User Created Successfully " + user);
});

app.get("/profile", async (req, res) => {
  const users = await Profile.find({});
  res.json({
    message: "All users",
    users,
  });
});

app.post("/profile/:id", async (req, res) => {
  const _id = req.params.id;
  const data = await client.get(`user:profile:${_id}`);

  if (data) {
    console.log("Cached data gyaa!");
    return res.json(JSON.parse(data));
  }
  console.log("db data gyaa!");

  const user = await Profile.find({ _id });
  if (!user) {
    return res.status(404).send("User not found");
  }
  //We have set data in redis here
  await client.set(`user:profile:${_id}`, JSON.stringify(user));

  //We have set data in redis here with Expiration time
  // await client.setEx(`user:profile:${_id}`, 100, JSON.stringify(user));

  //We have deleted data from redis ere
  // await client.del(`user:profile:${_id}`);

  res.send({ message: "User Found !!! ", user });
});

app.listen(3000);
