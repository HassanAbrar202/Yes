import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './nav.css';
function Post_data({event}) {
    const [imgUrl,setImgUrl]=useState([]);
    useEffect(()=>{
        if(event.featured_media>0)
        {
        axios.get(`http://localhost:8000/wp-json/wp/v2/media/${event.featured_media}`)
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
          <h5 class="card-title">{event.title.rendered}</h5>
          <p class="card-text" dangerouslySetInnerHTML={{ __html: event.content.rendered}} />
          </div>
        </div>
        </div>     
            </div>
    )
}

export default Post_data
