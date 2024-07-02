import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expeditions, setExpeditions] = useState([]);
  const [formData, setFormData] = useState({
    sender: "",
    senderAddress: "",
    recipient: "",
    recipientAddress: "",
    status: "Dikirim",
    EkspedisiID: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchPackage();
    fetchExpeditions();
  }, [id]);

  const fetchPackage = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/packages/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching package:", error);
    }
  };

  const fetchExpeditions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ekspeditions");
      setExpeditions(response.data);
    } catch (error) {
      console.error("Error fetching expeditions:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/packages/${id}`, formData);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h1 className="mb-4">Edit Package</h1>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="sender">Nama Pengirim</label>
              <input
                type="text"
                className="form-control"
                id="sender"
                name="sender"
                value={formData.sender}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="senderAddress">Alamat Pengirim</label>
              <input
                type="text"
                className="form-control"
                id="senderAddress"
                name="senderAddress"
                value={formData.senderAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipient">Nama Penerima</label>
              <input
                type="text"
                className="form-control"
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipientAddress">Alamat Penerima</label>
              <input
                type="text"
                className="form-control"
                id="recipientAddress"
                name="recipientAddress"
                value={formData.recipientAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                className="form-control"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Dikirim">Dikirim</option>
                <option value="Dalam Perjalanan">Dalam Perjalanan</option>
                <option value="Tiba di Tujuan">Tiba di Tujuan</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="EkspedisiID">Ekspedisi</label>
              <select
                className="form-control"
                id="EkspedisiID"
                name="EkspedisiID"
                value={formData.EkspedisiID}
                onChange={handleChange}
              >
                <option value="">Pilih Ekspedisi</option>
                {expeditions.map((expedition) => (
                  <option key={expedition.id} value={expedition.id}>
                    {expedition.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Update
            </button>
            <Link to={`/`} className="btn btn-secondary">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
