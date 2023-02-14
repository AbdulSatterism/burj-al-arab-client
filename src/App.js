import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Main from './Layout/Main';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/booking/:id',
          element: <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
