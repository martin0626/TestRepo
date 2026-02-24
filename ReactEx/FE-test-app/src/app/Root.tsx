import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import type { RootState } from "../store/store";
import { authActions } from "../store/authSlice";

export default function RootPage(){
    const user = useSelector((state: RootState) => state.auth.user); 
    const dispatch = useDispatch();

    return (
        <>
            <nav className="mainNav">
                <Link to={"/"}>Home</Link>
                <Link to={"/form"}>Form</Link>
                <Link to={"/list"}>List</Link>
                <Link to={"/infinity"}>♾️</Link>

                
                {user ? <button className="mainNav-btn" onClick={() => dispatch(authActions.logout())}>Logout</button> : <Link to={"/auth"}>Auth</Link>}
                <p className="mainNav-logo">{user ? `Welcome, ${user.fullName || "Guest"}!` : "Please log in."}</p>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}