const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const pharmacyRouter = require("./pharmacy");
const reviewsRouter = require("./reviews");
const likesRouter = require("./likes");

router.use("/users", usersRouter);
router.use("/pharmacyList", pharmacyRouter);
router.use("/reviews", reviewsRouter);
router.use("/likes", likesRouter);

module.exports = router;
