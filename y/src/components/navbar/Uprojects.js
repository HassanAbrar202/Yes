import React, { Component } from 'react';
import axios from 'axios';
import './nav.css';
import Uprojects_data from './Uprojects_data';

class Uprojects extends Component {

    constructor() {
    super();
    this.state = {
      post: [],

    };
  } 
  componentDidMount() { 
    axios.get('http://localhost:8000/wp-json/wp/v2/upcoming-projects')
    .then(response => {
      this.setState({ post: response.data });
    })
    .catch(error => {
        console.log(error);
    });
    }

  render() {
    return (
        <div className='container-upcoming'>
      <div className="container">
      <h1 className="py-5">Upcoming Projects:</h1>
        <div className='row' style={{display:'flex'}}>
        {this.state.post.map((event) => {
            return(
             <Uprojects_data key={event.id} event={event}/>                               
            );
        })}
        </div>
      </div>
      </div>
    );
  }
}

export default Uprojects;