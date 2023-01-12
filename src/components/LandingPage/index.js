import { Component } from "react";
import MessageBox from "../MessageBox";
import { v4 } from "uuid";
import { BsEmojiSmile, BsPeople } from "react-icons/bs";
import Popup from "reactjs-popup";
import Picker from "emoji-picker-react";

import "./index.css";

const userList = ["Alan", "bob", "Carol", "Dean", "Elin"];

class LandingPage extends Component {
  state = { msgsList: [], inputMsg: "" };

  onChangeInput = (e) => {
    this.setState({ inputMsg: e.target.value });
  };

  msgSending = (e) => {
    const { inputMsg } = this.state;
    const localTime = new Date().toLocaleTimeString();
    const msgIndex = Math.ceil(Math.random() * userList.length) - 1;
    const Allusers = userList[msgIndex];
    const firstUser = Allusers[0];

    if (e.key === "Enter") {
      const newUserMsg = {
        id: v4(),
        localTime,
        Allusers,
        firstUser,
        msgSender: inputMsg,
      };
      this.setState((prevState) => ({
        msgsList: [...prevState.msgsList, newUserMsg],
        inputMsg: "",
      }));
    }
  };

  clickOnEmojiIcon = (e, emojiObject) => {
    const { inputMsg } = this.state;
    const inputMsgEmoji = inputMsg + emojiObject.emoji;
    this.setState({ inputMsg: inputMsgEmoji });
  };

  render() {
    const { msgsList, inputMsg } = this.state;
    return (
      <div className="main-container">
        <div className="main-header">
          <h1 className="heading">Introduction</h1>
          <p className="para">This Channel is for company wide chatter</p>
        </div>
        <div className="right-numbers">
          <p className="desc">3 / 100</p>
          <BsPeople className="icon-1" />
        </div>
        <hr />
        <div>
          <ul className="top-msg-container">
            {msgsList.map((eachMsg) => (
              <MessageBox key={eachMsg.id} userMessageSender={eachMsg} />
            ))}
          </ul>
          <div className="input-box">
            <input
              type="text"
              placeholder="type your message here....."
              className="input-line"
              value={inputMsg}
              onKeyDown={this.msgSending}
              onChange={this.onChangeInput}
            />
            <Popup
              trigger={
                <button type="button" className="btn-emoji">
                  <BsEmojiSmile className="emoji-1" />
                </button>
              }
              position="top right"
            >
              <Picker clickOnEmojiIcon={this.clickOnEmojiIcon} />
            </Popup>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
