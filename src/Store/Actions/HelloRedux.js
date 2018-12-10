const HELLO_REDUX = "HELLO_REDUX"; // ACTION TYPE

//ACTION
const helloReduxAction = {
  title: "Tutorial de Redux - Coderghost"
};

//ACTION CREATOR
export default () => {
  return {
    type: HELLO_REDUX,
    payload: helloReduxAction
  };
};
