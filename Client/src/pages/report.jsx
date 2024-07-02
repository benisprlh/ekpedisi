import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Report = () => {
  const [packages, setPackages] = useState([]);
  const [sortOrder, setSortOrder] = useState("createdAt");
  const [expeditions, setExpeditions] = useState([]);
  const [filterExpedition, setFilterExpedition] = useState("");

  useEffect(() => {
    fetchPackages();
  }, [sortOrder, filterExpedition]);

  useEffect(() => {
    fetchExpeditions();
  }, []);

  const fetchExpeditions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ekspeditions");
      setExpeditions(response.data);
    } catch (error) {
      console.error("Error fetching expeditions:", error);
    }
  };

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/packages/reports?sort=${sortOrder}&filter=${filterExpedition}`,
        {}
      );
      console.log(response.data);
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "createdAt" ? "-createdAt" : "createdAt");
  };

  const handleFilter = (e) => {
    setFilterExpedition(e.target.value);
  };

  return (
    <div className="container-fluid mt-4">
      <h1 className="mb-4">Report</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to={`/`} className="btn btn-primary">
          Back
        </Link>
        <div className="d-flex">
          <button className="btn btn-secondary mr-2" onClick={handleSort}>
            Sort by Date {sortOrder === "createdAt" ? "↓" : "↑"}
          </button>
          <select
            className="form-control"
            onChange={handleFilter}
            value={filterExpedition}
          >
            <option value="">Filter by Ekspedisi</option>
            {expeditions &&
              expeditions.map((expedition) => (
                <option key={expedition.id} value={expedition.id}>
                  {expedition.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="card-group w-100">
          {packages.map((isPackage) => (
            <div className="col-md-4 mb-4" key={isPackage.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Package ID: {isPackage.id}</h5>
                  <p className="card-text">
                    <strong>Pengirim:</strong> {isPackage.sender}
                  </p>
                  <p className="card-text">
                    <strong>Alamat Pengirim:</strong> {isPackage.senderAddress}
                  </p>
                  <p className="card-text">
                    <strong>Penerima:</strong> {isPackage.recipient}
                  </p>
                  <p className="card-text">
                    <strong>Alamat Penerima:</strong>{" "}
                    {isPackage.recipientAddress}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {isPackage.status}
                  </p>
                  <p className="card-text">
                    <strong>Ekspedisi:</strong> {isPackage.Ekspedition.name}
                  </p>
                </div>
                <div className="card-footer">
                  <p className="card-text">
                    <strong>Created At:</strong>{" "}
                    {new Date(isPackage.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
