"use client";

import { useState } from "react";

export default function Home() {
  const [deviation, setDeviation] = useState("");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

  const generateReport = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/generate-investigation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviation: deviation,
        }),
      });

      const data = await response.json();

      setReport(data.report);
    } catch (error) {
      console.error(error);
      alert("Error generating report");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Pharma Investigation AI
        </h1>

        <textarea
          className="w-full border p-4 rounded-lg h-40"
          placeholder="Enter deviation details..."
          value={deviation}
          onChange={(e) => setDeviation(e.target.value)}
        />

        <button
          onClick={generateReport}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Investigation Report"}
        </button>

        {report && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              AI Generated Report
            </h2>

            <div className="bg-gray-50 border p-6 rounded-lg whitespace-pre-wrap">
              {report}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}