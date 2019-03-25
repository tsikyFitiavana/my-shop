import React, { Component } from 'react'
import LireComment from './LireComment';
import 'bootstrap/dist/css/bootstrap.css';
import './comment.css'
export default class Comment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }
    onChange = (event) => {
        this.setState({term: event.target.value});
      }

      onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }
  
    render() {
      return (
        <div>
            <form className="App" onSubmit={this.onSubmit}>
              <div id="margTop">
                <table>
                  <tr>
                    <td><input value={this.state.term} onChange={this.onChange} /></td>
                    <td><button className = "btn btn-primary">Comment</button></td>
                  </tr>
                </table>
              </div>
            </form>
            <LireComment items={this.state.items} />
        </div>
      );
    }
  }