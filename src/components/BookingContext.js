import React, { useReducer } from "react";

export const BookingContext = React.createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "BEGIN-BOOKING-PROCESS": {
      console.log("booking process begins");
      return { ...state };
    }
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const handleBookingProcess = (rowIndex, seatIndex, price) => {
    console.log("hello");
    dispatch({
      type: "BEGIN-BOOKING-PROCESS",
      payload: { rowIndex, seatIndex, price },
    });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        actions: { handleBookingProcess },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
