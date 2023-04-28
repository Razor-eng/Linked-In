import { Avatar } from '@material-ui/core'
import { BusinessCenter, Home, Message, Notifications, People, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/Header.css'
import Headeroptions from './Headeroptions'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Header() {
    const user = useSelector(selectUser);
    console.log(user)
    const [val, setVal] = useState('Home')
    function getVal(title) {
        setVal(title);
    }
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_logo">
                    <img src="/linkedin.png" alt="" />
                </div>
                <div className="header_search">
                    <Search />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header_right">
                <Headeroptions Icon={Home} title="Home" getData={getVal} active={val} />
                <Headeroptions Icon={People} title="My Network" getData={getVal} active={val} />
                <Headeroptions Icon={BusinessCenter} title="Jobs" getData={getVal} active={val} />
                <Headeroptions Icon={Message} title="Messaging" getData={getVal} active={val} />
                <Headeroptions Icon={Notifications} title="Notification" getData={getVal} active={val} />
                <Headeroptions avatar={Avatar} title={user.displayName} />
            </div>
        </div>
    )
}

export default Header
