import './App.css';
import LeftBar from './Components/leftBar/LeftBar.jsx';
import NavBar from './Components/navbar/NavBar.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import { createBrowserRouter, RouterProvider ,Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import RightBar from './Components/rightBar/RightBar.jsx';
import { Outlet } from 'react-router-dom';

function App() {

  const currentUser=true;

  const Layout =()=>{
    return(
      <div>
        <NavBar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
      </div>
      </div>
    )
  }

  const ProtectedRoute =({children})=>{
    if(!currentUser){
      return <Navigate to ="/login"/>

    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} /> {/* Ensure router prop is correctly passed */}
    </div>
  );
}

export default App;
