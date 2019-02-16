import * as React from "react";

class Contents extends React.Component {
  state = {
    isEditing: false
  };

  handleFocusForm = () => {
    const { onCheckEditingState } = this.props;
    this.setState({ isEditing: true });
    onCheckEditingState(true);
  };

  render() {
    const { isLogining, loginUserName } = this.props;
    const { isEditing } = this.state;
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form>
          <input onClick={this.handleFocusForm} />
          <br />
          <br />
          <button>送信する</button>
        </form>
      </div>
    );
  }
}

export default Contents;
