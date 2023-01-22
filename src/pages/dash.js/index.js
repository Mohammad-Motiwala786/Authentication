import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosHandler from "../axios";

const Dash = () => {

    const navigate = useNavigate();
    const hasToken = localStorage.getItem("token");

    axiosHandler.get("/user")
        .then((res) => {
            console.log("res", res);
        })
        .catch((error) => {
            console.log("error", error);
        });

    useEffect(() => {
        if (hasToken == null) {
            navigate("/log");
        }
    }, [])

    return (
        <>
            <h1>Welcome, Dear Dash</h1>
        </>
    )
}
export default Dash;