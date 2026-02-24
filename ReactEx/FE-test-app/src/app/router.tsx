import { createBrowserRouter } from "react-router";
import HomePage from "../features/homeEx/homePage";
import FormPage from "../features/userFormEx/formPage";
import  RootPage from "./Root";
import ListPage from "../features/listResultsEx/ListPage";
import AuthPage from "../features/auth/authPage";
import ProtectedRoutes from "../features/auth/ProtectedRoutes";
import InfinityPage from "../features/inifinty/infinityPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
        {
            element: <HomePage/>,
            index: true
        },
        {
            element: <ProtectedRoutes/>,
            children: [
                {
                    path: '/form',
                    element: <FormPage/>
                },
                {
                    path: '/list',
                    element: <ListPage/>
                },
                {
                    path: '/infinity',
                    element: <InfinityPage/>
                },
            ]
        },
        
        {
            path: '/auth',
            element: <AuthPage/>
        }
    ]
  },
]);