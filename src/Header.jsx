import * as React from "react";

class Header extends React.Component {
  state = {
    isLogining: true,
    loginUserName: "ojisan"
  };

  handleLogin = () => {
    this.setState({
      isLogining: true,
      loginUserName: "ojisan"
    });
  };

  handleLogout = () => {
    const { contentsEditState } = this.props;
    if (contentsEditState) {
      alert("入力中はログアウトできません。先に送信してください");
      return;
    }
    this.setState({
      isLogining: false,
      loginUserName: null
    });
  };

  render() {
    const { isLogining, loginUserName } = this.state;
    return (
      <div
        style={{ width: "100%", backgroundColor: "pink", textAlign: "right" }}
      >
        {isLogining ? (
          <React.Fragment>
            <span style={{ marginRight: "12px" }}>{loginUserName}さん</span>
            <a onClick={this.handleLogout}>logoutする</a>
          </React.Fragment>
        ) : (
          <span onClick={this.handleLogin}>loginする</span>
        )}
      </div>
    );
  }
}

export default Header;
