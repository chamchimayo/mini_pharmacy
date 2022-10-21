const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const pharmsRouter = require("./pharms");
const reviewsRouter = require("./reviews");
const likesRouter = require("./likes");

router.use("/users", usersRouter);
router.use("/pharmacy", pharmsRouter);
router.use("/reviews", reviewsRouter);
router.use("/likes", likesRouter);

module.exports = router;
