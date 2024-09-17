'use client'
import Lightbox from 'react-image-lightbox'
import { Gallery, Image } from 'react-grid-gallery'
import 'react-image-lightbox/style.css'
import React, { useState } from 'react'

interface ImagesPhotos {
    images: Image
}

export default function EachImage (props: ImagesPhotos) {
  const [index, setIndex] = useState(-1)
  const currentImage = props.images[index]
  const nextIndex = (index + 1) % props.images.length
  const nextImage = props.images[nextIndex] || currentImage
  const prevIndex = (index + props.images.length - 1) % props.images.length
  const prevImage = props.images[prevIndex] || currentImage

  const handleClick = (index: number, item: CustomImage) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)
  return (
    <div>
      <Gallery
        images={props.images}
        onClick={handleClick}
        enableImageSelection={false}
      />
        <div className='italic text-dark'>@Lezen io</div>
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}
