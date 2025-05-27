import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../component/Home'
import ChatPage from '../component/ChatPage'
import CreateGroup from '../component/CreateGroup'
import JoinGroup from '../component/JoinGroup'

const ChatRoutes = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/chat" element={<ChatPage/>} />
         <Route path="/create" element={<CreateGroup/>} />
          <Route path="/join" element={<JoinGroup/>} />

       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ChatRoutes
