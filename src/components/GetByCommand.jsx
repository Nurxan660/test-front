import React from 'react'
import GetCommand from './Command/GetCommand'
import c from '../store/CommandStore'
import { getUser } from '../service/AuthService'
import SockJsClient from 'react-stomp';

const GetByCommand = () => {
    const curUser = getUser();

  return (
    <>
    <GetCommand/>
    <SockJsClient url='http://localhost:8080/ws'
          topics={[`/user/${curUser.id}`] }
           onConnect={() => {
              console.log("connected");
               }}
             onDisconnect={() => {
              console.log("Disconnected");
                  }}
              onMessage={(msg) => {
                console.log(msg)
                c.setCommands(msg)
              }}
            ref={(client) => {
              console.log(client)
              c.setClient(client)
             }}

            />

</>
  )
}

export default GetByCommand