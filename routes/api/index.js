const router = require("express").Router();
const home = require("./home");

router.use("/home", home);

module.exports = router;
