

import axios from "axios";


const API_URL ="https://udunkulu-api.herokuapp.com/api/v1/";

const registerDetailsToServer =(email,lastName,password,firstName,stageName,role)=>{
    
    return axios.post(API_URL + "users",{
        email,
        lastName,
        password,
        firstName,
        stageName,
        role,
    }); 
}


const sendDetailsToServer =(email, password, role)=>{
    
    return axios.post(API_URL + "users/login",{
        email,
        password,
        role,
    });
}
export {registerDetailsToServer, sendDetailsToServer};
