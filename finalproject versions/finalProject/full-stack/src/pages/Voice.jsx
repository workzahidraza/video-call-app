import { useState } from "react";

function Voice() {

  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const startVoice = async () => {

    const res = await fetch("http://localhost:5000/voice");

    const result = await res.json();

    setText(result.text);
    setData(result.data);
  };

  return (

    <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">

      <h1 className="text-3xl text-green-400">
        Voice Recognition
      </h1>

      <button
        onClick={startVoice}
        className="bg-green-500 px-6 py-3 rounded"
      >
        🎤 Start Speaking
      </button>

      {text && (
        <div className="bg-gray-800 p-4 rounded w-80">

          <p>Text: {text}</p>

          {data && (
            <>
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
              <p>Weight: {data.weight}</p>
            </>
          )}

        </div>
      )}

    </div>
  );
}

export default Voice;