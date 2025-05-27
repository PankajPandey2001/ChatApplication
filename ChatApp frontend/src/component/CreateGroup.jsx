import React, { useState } from 'react'
import './CreateGroup.css'

import chatimage from '../assets/chat-image.png'
import { createForm } from '../service/CreateRoom';
import { toast, ToastContainer } from 'react-toastify';

const CreateGroup = () => {

  const [userName ,setUserName] = useState('') ; 
  const [groupName ,setGroupName] = useState('') ; 
  const [groupId,setGroupId] = useState('') ; 

  const submitForm = async ()=>{
      
     try{
        const response = await createForm({
        'roomId' : groupId ,
        'roomName' : groupName
      }) ; 

    
       toast.success('Room created !' , {position: "top-right"}) ; 
      console.log("room creatd" , response) ; 
     }
     catch(error)
     {
       toast.error("error in creating form ") ; 
      console.log(error) ; 
     }


      console.log(userName+ " " + groupName + " "+ groupId) ; 
      setGroupId('') ;
      setUserName('') ;
      setGroupName('') ; 
  }

  return (
    <div className='Create-group'>
       <h2>Create a new group </h2>

          <img src={chatimage} alt="chat-icon" />

      <div className="create-form">

      
       <div className='create-form-child'>
       <label htmlFor="username"> Enter the user name </label>
       <input type="text" id="username" name="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
      </div>

         <div className='create-form-child'>


       <label htmlFor="groupname"> Enter the Group name </label>
       <input type="text" id="groupname" name="groupname" value={groupName} onChange={(e)=>{setGroupName(e.target.value);}}/>
        </div>


        <div className='create-form-child'>
       <label htmlFor="groupid"> Enter the group Id </label>
       <input type="text" id="groupid" name="groupid" value={groupId} onChange={(e)=>{setGroupId(e.target.value)}}/>

        </div>


        <button onClick={submitForm}>Create</button>
      </div> 
      
      <ToastContainer/>

    </div>
  )
}

export default CreateGroup ; 
