import React from "react";
import './MoreDetails.scss'

const MoreDetails = ({ port }) => {
  return (
    <>
      <div className="more-details-container">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Address: 
              <br />
              <span className="address-header">Street:</span> {port.address.street}
            </li>
            <li className="list-group-item">
              <span className="address-header">Suite:</span> {port.address.suite}
            </li>
            <li className="list-group-item">
              <span className="address-header">City:</span> {port.address.city}
            </li>
            <li className="list-group-item">
              <span className="address-header">Zipcode:</span> {port.address.zipcode}
            </li>
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Geo 
              <br /> 
              <span className="geo-header">lat:</span> {port.address.geo.lat}
            </li>
            <li className="list-group-item">
              <span className="geo-header">lan:</span> {port.address.geo.lng}
            </li>
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="website-header">Website:</span> {port.website}
            </li>
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Company: 
              <br /> 
              <span className="company-header">Name:</span> {port.company.name}
            </li>
            <li className="list-group-item">
              <span className="company-header">Catch Phrase:</span> {port.company.catchPhrase}
            </li>
            <li className="list-group-item">
              <span className="company-header">BS:</span> {port.company.bs}
            </li>
          </ul>
        </div>
      </div >
    </>
  );
};
export default MoreDetails;
