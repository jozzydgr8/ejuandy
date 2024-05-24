import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
import 'animate.css';
import {initializeApp} from 'firebase/app';
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { AuthContext } from "./Context/AuthContext/AuthContext";
import { ContextConsumer } from "./Context/IpCon/ContextConsumer";

//root
import { Root } from "./Template/Root";
//pages

import { Home } from "./Pages/Home/Home";
import { FinForm } from "./Pages/Home/FinForm";
import { Login } from "./Pages/Auth/Login";
import { Admin } from "./Pages/Auth/Admin/Admin";
import { AdminRoot } from "./Template/AdminRoot";
import { LoanClient } from "./Pages/Auth/Admin/LoanClient";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "ejuandy-dd839.firebaseapp.com",
  projectId: "ejuandy-dd839",
  storageBucket: "ejuandy-dd839.appspot.com",
  messagingSenderId: "505432447894",
  appId: "1:505432447894:web:c83a8a7cad1e5391d21bb7"
};

//initialize firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);




export const storage = getStorage(app);
export const colRef = collection(db, 'Data');


function App() {
  const {user, loading} = AuthContext();
  const {addy, loading:addyLoading} = ContextConsumer();

  if( loading){
    return <div>...loading</div>
  }
  
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="ejuandy" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='form' element={<FinForm />}/>
    </Route>

    <Route path='ejuandy/admin' element={addy ? <AdminRoot/> :<Navigate to='/ejuandy'/> }>
    <Route index element={user ? <Admin/> : <Navigate to ='auth'/>} />
    <Route path='auth' element={!user ? <Login/> : <Navigate to ='..' />} />
    <Route path=":id" element={user ? <LoanClient /> : <Navigate to ='/ejuandy' />} />
  </Route>
  </>
    
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
