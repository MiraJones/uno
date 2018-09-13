import React, {Component} from 'react'
import './JoinGame.css'

export default class JoinGame extends Component{
    constructor(){
        super();
        this.state={
            username: "",
            roomKey: ""
        }
    }

    handleUserName(e, type){
        type === "username" ? this.setState({username: e}): this.setState({roomKey: e})
        console.log(this.state)
    }

    submit(){
        
    }
    
    render(){
        return(
            <div>
                <h1 className="game-title">DOS</h1>
                <p>Username:</p>
                <input onChange={(e) => this.handleUserName(e.target.value, "username")} maxlength="15" required/>
                <p>RoomKey:</p>
                <input onChange={(e) => this.handleUserName(e.target.value, "roomKey")} maxlength="5" required/>
                <button onClick={()=> this.submit() }>Submit</button>
            </div>
        )
    }
}