import { makeAutoObservable } from "mobx";

class CommandStore{
    client=null
    message=null
    commands=null
    setClient(client){
        this.client=client
      }
      setMessage(msg){
        this.message=msg
      }

      setCommands(c){
        this.commands=c
      }
      constructor(){
        makeAutoObservable(this)
      }
  


      sendMessageWhenCreateCommand(command,content,id){
         const message = {
           command: command,
           content:content,
           userId:id
         }
           this.client.sendMessage("/app/command/add",JSON.stringify(message))
       }

       sendMessageWhenGetCommand(command,id){
        const message = {
          command: command,
          userId:id
        }
          this.client.sendMessage("/app/command/get",JSON.stringify(message))
      }



}
export default new CommandStore()
