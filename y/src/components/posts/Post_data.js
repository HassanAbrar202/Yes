import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './posts.css';
import PropTypes from 'prop-types';
function Post_data({single}) {
    const [imgUrl,setImgUrl]=useState([]);
    useEffect(()=>{
        if(single.featured_media>0)
        {
        axios.get(`http://localhost:8000/wp-json/wp/v2/media/${single.featured_media}`)
        .then(res=>
            {
                    setImgUrl(res.data.media_details.sizes.medium.source_url);
            })
        }
    },[])
    return (
            <div>
            <div className='col my-3'>
        <div class="card " style={{width:"20rem"}}>
        <img class="card-img-top" style={{height:"20rem",width:"20rem",objectFit:"cover"}} src={imgUrl} alt="Card image"/>
        <div class="card-body">
          <h5 class="card-title">{single.title.rendered}</h5>
          <p class="card-text" dangerouslySetInnerHTML={{ __html: single.content.rendered}} />
          </div>
        </div>
        </div>     
            </div> 
    )
}

export default Post_data
