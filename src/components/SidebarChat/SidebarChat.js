import React, { useState } from 'react'
import "./SidebarChat.css";
import { setChat } from '../../features/chatSlice';
import db from '../../config/firebase.config';
import { useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';

function SidebarChat() {

    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    useEffect(() => {
        db.collection('chats').doc(id).collection("messages").
            orderBy("timestamp", "desc").
            onSnapshot((snapshot) =>
                setChatInfo(
                    snapshot.docs.map((doc) => doc.data()))

            );
    }, [id])

    return (
        <div onClick={() => {
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,
                })
            )
        }}
            className="sidebarChat" >
            <Avatar src={chatInfo[0]?.photo} />
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>

            </div>
        </div >
    )
}

export default SidebarChat

