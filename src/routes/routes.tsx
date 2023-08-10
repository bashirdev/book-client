
import {
  createBrowserRouter,
 
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DetailsBook from "../pages/DetailsBook";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateBookPage from "../pages/CreateBookPage";
import PrivateRoute from "./priveteRoute";
import Profile from "../pages/Profile";
import UpdateBook from "../pages/UpdateBook";





export const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
 
    children: [
      {
        index:true,
        element:<Home />
        
      },
      {
        path:'/addBook',
        element:(
          <PrivateRoute>
                 <CreateBookPage />
        </PrivateRoute>
        )

       
        
      },
      {
        path:'/profile',
        element:(
          <PrivateRoute>
             <Profile />
          </PrivateRoute>
        )
      },
      {
        path:'/updateBook/:id',
        element:(
          <PrivateRoute>
             <UpdateBook />
          </PrivateRoute>
        )
      },
      {
        path:'/details/:id',
        element:<DetailsBook />
        
      },
      {
        path:'/login',
        element:<Login />
        
      },
      {
        path:'/signup',
        element:<Signup />
        
      },
    ],
  },
]);

