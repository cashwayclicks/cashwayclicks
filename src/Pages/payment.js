import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import payment from "../Assets/payment.jpg";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function Payment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    
    navigate("/");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={payment} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Gpay for Secure and Fast </span>
        </h3>
        <p className="ba-description">
        Explore the advantages of choosing our core trainings for your personal and professional growth. 
        Benefit from expert guidance, convenience, and customized solutions tailored to enhance your skills and career. 
        Join us on a transformative journey towards achieving your goals and building a successful future.
        </p>
        <h3 className="ba-title">
          <span>4 STEPS : </span>
        </h3>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> scan and pay the mentioned amount in gpay App.
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> send the screenshot to @cashwayclicks instagram id with your name.
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> you will recieve the notification of the confirmed slot in 15 mins.
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> you will be joined to the specified batch ✔️
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Done Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;
