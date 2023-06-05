const { Testing } = require("../services/test-service");

module.exports = (app) => {
  app.post("/test/:topic", async (req, res) => {
    try {
      const result = await Testing(req.params.topic);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
