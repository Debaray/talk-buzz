import React, { forwardRef } from 'react';
import "./Message.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Avatar } from '@material-ui/core';

const Message = forwardRef(({
    id,
    contents: { timestamp, displayName, email, message, photo, uid },
}, ref) => {
    const user = useSelector(selectUser);
    return (
        <div>
            <Avatar className="message_photo" src={photo} />
        </div>
    )
})

export default Message

