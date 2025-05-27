import React from 'react'
import image from '../assets/image.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate() ; 

  return (
    <div className='login-box'>
        <img src={image} alt='login-icon'/>


       <h3> Welcome to this chatting app </h3>
      <div className='dir-button'>
         <button onClick={()=>{navigate('/create')}}>Create Room </button>

        <button onClick={()=>{navigate('/join')}}> Join room </button>

      </div>

    </div>
  )
}

export default Home
