import React, { useState } from "react";
import { Title } from "./styles";

export default function App() {
  const [response, setResponse] = useState("");

  async function callApi() {
    const response = await fetch("http://localhost:8000/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body.express;
  }

  return (
    <>
      <Title>Mds {response}</Title>
      <button
        onClick={() => {
          callApi().then(res => setResponse(res));
        }}
      >
        Click me
      </button>
    </>
  );
}
