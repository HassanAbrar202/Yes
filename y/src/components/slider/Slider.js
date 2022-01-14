import React ,{useState,useEffect} from 'react';
import  SliderData  from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css';
import axios from 'axios'; 

function Slider() {
    const [Slider,setSlider]=useState([]);
    const [current, setCurrent] = useState(0);
    const length=Slider.length;   
  useEffect(()=>
  {
    axios.get('http://localhost:8000/wp-json/wp/v2/sliders')
    .then(res=>{setSlider(res.data);})
    .catch(err=>console.log(err));
    console.log({Slider});
  },[])
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
    return (
        <div>
            <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {Slider.map((Slide,index)=>{
           <SliderData Slide={Slide} index={index} current={current}/>
        })}
         </section>
        </div>
    )
}

export default Slider   