import React from 'react'
import '../css/Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    return (
        <div className='sidebar'>
            <div className="sidebar_profile">
                <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                <div className="profile_details">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                    <p>Web Developer</p>
                </div>
                <div className="profile_stats">
                    <span>Who viewed your profile</span>
                    <span className="profile_number">20</span>
                </div>
                <div className="profile_stats">
                    <span>Connection<br /><b>Grow Your Network</b></span>
                    <span className="profile_number">220</span>
                </div>
            </div>
            <div className="sidebar_recent">
                <p>Recent</p>
                <p className='hash'><span>#</span> branding</p>
                <p className='hash'><span>#</span> marketing</p>
                <p className='hash'><span>#</span> webdevelopment</p>
                <p className='hash'><span>#</span> programming</p>
                <p className='hash'><span>#</span> reactjs</p>
                <p className='hash'><span>#</span> redux</p>
            </div>
        </div>
    )
}

export default Sidebar
