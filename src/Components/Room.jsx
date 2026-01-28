import React from "react";
import "./Room.css";

export const Room = () => {
  return (
    <div className="room-page">
      <div className="room-overlay">
        <h1 className="room-title">Rooms</h1>

        <div className="room-cards">
          <div className="room-card">
            <h2>AC Room</h2>
            <p>
              Our AC rooms provide maximum comfort with air conditioning,
              clean interiors, and modern facilities for a relaxing stay.
            </p>
          </div>

          <div className="room-card">
            <h2>Non-AC Room</h2>
            <p>
              Our Non-AC rooms are affordable, well-ventilated, and ideal
              for guests looking for a comfortable budget stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
