import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar
                    onClick={() => auth.signOut()}
                    src={user.photo} className="sidebar_avatar"

                />
                <div className="sidebar_input">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar_inputButton">
                    <RateReviewOutlined onClick={addChat} />
                </IconButton>
            </div>
            <div className="sidebar_chats">
                {chats.map(({ id, data: { chatName } }) => (
                    < SidebarChat key={id} id={id} chatName={chatName} />
                ))}
            </div>

        </div >
    )
}

export default Sidebar

