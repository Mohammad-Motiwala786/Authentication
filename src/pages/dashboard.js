import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const itHasToken = localStorage.getItem('token');

    const axiosHandler = axios.create({
        baseURL: "https://api.darwinstech.com/api/",
        headers: {
            "Accept": "application.json",
            "Authorization": localStorage.getItem("token")
        }
    })

    axiosHandler.get('/user').then((response) => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });

    useEffect(() => {
        if (itHasToken == null) {
            navigate('/login');
        }
    }, [])
    

    return (
        <>
            <h1>Welcome, dear</h1>
        </>
    )
}
export default Dashboard;