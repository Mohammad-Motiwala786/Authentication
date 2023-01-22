import axios from "axios";

const axiosHandler= axios.create({
    baseURL:"https://api.darwinstech.com/api/",
    headers:{
        "Accept": "application/json",
        "Authorization": localStorage.getItem("token")
    }
})

export default axiosHandler;



