import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/Form/LoginForm'
import React,{useEffect, useState} from 'react'
import RegistrationForm from './components/Form/RegistrationForm'
import AddComand from './components/AddComand.jsx'
import GetByCommand from './components/GetByCommand.jsx'
import SockJsClient from 'react-stomp';
import c from './store/CommandStore.js'
import { getUser } from './service/AuthService.js'
function App() {
  const curUser = getUser();


  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
        <Route exact path='/addCommand' element={<AddComand/>} />
        <Route exact path='/getByCommand' element={<GetByCommand/>} />
        <Route exact path='/' element={<LoginForm/>} />
        <Route exact path='/reg' element={<RegistrationForm/>} />

      </Routes>
      
    </main>
    <SockJsClient url='http://localhost:8080/ws'
          topics={[`/user/addCommand/${curUser.id}`] }
           onConnect={() => {
              console.log("connected");
               }}
             onDisconnect={() => {
              console.log("Disconnected");
                  }}
              onMessage={(msg) => {
                console.log(msg)
                c.setMessage(msg)
              }}
            ref={(client) => {
              console.log(client)
              c.setClient(client)
             }}

            />
    
    </BrowserRouter>
  );
}

export default App;
