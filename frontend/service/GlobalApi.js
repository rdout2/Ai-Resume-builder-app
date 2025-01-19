
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

 
 
 const axiosCLient = axios.create({
    baseURL: "http://localhost:5173/api/",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${API_KEY}`,
    }
});



const createResume = (data) => {axiosCLient.post('/user-resume', data )};
export default{ 
    createResume  };