const { Configuration, OpenAIApi } = require("openai");
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI,
  })
);

const requirements =
  "You are a helpful assistant that creates courses to take the user from begginner to advanced level with modules and detailed items";

module.exports.Testing = async (prompt) => {
  try {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
        {
          role: "system",
          content: requirements,
        },
      ],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error(error.message);
  }
};
