import React from "react";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./ReduxConfig";

class App extends React.Component {
  componentDidMount() {
    this.props.onHelloRedux();
  }

  render() {
    return this.props.title;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
