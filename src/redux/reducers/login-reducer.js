const initialState = {
  fields: {
    email: {
      value: "",
      isPasswordCorrect: false,
    },
    password: {
      value: "",
      isPasswordCorrect: false,
    },
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
