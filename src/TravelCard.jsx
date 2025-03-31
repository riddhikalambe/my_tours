import React from "react";
import { travelData } from "./data";

 

const TravelCard = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {travelData.map((destination) => (
          <div key={destination.id} className="col-md-4 mb-4">
            <div className="card shadow-lg" style={{ width: "22rem", borderRadius: "10px" }}>
              <img
                src={destination.image}
                className="card-img-top"
                alt={destination.title}
                style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="card-title">{destination.title}</h4>
                <p className="card-text">{destination.description}</p>
                <div className="mb-2">
                  <span className="text-warning">{destination.rating}</span>
                </div>
                <p className="mb-2">
                  <strong>Price:</strong> <span className="fw-bold">${destination.price}</span>
                </p>
                <button className="btn btn-warning fw-bold">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCard;
