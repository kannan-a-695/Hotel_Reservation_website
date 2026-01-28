import React from "react";
import "./Contact.css";

export const Contactus = () => {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-card">
          <p>
            <strong>Website:</strong><br />
            www.rajahotel.com
          </p>

          <p>
            <strong>Email:</strong><br />
            rajahotel@gmail.com
          </p>

          <p>
            <strong>Landline:</strong><br />
            044-9025-9655
          </p>

          <p>
            <strong>Mobile:</strong><br />
            7023456789
          </p>
        </div>
      </div>
    </div>
  );
};


