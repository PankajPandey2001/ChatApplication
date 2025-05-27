import axios from "axios";

const API_BASE_URL = "http://localhost:8080" ; 

export async function createForm(userData)
{

    try{   // await stops the function to wait until the https response comes to go to next line , becuase obviousuly you will
        // return response only when respone will come from api
        const response = await axios.post(`${API_BASE_URL}/room/create`,userData , {
        headers:{
            'Content-Type' : 'application/json'
        }
    })  ; 
      return response ; 
    }
    catch(error){
         console.log("this is the error " + error) ; 
         throw error ; 
    }

}

export async function joinGroup(roomId)
{

    try{   // await stops the function to wait until the https response comes to go to next line , becuase obviousuly you will
        // return response only when respone will come from api
        const response = await axios.get(`${API_BASE_URL}/room/${roomId}`)  ; 
      return response ; 
    }
    catch(error){
         console.log("this is the error " + error) ; 
         throw error ; 
    }

}

