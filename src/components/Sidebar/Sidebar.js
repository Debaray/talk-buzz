import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_input">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>

            </div>
        </div >
    )
}

export default Sidebar

