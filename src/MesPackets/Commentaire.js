import React, { Component } from 'react'
import LireComment from './LireComment';
import 'bootstrap/dist/css/bootstrap.css';
import './comment.css'
export default class Comment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: [],
      };
    }
    onChange = (event) => {
        this.setState({term: event.target.value});     
      }
    render() {
      return (
        <div>
            <form className="App" >
              <div id="margTop">
                <table>
                  <tbody>
                    <tr>
                    <td><input value={this.state.term} onChange={this.onChange} id="checkErreurComment"/>
                    
                    </td>
                    <td><button onClick={(event) => {

                        var checkErreurComment = document.getElementById('checkErreurComment')
                        var val = checkErreurComment.value
                        if(val ===""){
                          event.preventDefault()
                          var affichageErreurComment = document.getElementById('affichageErreurComment')
                          affichageErreurComment.innerHTML = 'Le champs doit etre remplis'
                        }else{
                        event.preventDefault()
                        var affichageErreurComment1 = document.getElementById('affichageErreurComment')
                          affichageErreurComment1.innerHTML = ''
                      this.setState({
                        term: '',
                        items: [...this.state.items, this.state.term],
                        
                      });
                      console.log('ok')
                    }
                      
                    }} className = "btn btn-primary">Comment</button></td>
                  </tr>
                  <tr>
                    <td><p id="affichageErreurComment"></p></td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <LireComment items={this.state.items}/>
        </div>
      );
    }
  }