import './App.css';
import { getAuth, signInWithPopup ,GoogleAuthProvider, signOut } from "firebase/auth";
import app from './Firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {

  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogle = () =>{
    signInWithPopup(auth, googleProvider)
    .then( result =>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch( error =>{
      console.error(error)
    })
  }
  const haddleSignOut = () =>{
    signOut(auth)
    .then( () =>{
      setUser({})
    })
    .catch( (error) =>{
      console.error(error)
    })
  }
  return (
    <div className='App'>
      {
        user.uid ? <button onClick={haddleSignOut}>Sign Out</button> : <button onClick={handleGoogle}> 
</button>
      }

      {
        user.uid && 
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
      </div>
      }
    </div>
  );
}

export default App;
