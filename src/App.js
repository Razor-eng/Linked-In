import React, { useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widget';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(loginuser({
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName
        }));
      }
      else {
        dispatch(logoutuser());
      }
    })
  }, [])

  return (
    <>
      {!user ?
        <Login />
        :
        <div className='app'>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      }
    </>
  )
}

export default App
