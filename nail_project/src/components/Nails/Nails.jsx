import React from 'react'
import nails from '../data/nails.js'
import Flickity from "react-flickity-component";
import './Nails.scss'

const flickityOptions = {
    initialIndex: 2,
  };

function Nails() {
    return (
        <div className='container-works'>
            <div className='container-works-title'>
            <h1>Works</h1>
            </div>
        <div>
          <Flickity
            className="Slider"
            elementType="div"
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static
          >
          {nails.map((nail, id)=>{
              return (
                <div key={id} className="Plate"> 
                <>
                <div style={{backgroundImage: `url(${nail.img})`,
                 width: '100%',
                height: 600,
                backgroundSize: 'cover'
    
                }}>
                  
                </div>
                </>
                </div>)
          })}
    
          </Flickity>
        </div>

        </div>
      );
}

export default Nails
