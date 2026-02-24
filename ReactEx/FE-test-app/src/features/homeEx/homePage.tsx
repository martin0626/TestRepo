import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { authActions } from "../../store/authSlice";
import { useEffect } from "react";

export default function HomePage(){

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = searchParams.get("token");

    useEffect(() => {
        if(token) {
            dispatch(authActions.login({token}));
            navigate("", { replace: true });
        }
    }, []);

    return <h1>Home</h1>;
}