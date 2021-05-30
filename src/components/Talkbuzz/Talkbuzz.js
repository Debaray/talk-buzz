import React from "react";
import "./Talkbuzz.css";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";

function Talkbuzz() {
  return (
    <div className='talkbuzz'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Talkbuzz;
