import createDataContext from "./createDataContext";

const workoutReducer = (state, action) => {
  switch (action.type) {
    case "add_workout":
      return [
        ...state,
        {
          id: action.payload.id,
          date: action.payload.date,
          distance: action.payload.distance,
          hard_data: action.payload.hard_data,
          //added hard data list
        },
      ];
  }
};

const addWorkout = (dispatch) => {
  return (date, distance, data, callback, hard_data) => {
    //added hard_data list? doesn't work 
    dispatch({ type: "add_workout", payload: { date, distance, data, id, hard_data} });
  };
};

export const { Context, Provider } = createDataContext(
  workoutReducer,
  { addWorkout },
  [
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      data: "00:10.68",
      id: "1",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      data: "00:11.24",
      id: "2",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      data: "00:11.01",
      id: "3",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      data: "00:11.86",
      id: "4",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "200 meters",
      data: "00:19.74",
      id: "5",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "200 meters",
      data: "00:20.05",
      id: "6",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "200 meters",
      data: "00:20.21",
      id: "7",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "400 meters",
      data: "00:50.36",
      id: "8",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "400 meters",
      data: "00:51.89",
      id: "9",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      data: "02:10.95",
      id: "10",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      data: "02:12.12",
      id: "11",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      data: "02:12.78",
      id: "12",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      data: "02:12.81",
      id: "13",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/1/2021"),
      distance: "1600 meters",
      data: "05:45.68",
      id: "14",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/2/2021"),
      distance: "1600 meters",
      data: "05:50.79",
      id: "15",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/2/2021"),
      distance: "1600 meters",
      data: "05:43.63",
      id: "16",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/10/2021"),
      distance: "200 meters",
      data: "00:20.63",
      id: "17",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/10/2021"),
      distance: "200 meters",
      data: "00:20.68",
      id: "18",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/10/2021"),
      distance: "100 meters",
      data: "00:09.21",
      id: "19",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/10/2021"),
      distance: "400 meters",
      data: "00:50.89",
      id: "20",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
    {
      date: new Date("1/10/2021"),
      distance: "100 meters",
      data: "00:49.23",
      id: "21",
      hard_data: [49.31,49.36,49.38,49.85,50.36,50.86,51.35,51.86,52.4,52.87,53.34,53.8],
    },
  ]
);
