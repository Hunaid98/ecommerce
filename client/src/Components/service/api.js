import axios from 'axios';


const url = 'https://localhost:8000';

export const authenticateSignup = (user)=>{
    try{
        return axios.post(`${url}/signup`, user)

    }catch(error){
        console.log('error while calling user api')
    }
    
}

export const authenticateLogin= (user)=>{
    try{
        return axios.post(`${url}/login`, user);

    }catch(error){
        console.log('error while calling login api')
    }
    
}