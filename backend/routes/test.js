const { Testing } = require("../services/test-service");
module.exports = (app) => {
  app.post("/test", async (req, res) => {
    try {
      const result = await Testing("create a react course");
      console.log(result)
      res.json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
