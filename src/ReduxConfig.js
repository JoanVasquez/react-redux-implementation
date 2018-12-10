import HelloRedux from "./Store/Actions/HelloRedux";

export const mapStateToProps = state => ({
  title: state.HelloReduxReducer.title
});
export const mapDispatchToProps = dispatch => ({
  onHelloRedux: () => dispatch(HelloRedux())
});
