import { Component } from "react";

import { AiFillLike } from "react-icons/ai";

import "./index.css";

class MessageBox extends Component {
  state = { count: 0, newList: [] };

  componentDidMount() {
    const { userMessageSender } = this.props;
    this.setState({ newList: userMessageSender });
  }

  onClickLike = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { newList, count } = this.state;
    const { msgSender, localTime, Allusers, initial } = newList;
    const likeCount = count > 0 ? count : "";
    let initialColor = "";
    switch (initial) {
      case "A":
        initialColor = "pink";
        break;
      case "B":
        initialColor = "yellow";
        break;
      case "C":
        initialColor = "red";
        break;
      case "D":
        initialColor = "blue";
        break;
      case "E":
        initialColor = "green";
        break;
      default:
        break;
    }

    return (
      <li className="user-msg-container">
        <div className="content">
          <p className={`${initialColor} initial-user`}>{initial}</p>
          <h3 className="user-name">{Allusers}</h3>
          <p className="time">{localTime}</p>
        </div>
        <div className="msg-like-container">
          <div className="msg-content">
            <p className="message">{msgSender}</p>
          </div>
          <button className="like-btn" type="button" onClick={this.onClickLike}>
            <AiFillLike className="like-icon" />
          </button>
          <p className="like-count">{likeCount}</p>
        </div>
      </li>
    );
  }
}

export default MessageBox;
