import React,{useEffect, useState} from 'react'
import { getUser } from '../../service/AuthService';
import c from '../../store/CommandStore';
import { observer } from 'mobx-react-lite';

const GetCommand = observer(()=>{
    const curUser = getUser();

    

    const [command, setCommand] = useState('');
    const sendMessage = () => {
        console.log(curUser.id)
        c.sendMessageWhenGetCommand(command, curUser.id)
    }
    const onChangeCommand = (e) => {
        setCommand(e.target.value);
    }
  return (
    <>
    <div>
        <input type="text" placeholder="command" style={{margin:100}} value={command} onChange={onChangeCommand} ></input>
        <button onClick={sendMessage}>Submit</button>
    </div>
    
    {c?.commands?.map((d)=>{
        return(
        <div key={d?.id} style={{marginLeft:100,display:'flex'}}>
        <div>command: {d?.name}</div>
        <div style={{marginLeft:30}}>content: {d?.content}</div>
        </div>
        )
    })}

    </>
  )
})

export default GetCommand