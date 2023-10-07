import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getCompletion from "../services/huggingFace";

/**
 * Create a new ChatBloc component.
 *
 * @param {String} message - The message to display in the component.
 * @return {ReactElement} The rendered ChatBloc component.
 */
function ChatBlocResponse({ message }) {
  const [response, setResponse] = useState(message);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompletion({ inputs: message })
      .then((r) => {
        console.log(r);
        setResponse(r[0].generated_text);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(setLoading(false));
  }, [message]);

  return (
    <>
      <div className="rounded-md bg-zinc-900 px-4 py-2">
        {loading ? "Chargement..." : response}
      </div>
    </>
  );
}

ChatBlocResponse.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChatBlocResponse;
