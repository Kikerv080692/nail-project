import React from 'react'
import './Works.scss'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}

function Works() {
  return (
    <div>
      <Flickity
      className="Slider"
      elementType='div'
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static
      >

      </Flickity>
    </div>
  )
}

export default Works
