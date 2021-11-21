const router = require("express").Router();

// The `/api/home` endpoint

router.get("/", async (req, res) => {
  try {
    // const homeData = await Category.findAll();
    await res.status(200).json("You're home!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
