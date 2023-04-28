import React, { useEffect, useState } from 'react'
import '../css/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { loginuser } from '../features/userSlice';

function Login() {
    const generateDiceBearAvataaars = (seed) =>
        `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;
    const [photoURL, setPhotoURL] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [signUp, setSignUp] = useState(false);
    const toastOptions = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }
    const dispatch = useDispatch();
    let imgGen = '';

    useEffect(() => {
        // eslint-disable-next-line
        imgGen = generateDiceBearAvataaars(Math.random());
        setPhotoURL(imgGen)
    }, [])

    const register = (e) => {
        e.preventDefault();
        if (!name) {
            toast.warn('Name is Required!', toastOptions);
        }
        if (photoURL) {
            toast.warn('photoURL is Blank!', toastOptions);
            setPhotoURL(photoURL);
        }
        if (!photoURL) {
            setPhotoURL(imgGen)
        }
        if (!email) {
            toast.warn('Email is Required!', toastOptions);
        }
        if (!password) {
            toast.warn('Password is Required!', toastOptions);
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                dispatch(loginuser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: photoURL,
                    displayName: name
                }))
            })
        }).catch(error => alert(error));

        setName('')
        setPhotoURL('')
        setEmail('')
        setPassword('')
    }

    const login = (e) => {
        e.preventDefault();
        if (!email) {
            toast.warn('Email is Required!', toastOptions);
        }
        if (!password) {
            toast.warn('Password is Required!', toastOptions);
        }
        auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
            dispatch(loginuser({
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName
            }))
        }).catch(err => toast.error('Something went wrong!', toastOptions))
        setEmail('')
        setPassword('')
    }

    return (
        <div className='login'>
            <img src="https://www.seekpng.com/png/detail/371-3715298_advertise-on-linkedin-linkedin-logo-no-background.png" alt="" />
            {signUp ?
                <form onSubmit={register}>
                    <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder='Profile Picture URL' value={photoURL} onChange={e => setPhotoURL(e.target.value)} />
                    <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Sign Up" />
                    <h4>Already a member ? <span onClick={e => setSignUp(false)}>Login Here</span></h4>
                </form>
                :
                <form onSubmit={login}>
                    <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Sign In" />
                    <h4>Not a member ? <span onClick={e => setSignUp(true)}>Register Here</span></h4>
                </form>
            }
            <ToastContainer />
        </div>
    )
}

export default Login
