import React from 'react'
import chatimage from '../assets/chat-image.png'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './joinGroup.css' 
import { joinGroup } from '../service/CreateRoom'


const JoinGroup = () => {
  
  const submitForm = async () =>{

    try{

       const response = await joinGroup(groupId) ; // await so that function yahaan par ruk jaaye jab tka response na aaye
       // and uske baad hi aage badhe 

       console.log(response.data) ; 

       

    }
    catch(error)
  {
     console.log("error") ; 
     toast.error("error in joining !" , { position : "top-right"}) ; 
  }

    setGroupId('') ;
    setUserName('') ; 
    console.log("hello") ; 
  }

   const [userName ,setUserName] = useState('') ; 
    const [groupId,setGroupId] = useState('') ; 


  return (
    <div className='join-group'>
       <h2> Join a group </h2>


          <img src={chatimage} alt="chat-icon" />

      <div className="join-form">
       <div className='join-form-child'>
       <label htmlFor="username"> Enter the user name </label>
       <input type="text" id="username" name="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
      </div>



        <div className='join-form-child'>
       <label htmlFor="groupid"> Enter the group Id </label>
       <input type="text" id="groupid" name="groupid" value={groupId} onChange={(e)=>{setGroupId(e.target.value)}}/>

        </div>


        <button onClick={submitForm}>Join</button>
      </div> 
      
      <ToastContainer/>

    </div>
  )
}

export default JoinGroup
