import React from "react";

const CarbonInputForm = ({ entries, setEntries }) => {
  const emissionFactors = {
    electricity: 0.82, // kg CO2e/kWh
    petrol: 2.31,
    diesel: 2.68,
    flightShort: 0.09,
    flightLong: 0.15,
    lpg: 2.98,
    beef: 27,
    chicken: 6.9,
    rice: 4.0,
    vegetables: 2.0,
    waste: 1.0
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntries({
      ...entries,
      [name]: value ? parseFloat(value) : 0
    });
  };

  return (
    <form className="carbon-form">
      <div className="form-group">
        <label>Electricity (kWh per day): {entries.electricity || 0}</label>
        <input
          type="range"
          min="0"
          max="50"
          step="0.1"
          className="form-range"
          name="electricity"
          value={entries.electricity || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Transport - Petrol (litres per day): {entries.petrol || 0}</label>
        <input
          type="range"
          min="0"
          max="20"
          step="0.1"
          className="form-range"
          name="petrol"
          value={entries.petrol || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Transport - Diesel (litres per day): {entries.diesel || 0}</label>
        <input
          type="range"
          min="0"
          max="20"
          step="0.1"
          className="form-range"
          name="diesel"
          value={entries.diesel || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Flights - Short Haul (km per day): {entries.flightShort || 0}</label>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          className="form-range"
          name="flightShort"
          value={entries.flightShort || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Flights - Long Haul (km per day): {entries.flightLong || 0}</label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="form-range"
          name="flightLong"
          value={entries.flightLong || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>LPG (kg per day): {entries.lpg || 0}</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          className="form-range"
          name="lpg"
          value={entries.lpg || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Food (kg per day)</label>
        <label>Beef: {entries.beef || 0}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="form-range"
          name="beef"
          value={entries.beef || 0}
          onChange={handleChange}
        />
        <label>Chicken: {entries.chicken || 0}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="form-range"
          name="chicken"
          value={entries.chicken || 0}
          onChange={handleChange}
        />
        <label>Rice: {entries.rice || 0}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="form-range"
          name="rice"
          value={entries.rice || 0}
          onChange={handleChange}
        />
        <label>Vegetables: {entries.vegetables || 0}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          className="form-range"
          name="vegetables"
          value={entries.vegetables || 0}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Waste (kg per day): {entries.waste || 0}</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          className="form-range"
          name="waste"
          value={entries.waste || 0}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CarbonInputForm;
