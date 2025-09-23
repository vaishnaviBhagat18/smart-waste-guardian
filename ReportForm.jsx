import React, { useState } from "react";

function ReportForm({ activeTab }) {
  const [reportType, setReportType] = useState("littering");
  const [reportDetails, setReportDetails] = useState("");
  const [reportLocation, setReportLocation] = useState("");

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (reportDetails && reportLocation) {
      alert("Report submitted successfully! Our team will address this issue.");
      setReportDetails("");
      setReportLocation("");
      setReportType("littering");
    }
  };

  if (activeTab !== "report") return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Report an Issue</h2>

      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
        <form onSubmit={handleReportSubmit} className="space-y-4">
          {/* Issue Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Issue Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full p-2 border border-border rounded-md"
            >
              <option value="littering">Littering</option>
              <option value="illegal-dumping">Illegal Dumping</option>
              <option value="pollution">Pollution</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={reportLocation}
              onChange={(e) => setReportLocation(e.target.value)}
              placeholder="Beach name or address"
              className="w-full p-2 border border-border rounded-md"
              required
            />
          </div>

          {/* Details */}
          <div>
            <label className="block text-sm font-medium mb-1">Details</label>
            <textarea
              value={reportDetails}
              onChange={(e) => setReportDetails(e.target.value)}
              placeholder="Describe the issue in detail..."
              rows={4}
              className="w-full p-2 border border-border rounded-md"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
