import React, { useState } from 'react'
import './CreateGroup.css'

import chatimage from '../assets/chat-image.png'


const CreateGroup = () => {

  const [userName ,setUserName] = useState('') ; 
  const [groupName ,setGroupName] = useState('') ; 
  const [groupId,setGroupId] = useState('') ; 

  const submitForm =()=>{
      console.log(userName+ " " + groupName + " "+ groupId) ; 
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


    </div>
  )
}

export default CreateGroup ; 
