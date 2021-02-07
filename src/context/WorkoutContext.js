import createDataContext from "./createDataContext";

const workoutReducer = (state, action) => {
  switch (action.type) {
    case "add_workout":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          date: action.payload.date,
          distance: action.payload.distance,
        },
      ];
  }
};

const addWorkout = (dispatch) => {
  return (date, distance, data, callback) => {
    dispatch({ type: "add_workout", payload: { date, distance, data } });
  };
};

export const { Context, Provider } = createDataContext(
  workoutReducer,
  { addWorkout },
  [{ date: "1/1/2020", distance: "100 meters", data: "blah" }]
);
