import { useState } from "react";
import getCompletion from "../services/huggingFace";

/**
 * Get Ai completion
 * @param {Object} options
 * @returns response of ai
 */
function useAiCompletion(options) {
  const [response, setResponse] = useState(options.question);
  const [loading, setLoading] = useState(false);

  setLoading(true);
  getCompletion({ inputs: response })
    .then((r) => {
      setResponse(r);
    })
    .catch((e) => {
      console.log(e);
      setResponse(e.message);
    })
    .finally(setLoading(false));

  return [loading, response];
}

export default useAiCompletion;
