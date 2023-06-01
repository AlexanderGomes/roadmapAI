const { Testing } = require("../services/test-service");

module.exports = (app) => {
  app.post("/test", async (req, res) => {
    try {
      const result = await Testing("react");
      const cleanedArray = JSON.parse(result[0]);
      const prettyJSON = JSON.stringify(cleanedArray, null, 2);
      console.log(prettyJSON);
      res.status(200);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};
