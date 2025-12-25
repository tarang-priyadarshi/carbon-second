import React, { useState, useEffect } from "react";
import CarbonInputForm from "../components/carbon/CarbonInputForm";
import CarbonSummary from "../components/carbon/CarbonSummary";
import { saveCarbonEntries, getCarbonEntries } from "../services/api";
import { toast } from "react-toastify";

const CarbonTracker = () => {
  const [entries, setEntries] = useState({});
  const [savedData, setSavedData] = useState([]);

  const handleSave = async () => {
    try {
      const response = await saveCarbonEntries(entries);
      toast.success("Entries saved successfully!");
      setSavedData(response.data);
    } catch (err) {
      toast.error("Failed to save entries");
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCarbonEntries();
        setSavedData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <h2>Daily Carbon Footprint Tracker</h2>
      <CarbonInputForm entries={entries} setEntries={setEntries} />
      <button className="btn btn-success mt-3" onClick={handleSave}>
        Save Entries
      </button>
      <hr />
      <h3>Your Carbon Emission Pie Chart</h3>
      <CarbonSummary data={savedData} />
    </div>
  );
};

export default CarbonTracker;
