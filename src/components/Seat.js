import React from "react";

import seat from "../assets/seat-available.svg";

const Seat = ({ state, seatId }) => {
  if (state.seats[seatId].isBooked === true) {
    return (
      <img
        alt="available seat"
        src={seat}
        style={{ filter: "grayscale(100%)" }}
      />
    );
  } else {
    return <img alt="available seat" src={seat} />;
  }
};

export default Seat;
