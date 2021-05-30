import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectChatId, selectChatName } from "../../features/chatSlice";
import Message from "../Message/Message";
import db from "../../config/firebase.config";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    //Add information to firebase database
    db.collection("chats").doc(`${chatId}`).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput("");
  };
  return (
    <div className='chat'>
      <div className='chatHeader'>
        <h4>
          To: <span className='chatName'>{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* Add chat messages dynamically */}
      <div className='chatMessages'>
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>

      <div className='chatInput'>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Let's talk..."
            type='text'
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <MicNoneIcon className='chatMic' />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
