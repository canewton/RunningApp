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
    { date: "1/1/2020", distance: "100 meters", data: "00:21.68", id: "1" },
    { date: "1/1/2020", distance: "100 meters", data: "00:20.24", id: "2" },
    { date: "1/1/2020", distance: "100 meters", data: "00:23.01", id: "3" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.86", id: "4" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.74", id: "5" },
    { date: "1/1/2020", distance: "100 meters", data: "00:20.05", id: "6" },
    { date: "1/1/2020", distance: "100 meters", data: "00:20.21", id: "7" },
    { date: "1/1/2020", distance: "100 meters", data: "00:20.36", id: "8" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.89", id: "9" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.95", id: "10" },
    { date: "1/1/2020", distance: "100 meters", data: "00:20.12", id: "11" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.78", id: "12" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.81", id: "13" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.68", id: "14" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.79", id: "15" },
    { date: "1/1/2020", distance: "100 meters", data: "00:19.63", id: "16" },
  ]
);
