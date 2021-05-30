import React from 'react'
import "./Message.css";
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Avatar } from '@material-ui/core';

function Message() {
    return (
        <div>
            <Avatar className="message_photo" src={photo} />
        </div>
    )
}

export default Message

