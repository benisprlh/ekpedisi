import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = async () => {
    try {
      const response = await axios.get("http://localhost:3000/packages");
      setPackages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/packages/${id}`);
      fetchPackage();
    } catch (error) {
      console.error("Error deleting karyawan:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Daftar Package</h1>
      <Link to={`/create`} className="btn btn-primary m-3">
        Create
      </Link>
      <Link to={`/create`} className="btn btn-primary m-3">
        Reports
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Pengirim</th>
              <th scope="col">Alamat Pengirim</th>
              <th scope="col">Penerima</th>
              <th scope="col">Alamat Penerima</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((isPackage) => (
              <tr key={isPackage.id}>
                <td>{isPackage.sender}</td>
                <td>{isPackage.senderAddress}</td>
                <td>{isPackage.recipient}</td>
                <td>{isPackage.recipientAddress}</td>
                <td>{isPackage.status}</td>
                <td>
                  <Link
                    to={`/update/${isPackage.id}`}
                    className="btn btn-sm btn-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(isPackage.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
