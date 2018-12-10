const initialState = {
  title: null
};

export default (state = initialState, action) => {
  if (action.type === "HELLO_REDUX") {
    return {
      ...state, //Creamos un objeto nuevo en base a las propiedades del state anterior
      title: action.payload.title // modificamos title
    };
  }
  return state;
};
