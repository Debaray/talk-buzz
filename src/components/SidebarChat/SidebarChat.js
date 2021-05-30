import React, { useState } from 'react'
import "./SidebarChat.css";
import { setChat } from '../../features/chatSlice';
import db from '../../config/firebase.config';
import { useDispatch } from 'react-redux';

function SidebarChat() {

    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);
    return (
        <div className="sidebarChat">
            <h2>this is sidebar chat</h2>
        </div >
    )
}

export default SidebarChat

