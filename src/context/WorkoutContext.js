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
          time_data: action.payload.time_data,
        },
      ];
  }
};

const addWorkout = (dispatch) => {
  return (date, distance, data, callback, hard_data, time_data) => {
    dispatch({
      type: "add_workout",
      payload: { date, distance, data, id, hard_data, time_data },
    });
  };
};

export const { Context, Provider } = createDataContext(
  workoutReducer,
  { addWorkout },
  [
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      time: "00:10.68",
      id: "1",
      rank: 3,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 10.68],
    },
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      time: "00:11.01",
      id: "3",
      rank: 4,
      distance_data: [
        49.31,
        49.36,
        490.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 11.01],
    },
    {
      date: new Date("1/1/2021"),
      distance: "100 meters",
      time: "00:11.86",
      id: "4",
      rank: 6,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 11.86],
    },
    {
      date: new Date("1/1/2021"),
      distance: "200 meters",
      time: "00:19.74",
      id: "5",
      rank: 1,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 19.74],
    },
    {
      date: new Date("1/1/2021"),
      distance: "200 meters",
      time: "00:20.05",
      id: "6",
      rank: 2,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 20.05],
    },
    {
      date: new Date("1/1/2021"),
      distance: "200 meters",
      time: "00:20.21",
      id: "7",
      rank: 3,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 20.21],
    },
    {
      date: new Date("1/1/2021"),
      distance: "400 meters",
      time: "00:50.36",
      id: "8",
      rank: 1,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 50.36],
    },
    {
      date: new Date("1/1/2021"),
      distance: "400 meters",
      time: "00:51.89",
      id: "9",
      rank: 3,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 51.89],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      time: "02:10.95",
      id: "10",
      rank: 1,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 130.95],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      time: "02:12.12",
      id: "11",
      rank: 2,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 132.12],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      time: "02:12.78",
      id: "12",
      rank: 3,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 132.78],
    },
    {
      date: new Date("1/1/2021"),
      distance: "800 meters",
      time: "02:12.81",
      id: "13",
      rank: 4,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 132.81],
    },
    {
      date: new Date("1/1/2021"),
      distance: "1600 meters",
      time: "05:45.68",
      id: "14",
      rank: 0,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 345.68],
    },
    {
      date: new Date("1/2/2021"),
      distance: "1600 meters",
      time: "05:50.79",
      id: "15",
      rank: 0,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 350.79],
    },
    {
      date: new Date("1/2/2021"),
      distance: "1600 meters",
      time: "05:43.63",
      id: "16",
      rank: 0,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 343.63],
    },
    {
      date: new Date("1/10/2021"),
      distance: "200 meters",
      time: "00:20.63",
      id: "17",
      rank: 4,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 20.63],
    },
    {
      date: new Date("1/10/2021"),
      distance: "200 meters",
      time: "00:20.68",
      id: "18",
      rank: 5,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 20.68],
    },
    {
      date: new Date("1/10/2021"),
      distance: "400 meters",
      time: "00:50.89",
      id: "20",
      rank: 2,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 50.89],
    },
    {
      date: new Date("1/10/2021"),
      distance: "100 meters",
      time: "00:09.23",
      id: "21",
      rank: 1,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        50.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 9.23],
    },
    {
      date: new Date("3/23/2021"),
      distance: "100 meters",
      time: "00:09.89",
      id: "19",
      rank: 2,
      distance_data: [0, 6, 13, 21, 30, 43, 54, 65, 79, 89, 100],
      time_data: [1, 0, 0, 0, 0, 0, 0, 9.89],
    },
    {
      date: new Date("3/23/2021"),
      distance: "100 meters",
      time: "00:11.24",
      id: "2",
      rank: 5,
      distance_data: [
        49.31,
        49.36,
        49.38,
        49.85,
        5000.36,
        50.86,
        51.35,
        51.86,
        52.4,
        52.87,
        53.34,
        53.8,
      ],
      time_data: [1, 0, 0, 0, 0, 0, 0, 11.24],
    },
  ]
);
