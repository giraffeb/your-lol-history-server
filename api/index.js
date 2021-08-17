const router = require("express").Router();

const matchRouter = require("./match");

router.use("/match", matchRouter);

module.exports = router;