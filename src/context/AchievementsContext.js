import createDataContext from "./createDataContext";

const achievementsReducer = (state, action) => {
  switch (action.type) {
    case "edit_achievement":
      //look at the achievements one by one and determine if it should be replaced by action.payload
      return state.map((achievement) => {
        if (achievement.id === action.payload.id) {
          return action.payload;
        } else {
          return achievement;
        }
      });
  }
};

const editAchievement = (dispatch) => {
  return (
    id,
    progress_bronze,
    progress_silver,
    progress_gold,
    goal_bronze,
    goal_silver,
    goal_gold,
    name
  ) => {
    dispatch({
      type: "edit_achievement",
      payload: {
        name,
        progress_bronze,
        progress_silver,
        progress_gold,
        goal_bronze,
        goal_silver,
        goal_gold,
        id,
      },
    });
  };
};

export const { Context, Provider } = createDataContext(
  achievementsReducer,
  { editAchievement },
  [
    {
      name: "Run for _ days of the week",
      progress_bronze: 0,
      progress_silver: 0,
      progress_gold: 0,
      goal_bronze: 2,
      goal_silver: 4,
      goal_gold: 6,
      id: 1,
    },
  ]
);
