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
  [
    { date: "1/1/2020", distance: "100 meters", data: 21.68 },
    { date: "1/1/2020", distance: "100 meters", data: 20.24 },
    { date: "1/1/2020", distance: "100 meters", data: 23.01 },
    { date: "1/1/2020", distance: "100 meters", data: 19.86 },
    { date: "1/1/2020", distance: "100 meters", data: 19.74 },
    { date: "1/1/2020", distance: "100 meters", data: 20.05 },
    { date: "1/1/2020", distance: "100 meters", data: 20.21 },
    { date: "1/1/2020", distance: "100 meters", data: 20.36 },
    { date: "1/1/2020", distance: "100 meters", data: 19.89 },
    { date: "1/1/2020", distance: "100 meters", data: 19.95 },
    { date: "1/1/2020", distance: "100 meters", data: 20.12 },
    { date: "1/1/2020", distance: "100 meters", data: 19.78 },
    { date: "1/1/2020", distance: "100 meters", data: 19.81 },
    { date: "1/1/2020", distance: "100 meters", data: 19.68 },
    { date: "1/1/2020", distance: "100 meters", data: 19.79 },
    { date: "1/1/2020", distance: "100 meters", data: 19.63 },
  ]
);
