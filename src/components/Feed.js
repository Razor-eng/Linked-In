import React, { useEffect, useState } from 'react'
import '../css/Feed.css'
import { Avatar } from '@material-ui/core'
import { Assignment, Photo, Today, YouTube } from '@material-ui/icons'
import Post from './Post'
import { db } from '../firebase'
import firebase from "firebase/compat/app";
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    const submitPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            descrption: 'This is the test Description',
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className='feed'>
            <div className="feed_input">
                <div className="feed_form">
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start a post' onChange={e => setInput(e.target.value)} value={input} />
                        <input type="submit" />
                    </form>
                </div>
                <div className="feed_options">
                    <div className="option">
                        <Photo style={{ color: '#70b5f9' }} />
                        <span>Photo</span>
                    </div>
                    <div className="option">
                        <YouTube style={{ color: '#7fc15e' }} />
                        <span>Video</span>
                    </div>
                    <div className="option">
                        <Today style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>
                    <div className="option">
                        <Assignment style={{ color: '#fc9295' }} />
                        <span>Write Article</span>
                    </div>
                </div>
            </div>
            <FlipMove>
                {
                    posts.map(({ id, data: { name, descrption, message, photoURL } }) => {
                        return <Post key={id} name={name} descrption={descrption} message={message} photoURL={photoURL} />
                    })
                }
            </FlipMove>
        </div>
    )
}

export default Feed
