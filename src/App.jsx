import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut  } from "firebase/auth";
import app from './components/firebase/firebase.config';

function App() {
  const params = useLocation();
  const UseName = params.state.loggedInUser
   console.log(params.state.loggedInUser);
   const auth = getAuth(app);
   const navigate = useNavigate()



   const handleSignOut = () => {
    signOut(auth)
        .then(result => {
            console.log(result);
            navigate(-1)
        })
        .catch(error => {
            console.log(error)
        })
      }
  return (
    <>
    <h1>welcome {UseName} </h1>
    <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}

export default App
