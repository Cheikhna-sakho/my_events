require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
require("./controllers/passport");
const passport = require("passport");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// mongoose connnection
const connectDB = require("./config/db");

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000/",
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT || 5000, () =>
  connectDB()
    .then((data) => console.log("Server is running 🚀"))
    .catch((error) => console.log(error))
);
