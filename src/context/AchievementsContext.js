import createDataContext from "./createDataContext";

const achievementsReducer = (state, action) => {
  switch (action.type) {
    case "edit_achievement":
      //look at the achievements one by one and determine if it should be replaced by action.payload
      return state.map((achievement) => {
        if (achievement.name === action.payload.name) {
          return {
            name: action.payload.name,
            progress: action.payload.progress,
            goal_bronze: state.find(
              (achievement) => achievement.name === action.payload.name
            ).goal_bronze,
            goal_silver: state.find(
              (achievement) => achievement.name === action.payload.name
            ).goal_silver,
            goal_gold: state.find(
              (achievement) => achievement.name === action.payload.name
            ).goal_gold,
          };
        } else {
          return achievement;
        }
      });
  }
};

const editAchievement = (dispatch) => {
  return (progress, name) => {
    dispatch({
      type: "edit_achievement",
      payload: {
        name,
        progress,
      },
    });
  };
};

export const { Context, Provider } = createDataContext(
  achievementsReducer,
  { editAchievement },
  [
    {
      name: "Run for _ meters in total",
      progress: 0,
      goal_bronze: 1000,
      goal_silver: 5000,
      goal_gold: 10000,
    },
    {
      name: "Run _ miles in one day",
      progress: 0,
      goal_bronze: 1,
      goal_silver: 2,
      goal_gold: 3,
    },
    {
      name: "Run _ different distances",
      progress: 0,
      goal_bronze: 2,
      goal_silver: 3,
      goal_gold: 4,
    },
  ]
)
  

// export const { Context, Provider } = createDataContext(
//   achievementsReducer,
//   { editAchievement },
//   [
//     {
//       name: "Run _ miles in one day",
//       progress: 0,
//       goal_bronze: 1,
//       goal_silver: 2,
//       goal_gold: 3,
//     },
//   ]

