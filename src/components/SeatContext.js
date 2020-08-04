import React, { useReducer } from "react";

export const SeatContext = React.createContext();

const initialState = {
  hasLoaded: false,
  seats: null,
  bookedSeats: null,
  numOfRows: 0,
  seatsPerRow: 0,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "RECEIVE-SEAT-INFO-FROM-SERVER": {
      return {
        ...state,
        bookedSeats: action.bookedSeats,
        seats: action.seats,
        numOfRows: action.numOfRows,
        seatsPerRow: action.seatsPerRow,
        hasLoaded: true,
      };
    }
  }
};

export const SeatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveSeatInfoFromServer = (data) => {
    dispatch({ type: "RECEIVE-SEAT-INFO-FROM-SERVER", ...data });
  };

  return (
    <SeatContext.Provider
      value={{
        state,
        actions: {
          receiveSeatInfoFromServer,
        },
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};
