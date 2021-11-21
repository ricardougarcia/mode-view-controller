const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>This is the index.js route in the routes folder!</h1>");
});

module.exports = router;
