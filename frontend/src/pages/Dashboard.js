import { useNavigate } from "react-router-dom";
import "../styles/theme.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <h2 className="mb-4">Welcome to Ecotrackify 🌱</h2>

      <div className="row g-4">

        {/* Carbon Calculator Card */}
        <div className="col-md-4">
          <div
            className="card dashboard-card"
            onClick={() => navigate("/carbon-tracker")}
          >
            <div className="card-body">
              <h5 className="card-title">Carbon Footprint</h5>
              <p className="card-text">
                Calculate and track your carbon emissions.
              </p>
              <button className="btn btn-success">
                Calculate Now →
              </button>
            </div>
          </div>
        </div>

        {/* Future cards */}
        <div className="col-md-4">
          <div className="card dashboard-card opacity-50">
            <div className="card-body">
              <h5>Community Tips</h5>
              <p>Coming soon</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
