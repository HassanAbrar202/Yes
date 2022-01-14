import React, { Component } from 'react';
import axios from 'axios';
import './posts.css';
import Post_data from './Post_data';

class Post extends Component {

    constructor() {
    super();
    this.state = {
      post: [],

    };
  } 
  componentDidMount() { 
    axios.get('http://localhost:8000/wp-json/wp/v2/posts')
    .then(response => {
      this.setState({ post: response.data });
    })
    .catch(error => {
        console.log(error);
    });
    }

  render() {
    return (

      <div className='container yelo'>
        <div className='row' style={{display:'flex'}}>
        {this.state.post.map((single) => {
            return(
             <Post_data key={single.id} single={single}/>                               
            );
        })}
        </div>
      </div>
    );
  }
}

export default Post;