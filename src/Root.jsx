import * as React from "react";
import Header from "./Header";
import Contents from "./Contents";

class Root extends React.Component {
  state = { contentsEditState: false };

  onCheckEditingState = editState => {
    this.setState({ contentsEditState: editState });
  };

  render() {
    const { contentsEditState } = this.state;
    return (
      <div>
        <Header contentsEditState={contentsEditState} />
        <Contents onCheckEditingState={this.onCheckEditingState} />
      </div>
    );
  }
}

export default Root;
