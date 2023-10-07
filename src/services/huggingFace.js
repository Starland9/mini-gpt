async function getCompletion(data) {
  try {
    const response = await fetch(
      // "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1",
      "https://api-inference.huggingface.co/models/gpt2",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getCompletion;
