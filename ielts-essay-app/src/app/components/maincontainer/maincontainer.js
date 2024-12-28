// components/MainContent.js
"use client";
import { useState } from "react";

export default function MainContent() {
  const [essay, setEssay] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ essay }),
    });
    const result = await response.json();
    alert(`Evaluation Score: ${result.score}`);
  };

  return (
    <div className="main">
      <textarea
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        placeholder="Paste your essay here..."
      ></textarea>
      <button onClick={handleSubmit}>Evaluate</button>
      <style jsx>{`
        .main {
          padding: 20px;
          flex: 1;
        }
        textarea {
          width: 100%;
          height: 200px;
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          background: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}