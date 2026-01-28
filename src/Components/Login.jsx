import React, { useState } from "react";
import './Login.css'
export const Login=()=> {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="login">
      <h1>Login</h1>
    <div className="booking-container">
      <h3>Hotel Login</h3>

      <label>Check-In Date:</label>
      <br />
      <input
        type="date"
        value={checkIn}
        onChange={(e) => {
          setCheckIn(e.target.value);
          setCheckOut(""); 
        }}
      />

      <br /><br />

      <label>Check-Out Date:</label>
      <br />
      <input
        type="date"
        value={checkOut}
        min={checkIn}   // 👈 checkout cannot be before checkin
        onChange={(e) => setCheckOut(e.target.value)}
        disabled={!checkIn}
      />

      <br /><br />

      <p>
        <strong>Selected:</strong><br />
        Check-In: {checkIn || "-"} <br />
        Check-Out: {checkOut || "-"}
      </p>
    </div>
    </div>
  );
}



