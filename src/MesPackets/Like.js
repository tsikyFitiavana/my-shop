import React,{Component} from 'react'
import './like.css'
const icons = require('glyphicons')
class Like extends Component{

  
    constructor(){
        super()
        this.state =  {
            conteur: 0
        }
    }
    liker(){
        this.setState({
            conteur:this.state.conteur+1
        })
    }
    render(){
        return(
            <div>
                <span onClick ={()=>{this.liker()}}>{this.state.conteur}<span id="colorer">{icons.heart}</span></span>
            </div>
        )
    }

}
export default Like
