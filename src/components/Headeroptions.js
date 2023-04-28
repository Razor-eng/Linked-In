import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Header.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import firebase from 'firebase/compat/app'

function Headeroptions({ Icon, title, avatar, getData, active }) {
    const user = useSelector(selectUser);
    return (
        <>
            {
                Icon &&
                <div className={`headeroptions ${active === title && 'active'}`} onClick={() => getData(title)}>
                    <Icon />
                    <span>{title}</span>
                </div>
            }
            {
                avatar &&
                <div className='headeroptions'>
                    <Avatar name={avatar} src={user.photoURL} onClick={e => firebase.auth().signOut()} />
                    <span>{title}</span>
                </div>
            }
        </>
    )
}

export default Headeroptions
