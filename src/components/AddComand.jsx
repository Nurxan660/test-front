import React, { useState } from 'react'
import { getUser } from '../service/AuthService';
import c from '../store/CommandStore';
import { observer } from 'mobx-react-lite';
import { Alert } from '@mui/material';
const AddComand = observer(() => {
    const curUser = getUser();
    const [content, setContent] = useState('');
    const [command, setCommand] = useState('');
    const sendMessage = () => {
        console.log(curUser.id)
        c.sendMessageWhenCreateCommand(command, content, curUser.id)
    }
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onChangeCommand = (e) => {
        setCommand(e.target.value);
    }
    return (

        <>
            <div style={{ margin: 100 }} >
                <input type="text" placeholder="command" value={command} onChange={onChangeCommand}></input>
                <input type="text" placeholder="content" value={content} onChange={onChangeContent} style={{ marginLeft: 10 }}></input>
                <button onClick={sendMessage}>Submit</button>
            </div>
            



        </>
    )
})

export default AddComand