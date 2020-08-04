import React, { useContext } from "react";

import seat from "../assets/seat-available.svg";
import { BookingContext } from "./BookingContext";

const Seat = ({
  state,
  seatId,
  rowIndex,
  seatIndex,
  width,
  height,
  price,
  status,
}) => {
  const {
    actions: { handleBookingProcess },
  } = useContext(BookingContext);
  if (state.seats[seatId].isBooked === true) {
    return (
      <button disabled={status}>
        <img
          alt="unavailable seat"
          src={seat}
          style={{ filter: "grayscale(100%)" }}
        />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          console.log("clicked");
          handleBookingProcess(rowIndex, seatIndex, price);
        }}
        disabled={status}
      >
        <img alt="available seat" src={seat} />
      </button>
    );
  }
};

export default Seat;
