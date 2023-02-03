import React, { useState } from "react";
import './Details.scss'
import Data from '../Data/details.json'
import MoreDetails from "../MoreDetails/MoreDetails";

const Details = () => {
    const [showDetails, setShowDetails] = useState({});
  
    const renderData = (details) => {
      return (
        <div className="images-container">
          {details.map((port, id) => {
            return (
              <div className="image-box" key={id}>
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    ID: {port.id}
                    <br />
                    Username: {port.username}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Name: {port.name}
                    </li>
                    <li className="list-group-item">
                      Email: {port.email}
                    </li>
                    <li className="list-group-item">
                      Contact: {port.phone}
                    </li>
                  </ul>
                  <div className="card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={() =>
                        setShowDetails({
                          ...showDetails,
                          [id]: !showDetails[id]
                        })
                      }
                    >
                      {showDetails[id] ? "Hide Details" : "View Details"}
                    </button>
                    {showDetails[id] && <MoreDetails port={port} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  
    return (
      <>
        <h1 className="page-title text-center mb-3">Information</h1>
        <div>{renderData(Data)}</div>
      </>
    );
  };
export default Details