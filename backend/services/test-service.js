const { Configuration, OpenAIApi } = require("openai");
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI,
  })
);

const requirements =
  "Create a detailed roadmap that takes the user from beginner to advanced. Provide an outline with modules, items and one project idea for each model, including real links to external resources for each item. Return the roadmap in JSON format, simulating a response to a GET request.";
module.exports.Testing = async (prompt) => {
  try {
    const promptText = `prompt:${prompt}\nrequirement:${requirements}`;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: promptText,
      temperature: 0,
      max_tokens: 1456,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const content = [response.data.choices[0].text.trim()];
    const cleanedArray = JSON.parse(content[0]);
    return cleanedArray;
  } catch (error) {
    throw new Error(error.message);
  }
};
