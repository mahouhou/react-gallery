import React, { useState } from "react"
import Loading from "./Loading"

export default function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [numLoaded, setNumLoaded] = useState(0)

  const handleClick = () => {
    const length = images.length - 1
    // if the current image is less than the total number of images
    // move on to the next image in the sequence,
    // otherwise loop round to the start
    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    )
  }

  // I added a back arrow to the navigation
  // and handleBackClick function to navigate back
  const handleBackClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) =>
      currentImage > 0 ? currentImage - 1 : length
    )
  }

  // when each image has loaded, this function is called
  // which keeps count of how many images have been loaded
  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1)
  }

  return (
    <figure>
      {numLoaded < images.length && (
        <Loading calculatedWidth={(numLoaded / images.length) * 100} />
      )}
      <figcaption>
        <button onClick={handleBackClick}>&#8592;</button> {currentImage + 1} /{" "}
        {images.length} <button onClick={handleClick}>&#8594;</button>
      </figcaption>
      {images.map((imageURL, index) => (
        <img
          alt={index}
          key={imageURL}
          src={imageURL}
          onLoad={handleImageLoad}
          className={currentImage === index ? "display" : "hide"}
        />
      ))}
    </figure>
  )
}
