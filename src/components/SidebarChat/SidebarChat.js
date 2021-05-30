import React, { useState } from 'react'
import "./SidebarChat.css";
import { setChat } from '../../features/chatSlice';
import db from '../../config/firebase.config';
import { useDispatch } from 'react-redux';

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


        </div >
    )
}

export default SidebarChat

