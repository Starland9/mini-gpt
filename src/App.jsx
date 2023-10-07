import { useState } from "react";
import "./App.css";
import ChatBlocResponse from "./components/ChatBlocResponse";

function App() {
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    const message = document.querySelector("input").value;
    setMessages([
      ...messages,
      <ChatBlocResponse message={message} key={message.charCodeAt(0)} />,
    ]);
    document.querySelector("input").value = "";
  }

  return (
    <>
      <div className=" flex flex-col min-h-screen justify-between  p-5 gap-5 xl:px-96">
        <div className=" text-3xl font-bold text-center">Mini GPT</div>
        <div className="flex flex-col flex-1 h-full w-full bg-zinc-700 rounded p-5 gap-3">
          {messages}
        </div>
        <div className=" flex">
          <input
            type="text"
            name=""
            id=""
            className=" w-full rounded-md px-4 py-2"
          />

          <button
            type="submit"
            onClick={sendMessage}
            className=" rounded-md px-4 py-2"
          >
            Envoyer
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
