import React ,{useState,useEffect} from 'react';
import './slider.css';
import axios from 'axios'; 
function SliderData({Slide,current,index}) {
    const [imgUrl,setImgUrl]=useState([]);
    
        axios.get(`http://localhost:8000/wp-json/wp/v2/media/${Slide.featured_media}`)
        .then(res=>
            {
            //setImgUrl(res.data.media_details.sizes.medium.source_url);
            console.log(res.data.media_details.sizes.medium.source_url);})
    return (
        <div>
            <div className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
              <img src={imgUrl} alt='travel image' className='image' />
              )}
          </div>
        </div>
    )
}

export default SliderData
