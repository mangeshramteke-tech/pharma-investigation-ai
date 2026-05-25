export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Pharma Investigation Copilot
        </h1>

        <div className="grid gap-6">

          <input
            type="text"
            placeholder="Incident Title"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Batch Number"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Equipment Involved"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Findings"
            className="border p-3 rounded-lg h-32"
          />

          <textarea
            placeholder="Immediate Actions"
            className="border p-3 rounded-lg h-32"
          />

          <textarea
            placeholder="Probable Root Cause"
            className="border p-3 rounded-lg h-32"
          />

          <button className="bg-black text-white p-4 rounded-lg text-lg">
            Generate Investigation Report
          </button>

        </div>
      </div>
    </main>
  );
}